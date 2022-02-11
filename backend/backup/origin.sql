-- MariaDB dump 10.19  Distrib 10.6.4-MariaDB, for osx10.17 (x86_64)
--
-- Host: localhost    Database: advertisements
-- ------------------------------------------------------
-- Server version	10.6.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `advertisements`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `advertisements` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `advertisements`;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(11) NOT NULL,
  `dateCreated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (5,'6','tt',4,'2022-01-26 17:12:39'),(8,'1_27 test','test description',10027,'2022-01-27 15:08:05'),(9,'starBucks','service the coffee',1500,'2022-01-27 15:09:03'),(10,'new title','new description',20001,'2022-01-27 15:59:35'),(11,'title 1/28','Description 1/28',10000,'2022-01-27 16:06:46'),(12,'test at home today! new','home description',33,'2022-01-27 22:40:43'),(15,'no1','no11',1,'2022-01-28 10:10:38'),(16,'no2','no22',2,'2022-01-28 10:10:57'),(17,'no3','no33',3,'2022-01-28 10:11:03'),(18,'no4','no44',4,'2022-01-28 10:11:13'),(19,'no5','no55',5,'2022-01-28 10:11:19'),(20,'no6','no66',6,'2022-01-28 10:11:26'),(21,'no7','no77',7,'2022-01-28 10:11:32'),(22,'no8','no88',8,'2022-01-28 10:11:39'),(23,'df','df',2,'2022-02-03 15:23:33'),(25,'SamSung','cell-phone',22000,'2022-02-04 10:20:34'),(26,'Apple','Apple phone',110000,'2022-02-04 10:23:04'),(27,'Vans','shoes',33000,'2022-02-04 10:23:37'),(28,'Eyes up','vitamin',3300,'2022-02-04 10:27:18'),(29,'Cup','and coffee',22000,'2022-02-04 10:29:21'),(30,'c','c',3,'2022-02-04 10:29:43'),(31,'d','d',40000,'2022-02-04 10:30:23'),(32,'e','e',2,'2022-02-04 10:38:26'),(33,'d','f',4,'2022-02-04 10:41:41'),(34,'f','f',4,'2022-02-04 10:45:21'),(35,'h','h',4,'2022-02-04 10:46:59'),(36,'i','i',8,'2022-02-04 10:47:35'),(37,'j','j',7,'2022-02-04 10:50:23'),(38,'k','k',5,'2022-02-04 10:51:51'),(39,'n','n',4,'2022-02-04 10:57:33'),(40,'o','o',7,'2022-02-04 11:05:16'),(41,'p','p',2,'2022-02-04 11:06:06'),(42,'q','q',5,'2022-02-04 11:06:52'),(43,'r','tttt',33,'2022-02-04 11:07:39'),(45,'te','te',5,'2022-02-04 11:14:27'),(46,'df','df',55,'2022-02-04 11:18:59'),(47,'tt','tt',3,'2022-02-04 11:20:33'),(48,'rt','rt',4,'2022-02-04 11:22:59'),(49,'g','f',3,'2022-02-04 11:23:39'),(50,'t','t',6,'2022-02-04 11:23:49'),(51,'test','t',5,'2022-02-04 11:24:26'),(52,'td','e',6,'2022-02-04 11:25:29'),(53,'fff','fff',40000,'2022-02-04 11:25:54'),(54,'title11','1tt2',39992,'2022-02-04 16:02:04'),(56,'d','d',1,'2022-02-08 10:15:44'),(57,'f','f',4,'2022-02-08 10:16:18'),(58,'d','d',1,'2022-02-08 10:16:44'),(59,'ㅇㅇ','ㅇㅇ',44444,'2022-02-08 10:18:07'),(60,'f','f',4,'2022-02-08 10:28:11');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-08 14:53:19
