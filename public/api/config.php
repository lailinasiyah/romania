<?php
declare(strict_types=1);

const ADMIN_USERNAME = 'mitragroup';
const ADMIN_PASSWORD = 'Mit@sinergi2025';
const CONTENT_FILE = __DIR__ . '/content.json';
const SESSION_FILE = __DIR__ . '/sessions.json';

function send_json(int $status, $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function read_json_file(string $file): array
{
    if (!is_file($file)) {
        return [];
    }

    $raw = file_get_contents($file);
    if ($raw === false || trim($raw) === '') {
        return [];
    }

    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function write_json_file(string $file, array $payload): void
{
    $result = file_put_contents(
        $file,
        json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . PHP_EOL,
        LOCK_EX
    );

    if ($result === false) {
        send_json(500, ['error' => 'Gagal menulis file data. Periksa permission hosting.']);
    }
}

function get_bearer_token(): string
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    if (substr($header, 0, 7) !== 'Bearer ') {
        return '';
    }

    return substr($header, 7);
}

function cleanup_sessions(array $sessions): array
{
    $now = time();
    return array_filter($sessions, static function ($expiresAt) use ($now) {
        return is_int($expiresAt) && $expiresAt > $now;
    });
}

function is_authorized(): bool
{
    $token = get_bearer_token();
    if ($token === '') {
        return false;
    }

    $sessions = cleanup_sessions(read_json_file(SESSION_FILE));
    write_json_file(SESSION_FILE, $sessions);

    return isset($sessions[$token]);
}
