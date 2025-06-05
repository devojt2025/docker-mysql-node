-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema grab
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `grab` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

USE `grab` ;

-- -----------------------------------------------------
-- Table `grab`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grab`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` TEXT NULL,
  `short_order_number` TEXT NULL,
  `merchant_id` TEXT NULL,
  `partner_merchant_id` TEXT NULL,
  `payment_type` TEXT NULL,
  `cutlery` TINYINT NULL,
  `order_time` DATETIME NULL,
  `schedule_time` DATETIME NULL,
  `currency_code` TEXT NULL,
  `currency_symbol` TEXT NULL,
  `currency_exponent` TEXT NULL,
  `order_accepted_type` TEXT NULL,
  `order_type` TEXT NULL,
  `is_mex_edit_order` TINYINT NULL,
  `subtotal` INT NULL,
  `tax` INT NULL,
  `merchant_charge_fee` INT NULL,
  `grab_fund_promo` INT NULL,
  `merchant_fund_promo` INT NULL,
  `basket_promo` INT NULL,
  `delivery_fee` INT NULL,
  `small_order_fee` INT NULL,
  `eater_payment` INT NULL,
  `total` INT NULL,
  `table_id` TEXT NULL,
  `eater_count` INT NULL,
  `receiver` JSON NULL,
  `allow_change` TINYINT NULL,
  `estimate_order_ready_time` DATETIME NULL,
  `max_order_ready_time` DATETIME NULL,
  `new_order_ready_time` DATETIME NULL,
  `membership_id` TEXT NULL,
  `raw_payload` JSON NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grab`.`campaigns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grab`.`campaigns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orders_id` INT NOT NULL,
  `campaign_id` TEXT NULL DEFAULT NULL,
  `name` TEXT NULL DEFAULT NULL,
  `campaign_name_for_mex` TEXT NULL DEFAULT NULL,
  `level` TEXT NULL DEFAULT NULL,
  `type` TEXT NULL DEFAULT NULL,
  `usage_count` TEXT NULL DEFAULT NULL,
  `mex_funded_ratio` TEXT NULL DEFAULT NULL,
  `deducted_amount` TEXT NULL DEFAULT NULL,
  `deducted_part` TEXT NULL DEFAULT NULL,
  `applied_item_ids` JSON NULL DEFAULT NULL,
  `free_item_id` TEXT NULL DEFAULT NULL,
  `free_item_name` TEXT NULL DEFAULT NULL,
  `free_item_quantity` TEXT NULL DEFAULT NULL,
  `free_item_price` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_campaigns_orders1_idx` (`orders_id` ASC) VISIBLE,
  CONSTRAINT `fk_campaigns_orders1`
    FOREIGN KEY (`orders_id`)
    REFERENCES `grab`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grab`.`orderline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grab`.`orderline` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `item_id` TEXT NULL DEFAULT NULL,
  `grab_item_id` TEXT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `tax` INT NULL DEFAULT NULL,
  `specifications` TEXT NULL DEFAULT NULL,
  `out_of_stock_instruction` JSON NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_items_orders_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_items_orders`
    FOREIGN KEY (`order_id`)
    REFERENCES `grab`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grab`.`modifiers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grab`.`modifiers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orderline_id` INT NOT NULL,
  `mod_id` TEXT NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `tax` INT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  INDEX `fk_modifiers_orderline1_idx` (`orderline_id` ASC) VISIBLE,
  CONSTRAINT `fk_modifiers_orderline1`
    FOREIGN KEY (`orderline_id`)
    REFERENCES `grab`.`orderline` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grab`.`promos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grab`.`promos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orders_id` INT NOT NULL,
  `code` TEXT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `name` TEXT NULL DEFAULT NULL,
  `promo_amount` INT NULL DEFAULT NULL,
  `mex_funded_ratio` INT NULL DEFAULT NULL,
  `mex_funded_amount` INT NULL DEFAULT NULL,
  `targeted_price` INT NULL DEFAULT NULL,
  `promo_amount_in_min` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_promos_orders1_idx` (`orders_id` ASC) VISIBLE,
  CONSTRAINT `fk_promos_orders1`
    FOREIGN KEY (`orders_id`)
    REFERENCES `grab`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
