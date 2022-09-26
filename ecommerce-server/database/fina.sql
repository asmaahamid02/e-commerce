CREATE DATABASE  IF NOT EXISTS `ecommerce_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce_db
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ads`
--

DROP TABLE IF EXISTS `ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seller_id` int NOT NULL,
  `image` varchar(255) NOT NULL,
  `cost` float NOT NULL,
  `end_date` datetime NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ads_users1_idx` (`seller_id`),
  CONSTRAINT `fk_ads_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads`
--

LOCK TABLES `ads` WRITE;
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` float NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_items_carts1_idx` (`cart_id`),
  KEY `fk_cart_items_products1_idx` (`product_id`),
  CONSTRAINT `fk_cart_items_carts1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_cart_items_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (1,19,10,1,'2022-09-18 21:00:00'),(2,19,11,1,'2022-09-18 21:00:00'),(3,19,12,1,'2022-09-18 21:00:00'),(4,19,13,1,'2022-09-18 21:00:00'),(5,19,14,1,'2022-09-18 21:00:00'),(6,19,15,1,'2022-09-18 21:00:00'),(7,19,16,1,'2022-09-18 21:00:00'),(8,19,17,1,'2022-09-18 21:00:00'),(9,20,18,1,'2022-09-18 21:00:00'),(10,20,19,1,'2022-09-18 21:00:00'),(11,20,20,1,'2022-09-18 21:00:00'),(12,20,21,1,'2022-09-18 21:00:00'),(13,20,22,1,'2022-09-18 21:00:00'),(14,20,23,1,'2022-09-18 21:00:00'),(15,20,24,1,'2022-09-18 21:00:00'),(16,24,25,1,'2022-09-18 21:00:00'),(17,24,26,1,'2022-09-18 21:00:00'),(18,24,27,1,'2022-09-18 21:00:00'),(19,24,28,1,'2022-09-18 21:00:00'),(20,24,11,1,'2022-09-18 21:00:00'),(21,24,12,1,'2022-09-18 21:00:00'),(22,23,13,1,'2022-09-18 21:00:00'),(23,23,18,1,'2022-09-18 21:00:00'),(24,23,16,1,'2022-09-18 21:00:00'),(25,23,17,1,'2022-09-18 21:00:00'),(26,28,3,2,'2022-09-25 15:40:52'),(27,28,4,3,'2022-09-25 16:09:34'),(28,29,5,1,'2022-09-25 16:55:16'),(29,29,4,14,'2022-09-25 17:06:07'),(30,29,3,1,'2022-09-25 19:22:58');
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `discount_id` int DEFAULT NULL,
  `total` float NOT NULL DEFAULT '0',
  `is_deleted` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL,
  `purchased_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carts_discounts1_idx` (`discount_id`),
  KEY `fk_carts_users1_idx` (`client_id`),
  CONSTRAINT `fk_carts_discounts1` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_carts_users1` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,3,1,250,1,'2022-09-02 21:00:00','2022-09-03 00:00:00'),(14,3,1,250,1,'2022-09-02 21:00:00','2022-09-03 00:00:00'),(15,3,NULL,300,1,'2022-09-05 21:00:00','2022-09-03 00:00:00'),(16,3,NULL,20,1,'2022-09-02 21:00:00','2022-09-03 00:00:00'),(17,3,NULL,90,1,'2022-09-02 21:00:00','2022-09-03 00:00:00'),(18,3,NULL,150,1,'2022-09-02 21:00:00','2022-09-19 00:00:00'),(19,3,2,60,1,'2022-09-02 21:00:00','2022-09-20 00:00:00'),(20,3,2,50,1,'2022-09-02 21:00:00','2022-09-22 00:00:00'),(21,4,NULL,100,1,'2022-09-02 21:00:00','2022-09-23 00:00:00'),(22,4,1,60,1,'2022-09-02 21:00:00','2022-09-22 00:00:00'),(23,4,2,70,1,'2022-09-02 21:00:00','2022-09-17 00:00:00'),(24,5,NULL,85,1,'2022-09-02 21:00:00','2022-09-18 00:00:00'),(25,5,1,93,1,'2022-09-02 21:00:00','2022-09-11 00:00:00'),(26,6,NULL,100,0,'2022-09-21 21:00:00',NULL),(27,3,1,93,1,'2022-09-02 21:00:00','2022-08-11 00:00:00'),(28,3,NULL,0,0,'2022-09-25 15:19:20','2022-08-11 00:00:00'),(29,27,NULL,0,0,'2022-09-25 16:54:04',NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seller_id` int NOT NULL,
  `category` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categories_users1_idx` (`seller_id`),
  CONSTRAINT `fk_categories_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (2,2,'fdgdfg','2022-09-18 21:00:00'),(3,2,'fdgfgfdfg','2022-09-18 21:00:00'),(4,2,'sdds','2022-09-18 21:00:00'),(5,2,'hkgk','2022-09-18 21:00:00'),(6,11,'wew','2022-09-18 21:00:00'),(7,11,'uo','2022-09-18 21:00:00'),(8,11,'qwe','2022-09-18 21:00:00'),(9,11,'po','2022-09-18 21:00:00'),(10,11,'sfd','2022-09-18 21:00:00'),(11,11,'sfe','2022-09-18 21:00:00'),(12,2,'sdgsdg','2022-09-24 19:14:49'),(13,25,'SDsfsf','2022-09-24 19:23:36'),(14,25,'sfzsffd','2022-09-24 19:24:03'),(15,25,'zfdfdf','2022-09-24 19:24:41'),(16,25,'dsfsdgdfsg','2022-09-24 19:33:41'),(17,25,'dsfsdgdfsg','2022-09-24 19:33:42'),(18,25,'SFSFD','2022-09-24 19:33:48'),(19,25,'SDsfsf','2022-09-24 19:41:47'),(20,25,'SDsfsf','2022-09-24 19:41:54'),(21,25,'gjghjhj','2022-09-24 19:52:21');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seller_id` int NOT NULL,
  `code` varchar(20) NOT NULL,
  `percentage` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `expired_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_discounts_users1_idx` (`seller_id`),
  CONSTRAINT `fk_discounts_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,2,'hml',10,'2022-09-18 21:00:00','0000-00-00 00:00:00'),(2,2,'ssa',20,'2022-09-18 21:00:00','0000-00-00 00:00:00'),(5,25,'sd',10,'2022-09-18 21:00:00','2022-09-15 00:00:00'),(6,25,'fgg',11,'2022-09-24 21:00:00','2022-09-26 00:00:00'),(7,25,'4545',10,'2022-09-25 08:53:12','2022-09-18 00:00:00'),(8,25,'gdfg',10,'2022-09-25 08:54:10','2022-08-31 00:00:00'),(9,25,'sdsa',23,'2022-09-25 08:56:04','2022-08-31 00:00:00');
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_products`
--

DROP TABLE IF EXISTS `favorite_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `product_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_favorite_products_products1_idx` (`product_id`),
  KEY `fk_favorite_products_users1_idx` (`client_id`),
  CONSTRAINT `fk_favorite_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_favorite_products_users1` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_products`
--

LOCK TABLES `favorite_products` WRITE;
/*!40000 ALTER TABLE `favorite_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int NOT NULL,
  `receiver_id` int NOT NULL,
  `message` longtext NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_messages_users1_idx` (`sender_id`),
  KEY `fk_messages_users2_idx` (`receiver_id`),
  CONSTRAINT `fk_messages_users1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_messages_users2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categorie_id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `quantity` float NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `views` bigint DEFAULT '0',
  `is_deleted` tinyint DEFAULT '0',
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`,`categorie_id`),
  KEY `fk_products_categories1_idx` (`categorie_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,2,'dddd',30,400,'babyO1.jpeg','asdgsdgdg',1,1,'2022-09-18 21:00:00'),(3,2,'qw',10,50,'babyO1.jpeg','sdfsd',1,0,'2022-09-18 21:00:00'),(4,2,'qwe',10,50,'babyO1.jpeg','sdfsd',2,0,'2022-09-18 21:00:00'),(5,2,'rg',10,50,'babyO1.jpeg','sdfsd',1,0,'2022-09-18 21:00:00'),(6,2,'qwe',10,50,'babyO1.jpeg','sdfsd',2,0,'2022-09-18 21:00:00'),(7,2,'ret',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(8,3,'qwe',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(9,3,'qw',10,50,'babyO1.jpeg','sdfsd',2,0,'2022-09-18 21:00:00'),(10,3,'awd',10,50,'babyO1.jpeg','sdfsd',2,0,'2022-09-18 21:00:00'),(11,3,'fdg',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(12,4,'t',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(13,4,'er5',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(14,4,'er',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(15,4,'qw',10,50,'babyO1.jpeg','sdfsd',1,0,'2022-09-18 21:00:00'),(16,4,'qew',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(17,6,'wer',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(18,7,'we',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(19,8,'qw',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(20,9,'qw',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(21,10,'rgqw',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(22,11,'rg',10,50,'babyO1.jpeg','sdfsd',1,0,'2022-09-18 21:00:00'),(23,6,'we',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(24,7,'we',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(25,8,'we',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(26,9,'wew',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(27,10,'wae',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(28,11,'we',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(29,21,'fwse',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(30,21,'fdgdf',10,50,'babyO1.jpeg','sdfsd',0,0,'2022-09-18 21:00:00'),(31,21,'fgh',10,50,'babyO1.jpeg','sdfsd',50,0,'2022-09-18 21:00:00'),(32,21,'jhdj',25,2.52,'babyO1.jpeg','kdjfldjfldkmf',40,0,'2022-09-24 21:15:19'),(33,21,'jhdj',25,2.52,'babyO1.jpeg','kdjfldjfldkmf',30,0,'2022-09-24 21:17:33'),(34,21,'dfdf',4,34,'babyO1.jpeg','xdgxgffdsf',21,0,'2022-09-24 22:35:06'),(35,16,'dsfdsf',344,546,'babyO1.jpeg','fghfghdfdf',10,0,'2022-09-25 04:32:28');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_types`
--

DROP TABLE IF EXISTS `user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_types`
--

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
INSERT INTO `user_types` VALUES (1,'admin'),(2,'client'),(3,'seller');
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `is_banned` tinyint DEFAULT '0',
  `is_deleted` tinyint DEFAULT '0',
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_user_types1_idx` (`type_id`),
  CONSTRAINT `fk_users_user_types1` FOREIGN KEY (`type_id`) REFERENCES `user_types` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,3,'seller','123','seller','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(3,2,'user1','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(4,2,'user2','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(5,2,'user3','123','user1','dfsdfd','sdfsd',1,0,'2022-09-13 21:00:00'),(6,2,'user4','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(7,2,'user5','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(8,2,'user6','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(9,2,'user7','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(10,2,'user8','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(11,3,'seller','123','user1','dfsdfd','sdfsd',0,0,'2022-09-13 21:00:00'),(12,3,'asmaa99','ddd','asmaa','dd','',0,0,'2022-09-18 21:00:00'),(13,3,'asmaah99','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3team1','asmaa','as@gmail.com','',0,0,'2022-09-22 16:30:15'),(14,3,'asaah99','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3team1','asmaa','asdd@gmail.com','te1am632c9c11c167d1.959569002022-09-22.jpeg',0,0,'2022-09-22 16:32:01'),(15,3,'asaah99ss','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3team1','asmaa','asdd@gmail.coms','te1am632c9c461d92a6.985891442022-09-22.jpeg',0,1,'2022-09-22 16:32:54'),(16,3,'asaah99ssy','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3team1','asmaa','asdd@gmail.comsyy','te1am632f11dda5d4e2.716741042022-09-24.jpeg',0,1,'2022-09-22 16:33:33'),(17,3,'dsfdsf','72a374820a6abcb4c1e07f0aab274bb7ccd33d6c64fc70f1ee7ff4994f58532bteam1','Asmaa Walid Hamid','asmaa@gmail.com','',0,0,'2022-09-24 10:02:10'),(18,3,'dsfdsfddd','72a374820a6abcb4c1e07f0aab274bb7ccd33d6c64fc70f1ee7ff4994f58532bteam1','Asmaa Walid Hamid','asmaasss@gmail.com','',0,0,'2022-09-24 10:02:24'),(19,3,'fyuyuyu','8ef346f906860278899f66566c05b84e64cf81c671b01457c689ec2c41eb3a9eteam1','Asmaa Walid Hamid','asmaafasdfa@gmail.com','',0,0,'2022-09-24 10:05:19'),(20,3,'sdfsdfgghdfh','f0c372e7132439fec55816861c5ac05ca60853b58d07e57b112bf82143f718d1team1','Asmaa Walid Hamid','asmfsdfsdfaa@gmail.com','te1am632ee540563495.624810762022-09-24.png',0,0,'2022-09-24 10:08:48'),(21,3,'ayahamid99','91dc35bb63652dc20b974033077483846031faed2aa6ab11792f2749785aa6e4team1','Aya Hamid','asmasdsda@gmail.com','',0,0,'2022-09-24 10:19:12'),(22,3,'asmaaOOPPjhjh','c64eb452781bb796ceed2da4d82c3adeac31c61f91bcaf373c54e2ac05c36a8cteam1','Asmaa Walid Hamid','asmaygyga@gmail.com','',0,0,'2022-09-24 10:23:00'),(23,3,'dsfdsferewtewt21','3603484cf6d8f4fbef3df4a85a85fb1324bd9282bc00e5153c87c79e4b473c98team1','Asmaa Walid ','asmasdsadasa@gmail.com','te1am632f11f15eba49.666191492022-09-24.png',0,0,'2022-09-24 11:34:48'),(24,3,'sdasdwasd','70df65087b4898e6cf65eafdd81bb61ec22349383a792841eb3b41561e276cf5team1','Asmaa Walid Hamid','asmasdsadaa@gmail.com','te1am632f1533e00bb2.805522132022-09-24.jpeg',0,0,'2022-09-24 13:33:23'),(25,3,'nour01','8a08498fccafd9a59df95e64978ab7b87fcf0b8e7891c7f568bebaba19180634team1','Nour Ali','nour@gmail.com','te1am632f36f5d54049.479699302022-09-24.jpeg',0,0,'2022-09-24 15:57:25'),(26,2,'houda01','91f921ccf089e9e007afcded67b36afc93fd5c62660a0e33ef3838db149ca3f9team1','Houda Mohammad','houda@gmail.com','',0,0,'2022-09-25 10:53:32'),(27,2,'houda011','98fa5f9e4900f3225d9c2619428c82a99bd58e6385564d8da26eb6c4502d465bteam1','Houda Mohammad','houda01@gmail.com','',0,0,'2022-09-25 10:56:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist_items`
--

DROP TABLE IF EXISTS `wishlist_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wishlist_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` float NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_wishlist_items_wishlists1_idx` (`wishlist_id`),
  KEY `fk_wishlist_items_products1_idx` (`product_id`),
  CONSTRAINT `fk_wishlist_items_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_wishlist_items_wishlists1` FOREIGN KEY (`wishlist_id`) REFERENCES `wishlists` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist_items`
--

LOCK TABLES `wishlist_items` WRITE;
/*!40000 ALTER TABLE `wishlist_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `total` float NOT NULL DEFAULT '0',
  `status` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL,
  `purchased_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_wishlists_users1_idx` (`client_id`),
  CONSTRAINT `fk_wishlists_users1` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-26 11:54:32
