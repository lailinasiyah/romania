import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Edit3, Lock, RotateCcw, Save, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

type PageContent = Record<string, string>;
type StoredContent = Record<string, PageContent>;

const SELECTOR = 'main h1, main h2, main h3, main h4, main p, main li, main a';
const API_BASE = `${import.meta.env.BASE_URL}api`;

const fetchContent = async (): Promise<StoredContent> => {
  const response = await fetch(`${API_BASE}/content.php`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Gagal mengambil konten.');
  return response.json();
};

const isEditableElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) return false;
  if (element.closest('[data-admin-editor]')) return false;
  if (!element.textContent?.trim()) return false;
  return true;
};

const AdminContentEditor: React.FC = () => {
  const location = useLocation();
  const pageKey = useMemo(() => location.pathname || '/', [location.pathname]);
  const [content, setContent] = useState<StoredContent>({});
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const loadContent = useCallback(async () => {
    try {
      const nextContent = await fetchContent();
      setContent(nextContent);
    } catch {
      setError('Konten server belum bisa dimuat.');
    }
  }, []);

  const applyContent = useCallback(() => {
    const pageContent = content[pageKey] || {};
    const elements = Array.from(document.querySelectorAll(SELECTOR)).filter(isEditableElement);

    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      const key = `${pageKey}:${index}`;
      htmlElement.dataset.adminContentKey = key;

      if (!adminEditingState.current && pageContent[key] !== undefined && htmlElement.innerHTML !== pageContent[key]) {
        htmlElement.innerHTML = pageContent[key];
      }

      if (isAdminMode) {
        htmlElement.contentEditable = 'true';
        htmlElement.dataset.adminEditable = 'true';
        htmlElement.setAttribute('spellcheck', 'false');
        htmlElement.addEventListener('click', preventAdminNavigation);
        htmlElement.addEventListener('focus', markEditing);
        htmlElement.addEventListener('blur', unmarkEditing);
      } else {
        htmlElement.contentEditable = 'false';
        htmlElement.removeAttribute('data-admin-editable');
        htmlElement.removeAttribute('spellcheck');
        htmlElement.removeEventListener('click', preventAdminNavigation);
        htmlElement.removeEventListener('focus', markEditing);
        htmlElement.removeEventListener('blur', unmarkEditing);
      }
    });
  }, [content, isAdminMode, pageKey]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  useEffect(() => {
    adminEditingState.current = false;
    setError('');
    setStatus('');
    loadContent();
  }, [loadContent, pageKey]);

  useEffect(() => {
    applyContent();

    const observer = new MutationObserver(() => {
      applyContent();
    });

    const main = document.querySelector('main');
    if (main) {
      observer.observe(main, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      Array.from(document.querySelectorAll('[data-admin-content-key]')).forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.contentEditable = 'false';
        htmlElement.removeAttribute('data-admin-editable');
        htmlElement.removeEventListener('click', preventAdminNavigation);
        htmlElement.removeEventListener('focus', markEditing);
        htmlElement.removeEventListener('blur', unmarkEditing);
      });
    };
  }, [applyContent]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setStatus('');

    try {
      const response = await fetch(`${API_BASE}/login.php`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.error || 'Login gagal.');
      }

      setToken(body.token);
      setPassword('');
      setShowLogin(false);
      setIsAdminMode(true);
      setStatus('Login berhasil');
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Login gagal.');
    }
  };

  const handleSave = async () => {
    setError('');
    setStatus('');

    const nextPageContent: PageContent = {};
    const elements = Array.from(document.querySelectorAll('[data-admin-content-key]')).filter(isEditableElement);

    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      const key = htmlElement.dataset.adminContentKey;
      if (key) {
        nextPageContent[key] = htmlElement.innerHTML;
      }
    });

    const nextContent = {
      ...content,
      [pageKey]: nextPageContent,
    };

    try {
      const response = await fetch(`${API_BASE}/content.php`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(nextContent),
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.error || 'Gagal menyimpan konten.');
      }

      setContent(nextContent);
      setStatus('Tersimpan di server');
      window.setTimeout(() => setStatus(''), 1800);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Gagal menyimpan konten.');
    }
  };

  const handleResetPage = async () => {
    setError('');
    setStatus('');

    const nextContent = { ...content };
    delete nextContent[pageKey];

    try {
      const response = await fetch(`${API_BASE}/content.php`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(nextContent),
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.error || 'Gagal reset halaman.');
      }

      setContent(nextContent);
      setStatus('Halaman direset');
      window.location.reload();
    } catch (resetError) {
      setError(resetError instanceof Error ? resetError.message : 'Gagal reset halaman.');
    }
  };

  const handleClose = () => {
    setIsAdminMode(false);
    setToken('');
    setUsername('');
    setPassword('');
    setShowLogin(false);
    setError('');
    setStatus('');
  };

  return (
    <div
      data-admin-editor
      className="fixed bottom-5 right-5 z-[9999] flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-2"
    >
      {!token && showLogin && (
        <form className="w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl" onSubmit={handleLogin}>
          <div className="mb-3 flex items-center gap-2 font-bold text-slate-900">
            <Lock size={18} />
            Login Admin
          </div>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            className="mb-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-romania-blue"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            className="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-romania-blue"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-bold text-white hover:bg-slate-800"
          >
            Masuk
          </button>
          {error && <p className="mt-2 text-sm font-semibold text-red-700">{error}</p>}
        </form>
      )}

      {token && isAdminMode && (
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xl">
          <div className="mb-3 max-w-xs text-sm text-slate-600">
            Klik teks di halaman untuk mengedit, lalu simpan ke server.
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={handleResetPage}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw size={16} />
              Reset Halaman
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-lg bg-romania-blue px-3 py-2 text-sm font-semibold text-white hover:bg-blue-900"
            >
              <Save size={16} />
              Simpan Perubahan
            </button>
          </div>
          {status && <p className="mt-2 text-right text-xs font-semibold text-green-700">{status}</p>}
          {error && <p className="mt-2 text-right text-xs font-semibold text-red-700">{error}</p>}
        </div>
      )}

      <button
        type="button"
        onClick={token ? handleClose : () => setShowLogin((current) => !current)}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold shadow-2xl transition ${
          token ? 'bg-red-700 text-white hover:bg-red-800' : 'bg-slate-900 text-white'
        }`}
      >
        {token ? <X size={18} /> : <Edit3 size={18} />}
        {token ? 'Keluar Admin' : showLogin ? 'Tutup Login' : 'Admin Edit'}
      </button>
    </div>
  );
};

const preventAdminNavigation = (event: Event) => {
  const target = event.currentTarget;
  if (target instanceof HTMLAnchorElement) {
    event.preventDefault();
  }
};

const markEditing = () => {
  adminEditingState.current = true;
};

const unmarkEditing = () => {
  adminEditingState.current = false;
};

const adminEditingState = {
  current: false,
};

export default AdminContentEditor;
