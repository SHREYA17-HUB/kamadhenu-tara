<?php
declare(strict_types=1);
$NAV = [
    'home'         => ['label' => 'Home', 'href' => 'index.php'],
    'about'        => ['label' => 'About', 'href' => 'about.php'],
    'products'     => ['label' => 'Products', 'href' => 'products.php'],
    'applications' => ['label' => 'Applications', 'href' => 'applications.php'],
    'gallery'      => ['label' => 'Gallery', 'href' => 'gallery.php'],
    'contact'      => ['label' => 'Contact', 'href' => 'contact.php'],
];
?>
<header class="nav<?= $HERO_LIGHT ? ' nav--over-hero' : '' ?>" id="siteNav">
  <div class="nav__inner">
    <a class="nav__brand" href="<?= e(BASE_URL) ?>/index.php" aria-label="<?= e(SITE_NAME) ?> — home">
      <img src="<?= e(IMG) ?>/kamadhenu-logo.png" alt="<?= e(SITE_NAME) ?> logo" width="56" height="56" class="nav__logo">
      <span class="nav__word">
        <span class="nav__name">KAMADHENU</span>
        <span class="nav__sub">TARPAULIN INDUSTRY · SINCE <?= e(SITE_SINCE) ?></span>
      </span>
    </a>

    <nav class="nav__links" aria-label="Primary">
      <?php foreach ($NAV as $key => $it): ?>
        <a href="<?= e(BASE_URL . '/' . $it['href']) ?>" class="nav__link<?= $PAGE === $key ? ' is-active' : '' ?>"><?= e($it['label']) ?></a>
      <?php endforeach; ?>
      <button type="button" class="btn btn--gold btn--sm js-quote" data-product="">Get a Quote</button>
    </nav>

    <button type="button" class="nav__burger" id="navBurger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<div class="mobilenav" id="mobileNav" aria-hidden="true">
  <div class="mobilenav__top">
    <span class="nav__name">KAMADHENU</span>
    <button type="button" class="mobilenav__close" id="navClose" aria-label="Close menu">&times;</button>
  </div>
  <div class="gold-rule"></div>
  <nav class="mobilenav__links" aria-label="Mobile">
    <?php foreach ($NAV as $key => $it): ?>
      <a href="<?= e(BASE_URL . '/' . $it['href']) ?>" class="<?= $PAGE === $key ? 'is-active' : '' ?>"><?= e($it['label']) ?></a>
    <?php endforeach; ?>
    <button type="button" class="btn btn--gold js-quote" data-product="">Get a Quote</button>
  </nav>
</div>
