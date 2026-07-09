<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    send_json(200, (object)read_json_file(CONTENT_FILE));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_json(405, ['error' => 'Method tidak diizinkan.']);
}

if (!is_authorized()) {
    send_json(401, ['error' => 'Login admin diperlukan.']);
}

$input = json_decode(file_get_contents('php://input') ?: '{}', true);
if (!is_array($input)) {
    send_json(400, ['error' => 'Format konten tidak valid.']);
}

write_json_file(CONTENT_FILE, $input);
send_json(200, ['ok' => true]);
