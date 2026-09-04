<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

/** Escape for HTML output (XSS protection). */
function e(?string $v): string
{
    return htmlspecialchars((string) $v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/** Trim + strip control chars from raw input. */
function clean($v, int $max = 500): string
{
    $v = is_string($v) ? $v : '';
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '';
    return mb_substr(trim($v), 0, $max);
}

/** CSRF token for this session. */
function csrf_token(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}

function csrf_field(): string
{
    return '<input type="hidden" name="csrf" value="' . e(csrf_token()) . '">';
}

function csrf_valid(?string $token): bool
{
    return is_string($token) && !empty($_SESSION['csrf']) && hash_equals($_SESSION['csrf'], $token);
}

/** JSON response helper for AJAX endpoints. */
function json_out(bool $ok, string $message, array $extra = [], int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array_merge(['success' => $ok, 'message' => $message], $extra));
    exit;
}

/** PDO connection (prepared statements only). Returns null when DB is disabled. */
function db(): ?PDO
{
    static $pdo = null;
    if (!DB_ENABLED) {
        return null;
    }
    if ($pdo instanceof PDO) {
        return $pdo;
    }
    try {
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET,
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]
        );
    } catch (Throwable $ex) {
        error_log('DB connection failed: ' . $ex->getMessage());
        return null;
    }
    return $pdo;
}

/** Image URL for a product/gallery asset. */
function img(string $file): string
{
    return IMG . '/products/' . $file;
}

/** Pre-filled WhatsApp deep link. */
function whatsapp_link(string $product = ''): string
{
    $msg = $product !== ''
        ? 'Hello ' . SITE_NAME . ', I am interested in ' . $product . '. Please share more details and pricing.'
        : 'Hello ' . SITE_NAME . ', I would like to know more about your products.';
    return 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . rawurlencode($msg);
}

/** Simple mail send hook — wire SMTP/PHPMailer here. */
function send_notification(string $subject, string $body): bool
{
    if (!MAIL_ENABLED || MAIL_TO === '') {
        return false;
    }
    $headers = 'From: ' . (SMTP_FROM !== '' ? SMTP_FROM : MAIL_TO) . "\r\n"
        . "Content-Type: text/plain; charset=utf-8\r\n";
    return @mail(MAIL_TO, $subject, $body, $headers);
}

/** Basic per-session flood control for form posts. */
function rate_limited(string $key, int $seconds = 20): bool
{
    $now = time();
    $last = $_SESSION['rl_' . $key] ?? 0;
    if ($now - (int) $last < $seconds) {
        return true;
    }
    $_SESSION['rl_' . $key] = $now;
    return false;
}
