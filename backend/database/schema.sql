-- -----------------------------------------------------
-- Schema omnia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `omnia` DEFAULT CHARACTER SET utf8 ;
USE `omnia` ;

-- -----------------------------------------------------
-- Table `omnia`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `hashed_password` VARCHAR(255) NOT NULL,
  `is_admin` TINYINT(1) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `omnia`.`archetype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`archetype` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `image` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `omnia`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `image` LONGTEXT NOT NULL,
  `archetype_id` INT NOT NULL,
  PRIMARY KEY (`id`, `archetype_id`),
  INDEX `fk_class_archetype1_idx` (`archetype_id` ASC) VISIBLE,
  CONSTRAINT `fk_class_archetype1`
    FOREIGN KEY (`archetype_id`)
    REFERENCES `omnia`.`archetype` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `omnia`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`skill` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `cost` VARCHAR(45) NOT NULL,
  `test` VARCHAR(45) NOT NULL,
  `action` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `role_id`),
  INDEX `fk_skill_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `omnia`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `omnia`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NULL,
  `level` INT NOT NULL,
  `power` INT NOT NULL,
  `strength` INT NOT NULL,
  `resistance` INT NOT NULL,
  `dexterity` INT NOT NULL,
  `agility` INT NOT NULL,
  `discretion` INT NOT NULL,
  `spirit` INT NOT NULL,
  `mental` INT NOT NULL,
  `sense` INT NOT NULL,
  `social` INT NOT NULL,
  `aura` INT NOT NULL,
  `relationship` INT NOT NULL,
  `combat` INT NOT NULL,
  `attack` INT NOT NULL,
  `defense` INT NOT NULL,
  `archetype_level` INT NOT NULL,
  `role1_level` INT NOT NULL,
  `role2_level` INT NULL,
  `background` LONGTEXT NULL,
  `user_id` INT NOT NULL,
  `archetype_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `archetype_id`),
  INDEX `fk_character_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_character_archetype1_idx` (`archetype_id` ASC) VISIBLE,
  CONSTRAINT `fk_character_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `omnia`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_character_archetype1`
    FOREIGN KEY (`archetype_id`)
    REFERENCES `omnia`.`archetype` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `omnia`.`persona_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`persona_role` (
  `persona_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`persona_id`, `role_id`),
  INDEX `fk_persona_has_class_persona1_idx` (`persona_id` ASC) VISIBLE,
  INDEX `fk_persona_class_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_persona_has_class_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `omnia`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_persona_class_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `omnia`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `omnia`.`persona_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `omnia`.`persona_skill` (
  `persona_id` INT NOT NULL,
  `skill_id` INT NOT NULL,
  PRIMARY KEY (`persona_id`, `skill_id`),
  INDEX `fk_persona_has_skill_skill1_idx` (`skill_id` ASC) VISIBLE,
  INDEX `fk_persona_has_skill_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_persona_has_skill_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `omnia`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_persona_has_skill_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `omnia`.`skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);