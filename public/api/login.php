<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_json(405, ['error' => 'Method tidak diizinkan.']);
}

$input = json_decode(file_get_contents('php://input') ?: '{}', true);
if (!is_array($input)) {
    send_json(400, ['error' => 'Format request tidak valid.']);
}

$username = (string)($input['username'] ?? '');
$password = (string)($input['password'] ?? '');

if (!hash_equals(ADMIN_USERNAME, $username) || !hash_equals(ADMIN_PASSWORD, $password)) {
    send_json(401, ['error' => 'Username atau password salah.']);
}

$token = bin2hex(random_bytes(32));
$sessions = cleanup_sessions(read_json_file(SESSION_FILE));
$sessions[$token] = time() + 60 * 60 * 8;
write_json_file(SESSION_FILE, $sessions);

send_json(200, ['token' => $token]);
