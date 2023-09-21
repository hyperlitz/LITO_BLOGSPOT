DROP DATABASE IF EXISTS lolito_db;
CREATE DATABASE lolito_db;


USE lolito_db;
-- Create User Table
CREATE TABLE IF NOT EXISTS `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Create Blog Table
CREATE TABLE IF NOT EXISTS `blog` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255),
  `date_created` DATETIME NOT NULL,
  `user_id` INTEGER,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Create Comment Table
CREATE TABLE IF NOT EXISTS `comment` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `comment_description` VARCHAR(255),
  `date_created` DATETIME NOT NULL,
  `blog_id` INTEGER,
  `user_id` INTEGER,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`blog_id`) REFERENCES `blog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB;
