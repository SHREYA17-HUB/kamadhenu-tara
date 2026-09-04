<?php
/**
 * KAMADHENU TARPAULIN INDUSTRY
 * Central configuration — edit ONLY this file for business details.
 */

declare(strict_types=1);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/* ---------------------------------------------------------------
 | SITE
 --------------------------------------------------------------- */
define('SITE_NAME', 'Kamadhenu Tarpaulin Industry');
define('SITE_TAGLINE', 'Strength. Protection. Excellence.');
define('SITE_URL', 'https://kamadhenu-tarpaulin.com');   // TODO: real domain
define('SITE_SINCE', '1985');

/* ---------------------------------------------------------------
 | CONTACT  (TODO: replace placeholders with real details)
 --------------------------------------------------------------- */
define('WHATSAPP_NUMBER', '919019379292');        // digits only, with country code
define('PHONE_DISPLAY', '+91 90193 79292');
define('PHONE_DIAL', '+919019379292');
define('CONTACT_EMAIL', '');                      // TODO: real email address
define('ADDRESS_LINE_1', '');                     // TODO: street address
define('ADDRESS_CITY', 'Bengaluru');
define('ADDRESS_STATE', 'Karnataka');
define('ADDRESS_POSTAL', '');                     // TODO: PIN code
define('ADDRESS_COUNTRY', 'India');
define('BUSINESS_HOURS', '');                     // TODO: e.g. Mon-Sat 09:00-19:00

/* ---------------------------------------------------------------
 | SOCIAL
 --------------------------------------------------------------- */
$SOCIALS = [
    'instagram' => 'https://www.instagram.com/kamadhenutarpaulinindustry/',
    'facebook'  => 'https://www.facebook.com/profile.php?id=61593326256219',
    'youtube'   => 'https://www.youtube.com/@Kamadhenu-z26',
];

/* ---------------------------------------------------------------
 | DATABASE (TODO: real credentials on the server; keep out of git)
 --------------------------------------------------------------- */
define('DB_HOST', 'localhost');
define('DB_NAME', 'kamadhenu');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');
define('DB_ENABLED', false); // set true once the database above exists

/* ---------------------------------------------------------------
 | MAIL / SMTP (TODO: real credentials — used by ajax handlers)
 --------------------------------------------------------------- */
define('MAIL_ENABLED', false);
define('MAIL_TO', CONTACT_EMAIL);
define('SMTP_HOST', '');
define('SMTP_PORT', 587);
define('SMTP_USER', '');
define('SMTP_PASS', '');
define('SMTP_FROM', '');

/* ---------------------------------------------------------------
 | PATHS
 --------------------------------------------------------------- */
define('BASE_URL', rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/'));
define('IMG', BASE_URL . '/images');
define('ENQUIRY_LOG', __DIR__ . '/../uploads/enquiries.log');
