-- Kamadhenu Tarpaulin Industry — database schema (MySQL 5.7+ / MariaDB 10.3+)

CREATE TABLE IF NOT EXISTS `enquiries` (
  `id`           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`         VARCHAR(120)  NOT NULL,
  `company_name` VARCHAR(160)  DEFAULT NULL,
  `phone`        VARCHAR(30)   NOT NULL,
  `email`        VARCHAR(190)  DEFAULT NULL,
  `product`      VARCHAR(160)  DEFAULT NULL,
  `quantity`     VARCHAR(120)  DEFAULT NULL,
  `message`      TEXT          DEFAULT NULL,
  `source`       VARCHAR(40)   NOT NULL DEFAULT 'enquiry',
  `ip`           VARCHAR(45)   DEFAULT NULL,
  `created_at`   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status`       ENUM('new','contacted','quoted','closed') NOT NULL DEFAULT 'new',
  PRIMARY KEY (`id`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
