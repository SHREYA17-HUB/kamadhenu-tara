<?php
declare(strict_types=1);
require_once __DIR__ . '/functions.php';
require_once __DIR__ . '/data.php';

/** Per-page variables set before including this file. */
$PAGE          = $PAGE          ?? 'home';
$PAGE_TITLE    = $PAGE_TITLE    ?? SITE_NAME . ' — ' . SITE_TAGLINE;
$PAGE_DESC     = $PAGE_DESC     ?? 'Manufacturer and supplier of premium tarpaulins, pond liners, flooring, agriculture products, floor protection sheets, nets and ropes since 1985.';
$PAGE_CANON    = SITE_URL . ($_SERVER['REQUEST_URI'] ?? '/');
$HERO_LIGHT    = $HERO_LIGHT ?? false; // true when the navbar sits over a dark hero
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($PAGE_TITLE) ?></title>
<meta name="description" content="<?= e($PAGE_DESC) ?>">
<link rel="canonical" href="<?= e($PAGE_CANON) ?>">
<meta property="og:type" content="website">
<meta property="og:site_name" content="<?= e(SITE_NAME) ?>">
<meta property="og:title" content="<?= e($PAGE_TITLE) ?>">
<meta property="og:description" content="<?= e($PAGE_DESC) ?>">
<meta property="og:url" content="<?= e($PAGE_CANON) ?>">
<meta property="og:image" content="<?= e(SITE_URL . IMG . '/kamadhenu-logo.png') ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#FBFAF6">
<link rel="icon" href="<?= e(IMG) ?>/kamadhenu-logo.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600&display=swap">
<link rel="stylesheet" href="<?= e(BASE_URL) ?>/css/style.css?v=1">
<script type="application/ld+json">
<?= json_encode([
    '@context' => 'https://schema.org',
    '@type' => 'Organization',
    'name' => SITE_NAME,
    'url' => SITE_URL,
    'logo' => SITE_URL . IMG . '/kamadhenu-logo.png',
    'slogan' => SITE_TAGLINE,
    'foundingDate' => SITE_SINCE,
    'telephone' => PHONE_DISPLAY,
    'sameAs' => array_values($SOCIALS),
], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) ?>
</script>
</head>
<body class="page-<?= e($PAGE) ?><?= $HERO_LIGHT ? ' has-dark-hero' : '' ?>" data-wa="<?= e(WHATSAPP_NUMBER) ?>" data-base="<?= e(BASE_URL) ?>">
<div class="loader" id="loader">
  <div class="loader__inner">
    <img src="<?= e(IMG) ?>/kamadhenu-logo.png" alt="" width="110" height="110">
    <span class="loader__bar"><i></i></span>
    <span class="loader__text">Strength · Protection · Excellence</span>
  </div>
</div>
<a class="skip-link" href="#main">Skip to content</a>
<?php include __DIR__ . '/navbar.php'; ?>
<main id="main">
