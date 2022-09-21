-- -----------------------------------------------------
-- Schema ecommerce_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce_db` DEFAULT CHARACTER SET utf8 ;
USE `ecommerce_db` ;

-- -----------------------------------------------------
-- Table `ecommerce_db`.`user_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`user_types` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type_id` INT NOT NULL,
  `username` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `name` VARCHAR(60) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_user_types1_idx` (`type_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_user_types1`
    FOREIGN KEY (`type_id`)
    REFERENCES `ecommerce_db`.`user_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`seller`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`seller` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `profile_picture` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_seller_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_seller_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommerce_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(50) NOT NULL,
  `seller_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_categories_seller1_idx` (`seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_categories_seller1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommerce_db`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`products` (
  `id` INT NOT NULL,
  `categorie_id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `price` FLOAT NOT NULL,
  `quantity` FLOAT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `views` BIGINT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`, `categorie_id`),
  INDEX `fk_products_categories1_idx` (`categorie_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categorie_id`)
    REFERENCES `ecommerce_db`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`discounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`discounts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller_id` INT NOT NULL,
  `code` VARCHAR(20) NOT NULL,
  `percentage` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_discounts_seller1_idx` (`seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_discounts_seller1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommerce_db`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_admin_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_admin_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommerce_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `is_banned` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_client_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `ecommerce_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce_db`.`ads`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce_db`.`ads` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller_id` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `cost` FLOAT NOT NULL,
  `end_date` DATETIME NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ads_seller1_idx` (`seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_ads_seller1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommerce_db`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

