import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { randomUUID, timingSafeEqual } from 'node:crypto';
import { createServer as createViteServer } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();
const distDir = resolve(root, 'dist');
const dataDir = resolve(root, 'data');
const contentFile = join(dataDir, 'content.json');
const env = await readEnvFile(join(root, '.env.local'));
const phpConfig = await readPhpAdminConfig(join(root, 'public', 'api', 'config.php'));

const adminUser = process.env.ADMIN_USER || env.ADMIN_USER || phpConfig.ADMIN_USERNAME || 'admin';
const adminPassword = process.env.ADMIN_PASSWORD || env.ADMIN_PASSWORD || phpConfig.ADMIN_PASSWORD || 'admin123';
const sessions = new Set();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const vite = isProduction
  ? null
  : await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

const server = createServer(async (req, res) => {
  try {
    if (req.url?.startsWith('/api/') || req.url?.startsWith('/main-web/api/')) {
      await handleApi(req, res);
      return;
    }

    if (vite) {
      vite.middlewares(req, res);
      return;
    }

    await serveStatic(req, res);
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: 'Terjadi kesalahan server.' });
  }
});

const port = Number(process.env.PORT || 3000);
server.listen(port, '0.0.0.0', () => {
  console.log(`Server ready at http://127.0.0.1:${port}/main-web/`);
});

async function handleApi(req, res) {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  if (
    req.method === 'GET' &&
    (url.pathname === '/api/content' ||
      url.pathname === '/api/content.php' ||
      url.pathname === '/main-web/api/content.php')
  ) {
    sendJson(res, 200, await readContent());
    return;
  }

  if (
    req.method === 'POST' &&
    (url.pathname === '/api/admin/login' ||
      url.pathname === '/api/login.php' ||
      url.pathname === '/main-web/api/login.php')
  ) {
    const body = await readJsonBody(req);
    const isValid =
      safeEqual(String(body.username || ''), adminUser) &&
      safeEqual(String(body.password || ''), adminPassword);

    if (!isValid) {
      sendJson(res, 401, { error: 'Username atau password salah.' });
      return;
    }

    const token = randomUUID();
    sessions.add(token);
    sendJson(res, 200, { token });
    return;
  }

  if (
    req.method === 'POST' &&
    (url.pathname === '/api/content' ||
      url.pathname === '/api/content.php' ||
      url.pathname === '/main-web/api/content.php')
  ) {
    if (!isAuthorized(req)) {
      sendJson(res, 401, { error: 'Login admin diperlukan.' });
      return;
    }

    const body = await readJsonBody(req);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      sendJson(res, 400, { error: 'Format konten tidak valid.' });
      return;
    }

    await writeContent(body);
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: 'API tidak ditemukan.' });
}

async function readContent() {
  try {
    const raw = await readFile(contentFile, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeContent(content) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(contentFile, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
}

function isAuthorized(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  return sessions.has(token);
}

function safeEqual(value, expected) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  if (valueBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(valueBuffer, expectedBuffer);
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(JSON.stringify(body));
}

async function serveStatic(req, res) {
  const url = new URL(req.url || '/', 'http://localhost');
  const cleanPath = normalize(decodeURIComponent(url.pathname.replace(/^\/main-web\/?/, '/')));
  const filePath = resolve(distDir, cleanPath === '/' ? 'index.html' : `.${cleanPath}`);

  if (!filePath.startsWith(distDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error('Not a file');

    res.writeHead(200, {
      'content-type': mimeTypes[extname(filePath)] || 'application/octet-stream',
    });
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    createReadStream(join(distDir, 'index.html')).pipe(res);
  }
}

async function readEnvFile(filePath) {
  try {
    const raw = await readFile(filePath, 'utf8');
    return Object.fromEntries(
      raw
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#') && line.includes('='))
        .map((line) => {
          const index = line.indexOf('=');
          const key = line.slice(0, index).trim();
          const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, '');
          return [key, value];
        })
    );
  } catch {
    return {};
  }
}

async function readPhpAdminConfig(filePath) {
  try {
    const raw = await readFile(filePath, 'utf8');
    const username = raw.match(/const\s+ADMIN_USERNAME\s*=\s*['"]([^'"]+)['"]\s*;/);
    const password = raw.match(/const\s+ADMIN_PASSWORD\s*=\s*['"]([^'"]+)['"]\s*;/);

    return {
      ADMIN_USERNAME: username?.[1],
      ADMIN_PASSWORD: password?.[1],
    };
  } catch {
    return {};
  }
}
