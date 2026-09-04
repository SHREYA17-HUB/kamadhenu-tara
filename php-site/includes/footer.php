</main>

<footer class="footer">
  <div class="wrap footer__grid">
    <div class="footer__brand">
      <img src="<?= e(IMG) ?>/kamadhenu-logo.png" alt="<?= e(SITE_NAME) ?> logo" width="84" height="84" loading="lazy">
      <p class="footer__desc">
        Manufacturing premium tarpaulins, flooring, agriculture products, floor protection,
        nets and ropes since <?= e(SITE_SINCE) ?>. <em><?= e(SITE_TAGLINE) ?></em>
      </p>
      <div class="footer__socials">
        <?php foreach ($SOCIALS as $name => $url): ?>
          <a href="<?= e($url) ?>" target="_blank" rel="noopener" aria-label="<?= e(ucfirst($name)) ?>"><?= e(ucfirst($name)) ?></a>
        <?php endforeach; ?>
      </div>
    </div>

    <div class="footer__col">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="<?= e(BASE_URL) ?>/index.php">Home</a></li>
        <li><a href="<?= e(BASE_URL) ?>/about.php">About Us</a></li>
        <li><a href="<?= e(BASE_URL) ?>/products.php">Products</a></li>
        <li><a href="<?= e(BASE_URL) ?>/applications.php">Applications</a></li>
        <li><a href="<?= e(BASE_URL) ?>/gallery.php">Gallery</a></li>
        <li><a href="<?= e(BASE_URL) ?>/contact.php">Contact</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h3>Products</h3>
      <ul>
        <?php foreach ($PRODUCT_GROUPS as $key => $g): ?>
          <li><a href="<?= e(BASE_URL) ?>/products.php?cat=<?= e($key) ?>"><?= e($g['label']) ?></a></li>
        <?php endforeach; ?>
      </ul>
    </div>

    <div class="footer__col">
      <h3>Contact</h3>
      <ul class="footer__contact">
        <li><a href="tel:<?= e(PHONE_DIAL) ?>"><?= e(PHONE_DISPLAY) ?></a></li>
        <?php if (CONTACT_EMAIL !== ''): ?>
          <li><a href="mailto:<?= e(CONTACT_EMAIL) ?>"><?= e(CONTACT_EMAIL) ?></a></li>
        <?php endif; ?>
        <?php if (ADDRESS_LINE_1 !== ''): ?>
          <li><?= e(ADDRESS_LINE_1) ?><br><?= e(ADDRESS_CITY) ?>, <?= e(ADDRESS_STATE) ?> <?= e(ADDRESS_POSTAL) ?></li>
        <?php else: ?>
          <li><?= e(ADDRESS_CITY) ?>, <?= e(ADDRESS_STATE) ?>, <?= e(ADDRESS_COUNTRY) ?></li>
        <?php endif; ?>
        <?php if (BUSINESS_HOURS !== ''): ?><li><?= e(BUSINESS_HOURS) ?></li><?php endif; ?>
        <li><a href="<?= e(whatsapp_link()) ?>" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
      </ul>
    </div>
  </div>

  <div class="footer__bar">
    <div class="wrap footer__barin">
      <span>&copy; <?= date('Y') ?> <?= e(SITE_NAME) ?>. All rights reserved.</span>
      <span><?= e(SITE_TAGLINE) ?></span>
    </div>
  </div>
</footer>

<a class="wa-float" href="<?= e(whatsapp_link()) ?>" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.95L2 22l5.23-1.37a9.9 9.9 0 0 0 4.81 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.94 1.35-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34h.53c.17 0 .4-.06.62.48.24.57.8 1.98.87 2.12.07.14.12.3.02.49-.1.19-.15.3-.29.47-.14.16-.3.36-.43.49-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2 1.28 2.29 1.42.28.14.45.12.62-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.25.09 1.66.78 1.94.92.28.14.47.21.54.33.07.11.07.66-.17 1.34z"/></svg>
</a>

<!-- Quote / Enquiry modal -->
<div class="modal" id="quoteModal" role="dialog" aria-modal="true" aria-labelledby="quoteTitle" hidden>
  <div class="modal__backdrop" data-close></div>
  <div class="modal__panel">
    <button type="button" class="modal__close" data-close aria-label="Close">&times;</button>
    <p class="eyebrow">Request a Quote</p>
    <h2 class="modal__title" id="quoteTitle">Tell us what you need</h2>
    <div class="gold-rule"></div>
    <form id="quoteForm" class="form" novalidate>
      <?= csrf_field() ?>
      <div class="form__row">
        <input type="text" name="name" placeholder="Your name *" required maxlength="120">
        <input type="text" name="company_name" placeholder="Company name" maxlength="160">
      </div>
      <div class="form__row">
        <input type="tel" name="phone" placeholder="Phone number *" required maxlength="20">
        <input type="email" name="email" placeholder="Email address" maxlength="190">
      </div>
      <div class="form__row">
        <select name="product" id="quoteProduct">
          <option value="">Select a product</option>
          <?php foreach ($ALL_PRODUCTS as $p): ?>
            <option value="<?= e($p['name']) ?>"><?= e($p['name']) ?></option>
          <?php endforeach; ?>
        </select>
        <input type="text" name="quantity" placeholder="Quantity / size required" maxlength="120">
      </div>
      <textarea name="message" rows="3" placeholder="Additional details" maxlength="1500"></textarea>
      <div class="form__msg" id="quoteMsg" role="status"></div>
      <div class="form__actions">
        <button type="submit" class="btn btn--gold btn--block">Send Enquiry</button>
        <button type="button" class="btn btn--ghost btn--block" id="quoteWhatsapp">Send via WhatsApp</button>
      </div>
      <p class="form__note">We usually respond within a few hours.</p>
    </form>
  </div>
</div>

<!-- Lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
  <button type="button" class="lightbox__close" data-lb-close aria-label="Close">&times;</button>
  <button type="button" class="lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="Previous">&#8249;</button>
  <img src="" alt="" id="lightboxImg">
  <button type="button" class="lightbox__nav lightbox__nav--next" data-lb-next aria-label="Next">&#8250;</button>
  <p class="lightbox__caption" id="lightboxCap"></p>
</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="<?= e(BASE_URL) ?>/js/main.js?v=1" defer></script>
<script src="<?= e(BASE_URL) ?>/js/script.js?v=1" defer></script>
</body>
</html>
