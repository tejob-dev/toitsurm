-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           5.7.33 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour chatitem
CREATE DATABASE IF NOT EXISTS `chatitem` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `chatitem`;

-- Listage de la structure de la table chatitem. contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nom` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prenom` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lib_item_select` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.contacts : ~4 rows (environ)
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` (`id`, `nom`, `prenom`, `email`, `telephone`, `message`, `lib_item_select`, `created_at`, `updated_at`) VALUES
	(1, 'Tejobo', 'Heyzci', 'tchimouj66@gmail.com', '+2250778018505', 'Ok', NULL, '2023-01-27 12:25:06', '2023-01-27 12:25:06'),
	(2, 'Tejobo', 'Heyzci', 'tchimouj66@gmail.com', '+2250778018505', 'Pok', NULL, '2023-01-27 12:25:31', '2023-01-27 12:25:31'),
	(3, 'Tejobo', 'Heyzci', 'tchimouj66@gmail.com', '+2250778018505', 'Pok', NULL, '2023-01-27 12:25:44', '2023-01-27 12:25:44'),
	(4, 'Tejobo', 'TopTen', 'tchimouj66@gmail.com', '+2250778018505', 'okay', NULL, '2023-01-27 12:29:01', '2023-01-27 12:29:01');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.failed_jobs : ~0 rows (environ)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. galleries
CREATE TABLE IF NOT EXISTS `galleries` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `lib_lieu` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lien_suivant` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `list_simage` longtext COLLATE utf8mb4_unicode_ci,
  `message` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.galleries : ~4 rows (environ)
/*!40000 ALTER TABLE `galleries` DISABLE KEYS */;
INSERT INTO `galleries` (`id`, `lib_lieu`, `position`, `lien_suivant`, `list_simage`, `message`, `created_at`, `updated_at`) VALUES
	(4, 'Terrai baloule', 'Bingerville', '3', '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem, consectetur, eveniet nam dignissimos asperiores voluptatibus ea perferendis ipsa odit porro eum repellat assumenda quae placeat blanditiis nihil dolorum nemo?', '2023-01-27 15:08:18', '2023-01-27 15:08:18'),
	(5, 'Terrai baloule', 'Bingerville', '4', '', 'Totot', '2023-01-27 15:15:42', '2023-01-27 15:15:42'),
	(6, 'Terrai baloule', 'Bingerville', NULL, NULL, 'fjsfbdjkfnksbjfs', '2023-01-27 15:35:07', '2023-01-27 15:35:07'),
	(7, 'Terrai baloule', 'Bingerville', '6', 'http://toitsurme-back.test/storage/gallery/sLXInZjxXpId853QPD070jnaXFWX5k6lz1HtZZYK.jpg,http://toitsurme-back.test/storage/gallery/1XdJGFb0YtcjeQfLgBWTha1LDPnt04IIa2ifto3T.jpg,http://toitsurme-back.test/storage/gallery/MouZQcn0gKMSgRDMHUOrsTO87rwIth3YyzxleONb.jpg,', 'fjsfbdjkfnksbjfs', '2023-01-27 15:35:41', '2023-01-27 15:35:41');
/*!40000 ALTER TABLE `galleries` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `message` longtext COLLATE utf8mb4_unicode_ci,
  `user_id` bigint(20) unsigned NOT NULL,
  `receiver` bigint(20) unsigned NOT NULL,
  `is_seen` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `file` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_user_id_foreign` (`user_id`),
  KEY `messages_receiver_foreign` (`receiver`),
  CONSTRAINT `messages_receiver_foreign` FOREIGN KEY (`receiver`) REFERENCES `users` (`id`),
  CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.messages : ~10 rows (environ)
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` (`id`, `message`, `user_id`, `receiver`, `is_seen`, `created_at`, `updated_at`, `file`, `file_name`) VALUES
	(1, 'Asperiores qui quia dolor placeat architecto tempore inventore ipsam.', 7, 9, 0, '2023-01-27 12:24:19', '2023-01-27 12:24:19', NULL, NULL),
	(2, 'Aut modi perspiciatis enim dolorem porro.', 7, 9, 0, '2023-01-27 12:24:19', '2023-01-27 12:24:19', NULL, NULL),
	(3, 'Tenetur ipsum cum ut rerum at hic officiis.', 4, 9, 0, '2023-01-27 12:24:19', '2023-01-27 12:24:19', NULL, NULL),
	(4, 'Omnis incidunt similique dolore sed assumenda iure.', 1, 9, 0, '2023-01-27 12:24:19', '2023-01-27 12:24:19', NULL, NULL),
	(5, 'Ut fugit alias molestiae eum illo.', 5, 9, 0, '2023-01-27 12:24:19', '2023-01-27 12:24:19', NULL, NULL),
	(6, 'Ex voluptatibus quibusdam at nobis maiores voluptate.', 1, 9, 0, '2023-01-27 12:24:20', '2023-01-27 12:24:20', NULL, NULL),
	(7, 'Qui eaque provident illo sit ipsum minus dolorem.', 2, 9, 0, '2023-01-27 12:24:20', '2023-01-27 12:24:20', NULL, NULL),
	(8, 'Iusto libero a perferendis odio.', 3, 9, 1, '2023-01-27 12:24:20', '2023-01-27 15:39:33', NULL, NULL),
	(9, 'Ratione molestias itaque eum laudantium harum quia inventore.', 6, 9, 1, '2023-01-27 12:24:20', '2023-01-27 15:42:42', NULL, NULL),
	(10, 'Cupiditate et aut nam corrupti.', 2, 9, 0, '2023-01-27 12:24:20', '2023-01-27 12:24:20', NULL, NULL),
	(11, NULL, 9, 8, 0, '2023-01-27 15:40:53', '2023-01-27 15:40:53', 'http://toitsurme-back.test/storage/files/OmKIA2mOJrWdkTm2g6onrFXJwAyKvesmPxAUHScQ.jpg', 'a-golden.jpg');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.migrations : ~11 rows (environ)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(19, '2014_10_12_000000_create_users_table', 1),
	(20, '2014_10_12_100000_create_password_resets_table', 1),
	(21, '2019_08_19_000000_create_failed_jobs_table', 1),
	(22, '2020_11_26_144318_create_messages_table', 1),
	(23, '2020_11_28_193934_add_last_activity_to_users_table', 1),
	(24, '2021_04_09_131351_add_file_to_messages_table', 1),
	(25, '2021_04_09_134637_add_file_name_to_messages_table', 1),
	(26, '2023_01_25_172403_create_contacts_table', 1),
	(27, '2023_01_25_172536_create_payhistos_table', 1),
	(28, '2023_01_25_172623_create_galleries_table', 1),
	(29, '2023_01_25_172823_create_soumissions_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.password_resets : ~0 rows (environ)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. payhistos
CREATE TABLE IF NOT EXISTS `payhistos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `date_paye` datetime NOT NULL,
  `montant_paye` int(11) NOT NULL,
  `reste_paye` int(11) NOT NULL,
  `moyen_pay` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `num_recu_pay` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observation` longtext COLLATE utf8mb4_unicode_ci,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payhistos_user_id_foreign` (`user_id`),
  CONSTRAINT `payhistos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.payhistos : ~0 rows (environ)
/*!40000 ALTER TABLE `payhistos` DISABLE KEYS */;
/*!40000 ALTER TABLE `payhistos` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. soumissions
CREATE TABLE IF NOT EXISTS `soumissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.soumissions : ~0 rows (environ)
/*!40000 ALTER TABLE `soumissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `soumissions` ENABLE KEYS */;

-- Listage de la structure de la table chatitem. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresse` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `is_online` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_activity` timestamp NOT NULL DEFAULT '2023-01-27 12:23:35',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table chatitem.users : ~9 rows (environ)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `prenom`, `telephone`, `adresse`, `email`, `email_verified_at`, `password`, `is_admin`, `is_online`, `remember_token`, `created_at`, `updated_at`, `last_activity`) VALUES
	(1, 'Beaulah Bernhard DDS', 'Dr. Isidro Krajcik', '1-657-673-3772', '1886 Herman Mountain\nNew Chad, MI 79076-1728', 'deborah.zboncak@example.org', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'nvYqDlG1P1', '2023-01-27 12:24:13', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(2, 'Shemar Hartmann', 'Zula Altenwerth', '+18176726532', '94379 Cummings Ridges Apt. 113\nPort Abdullah, OH 95085', 'kristian.ferry@example.net', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'f7nctCvcUs', '2023-01-27 12:24:13', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(3, 'Kailyn Gerhold', 'Alexandrea Sanford', '936-520-2704', '726 Bartell Pine Suite 946\nNorth Adellside, NY 52963-5190', 'ecrist@example.net', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'gwKSmwn7FJ', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(4, 'Vallie Borer IV', 'Miss Ayana Williamson', '551-329-9657', '8134 Willa Route Apt. 230\nLake Sebastianview, TX 51105-8197', 'nigel48@example.com', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, '2d2SMqk3kX', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(5, 'Laila Grant', 'Prof. Chasity Kertzmann DVM', '629-744-8727', '471 Mavis Parkway Suite 253\nWandaville, UT 51481', 'zmacejkovic@example.net', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'remNkhQfCV', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(6, 'Minnie Hermann DVM', 'Mr. Walton Mertz Jr.', '(603) 375-1664', '51667 Oran Shoal\nWest Kaliport, SD 19288', 'swaters@example.org', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'VtQhV8OqME', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(7, 'Dorothy Upton', 'Jeffery Haag', '(231) 387-0635', '844 Verlie Prairie\nStiedemanntown, WI 11330', 'koch.ethyl@example.org', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'eXQBSr4cvS', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(8, 'Danial Anderson', 'Fatima Rodriguez', '+1 (442) 545-0533', '513 VonRueden Locks\nPort Amiya, DE 13619-0045', 'kessler.leonardo@example.net', '2023-01-27 12:24:13', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 0, 'K1BPoIirwB', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 12:23:35'),
	(9, 'Madalyn Carter', 'Camren Cremin', '1-612-233-1628', '471 Helen Court\nWest Elva, FL 21570', 'lorine04@example.org', '2023-01-27 12:24:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, 1, 'fDhdsBYr7Q', '2023-01-27 12:24:14', '2023-01-27 15:53:50', '2023-01-27 15:54:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
