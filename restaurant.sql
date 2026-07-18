-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2026 at 07:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) NOT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` bigint(20) NOT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `cart_id` bigint(20) NOT NULL,
  `food_id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `createddate`, `modifieddate`, `createdby`, `modifiedby`, `slug`) VALUES
(1, 'Fast Food', '2024-11-13 14:31:34', '2024-11-13 14:31:34', 'son', 'son', 'fast-food'),
(2, 'Dessert', '2024-11-13 14:32:20', '2024-11-13 14:32:20', 'son', 'son', 'dessert'),
(3, 'Beverage', '2024-11-13 14:32:41', '2024-11-13 14:32:41', 'son', 'son', 'beverage'),
(4, 'Main Dish', '2024-11-13 14:32:56', '2024-11-13 14:32:56', 'son', 'son', 'main-dish');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` bigint(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `id` bigint(11) NOT NULL,
  `category_id` bigint(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `user_id` bigint(11) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `star` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `category_id`, `name`, `image`, `description`, `quantity`, `price`, `user_id`, `createddate`, `modifieddate`, `createdby`, `modifiedby`, `star`) VALUES
(52, 1, 'Burger', 'http://localhost:8080/api/v1/FileUpload/files/5424ec55307344438eb64d764b4c597a.png', 'Ingredients: Bread, beef, cheese, lettuce, tomato Description: Delicious burger with juicy beef and melted cheese.', 100, 5, 1, '2024-11-15 15:06:55', '2024-11-15 15:06:55', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(53, 1, 'Pepperoni Pizza', 'http://localhost:8080/api/v1/FileUpload/files/d861199370d0444a93d1282e0735afd2.png', 'Ingredients: Pizza crust, tomato sauce, cheese, pepperoni Description: Traditional pepperoni pizza, crispy and aromatic.', 100, 10, 1, '2024-11-15 15:08:48', '2024-11-15 15:08:48', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(54, 1, 'French Fries', 'http://localhost:8080/api/v1/FileUpload/files/3d6312ef30384181812811e44a7126cc.png', 'Ingredients: Potatoes, cooking oil, salt Description: Crispy, fragrant French fries, a popular choice.', 100, 5, 1, '2024-11-15 15:11:47', '2024-11-15 15:11:47', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(55, 1, 'Hot Dog', 'http://localhost:8080/api/v1/FileUpload/files/7078115802044aac9586c590d102ea06.png', 'Ingredients: Bread, sausage, ketchup, mustard Description: Hot dog with tasty sausage and rich sauces.', 100, 5, 1, '2024-11-15 15:21:59', '2024-11-15 15:21:59', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(56, 1, 'Chicken Nuggets', 'http://localhost:8080/api/v1/FileUpload/files/78d9090bb1d34853a986e43bce6af113.png', 'Ingredients: Battered chicken, cooking oil, spices Description: Crispy, flavorful chicken nuggets, easy to enjoy.', 1000, 3, 1, '2024-11-15 15:24:44', '2024-11-15 15:24:44', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(57, 2, 'Chocolate Cake', 'http://localhost:8080/api/v1/FileUpload/files/8a913e747ac149c3ae83033ef171d775.png', 'Ingredients: Flour, cocoa powder, sugar, eggs, butter Description: A rich and moist chocolate cake topped with creamy chocolate frosting.', 20, 12, 1, '2024-11-15 15:26:38', '2024-11-15 15:26:38', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(59, 2, 'Crème Brûlée', 'http://localhost:8080/api/v1/FileUpload/files/8164d16dc96b47f2a92ac7c1b9c0a79d.png', 'Ingredients: Cream, vanilla, sugar, egg yolks Description: Creamy vanilla custard with a caramelized sugar crust.', 10, 4, 1, '2024-11-15 15:32:01', '2024-11-15 15:32:01', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(61, 3, 'Carrot Smoothie', 'http://localhost:8080/api/v1/FileUpload/files/cdbb99b1307e445e9186805dc5e74050.png', 'Ingredients: Fresh carrots, orange juice, honey Description: A creamy smoothie with the natural sweetness of carrots and orange.', 50, 3, 1, '2024-11-15 15:35:30', '2024-11-15 15:35:30', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(62, 3, 'Cocktail', 'http://localhost:8080/api/v1/FileUpload/files/6fe1ab59b3b041b8b4a857f6bac8321c.png', 'Ingredients: Vodka, orange juice, cranberry juice Description: Refreshing cocktail with a blend of vodka and citrus flavors.', 10, 6, 1, '2024-11-15 15:37:14', '2024-11-15 15:37:14', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(63, 3, 'Mojito', 'http://localhost:8080/api/v1/FileUpload/files/9b805403e6a74f439c3279073b555f38.png', 'Ingredients: Fresh mint, lime, sugar, soda water, rum Description: Classic mojito with a minty, lime-flavored twist.', 70, 4, 1, '2024-11-15 15:38:54', '2024-11-15 15:38:54', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(64, 3, 'Lemonade', 'http://localhost:8080/api/v1/FileUpload/files/820709811b674ba59acca2ad753e05ce.png', 'Ingredients: Fresh lemons, water, sugar Description: Refreshing lemonade with a tangy and sweet flavor.', 120, 2, 1, '2024-11-15 15:40:18', '2024-11-15 15:40:18', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(65, 3, 'Chocolate Frappe', 'http://localhost:8080/api/v1/FileUpload/files/ea67f2df9f9940ffb085a5ce65fb09ed.png', 'Ingredients: Coffee, milk, chocolate syrup, ice Description: Creamy, chocolatey frappe with a rich coffee kick.', 35, 5, 1, '2024-11-15 15:41:38', '2024-11-15 15:41:38', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(66, 4, 'Grilled Steak', 'http://localhost:8080/api/v1/FileUpload/files/ac141b4e0957425db2bf174e6d187d7d.png', 'Ingredients: Beef steak, salt, pepper, garlic, herbs Description: Juicy grilled steak seasoned with herbs and spices.', 10, 20, 1, '2024-11-15 15:44:57', '2024-11-15 15:44:57', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(68, 4, 'Chicken Curry', 'http://localhost:8080/api/v1/FileUpload/files/299a2b1de7724caa9fe88489351e527b.png', 'Ingredients: Chicken, curry powder, coconut milk, onions, garlic Description: Flavorful chicken in a creamy curry sauce.', 15, 20, 1, '2024-11-15 15:47:31', '2024-11-15 15:47:31', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(69, 4, 'Salmon Fillet', 'http://localhost:8080/api/v1/FileUpload/files/3bd59443914e4753b04d70fec24e61b8.png', 'Ingredients: Fresh salmon, lemon, olive oil, herbs Description: Grilled salmon fillet with a hint of lemon and herbs.', 10, 18, 1, '2024-11-15 15:48:33', '2024-11-15 15:48:33', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(70, 4, 'Vegetarian Stir-Fry', 'http://localhost:8080/api/v1/FileUpload/files/c922447564f746ca945a37e307521349.png', 'Ingredients: Mixed vegetables, tofu, soy sauce, garlic, ginger Description: Colorful and healthy stir-fried vegetables with tofu.', 10, 8, 1, '2024-11-15 15:50:23', '2024-11-15 15:50:23', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0),
(71, 4, 'Roast Turkey', 'http://localhost:8080/api/v1/FileUpload/files/87669deff3e24df0927e687d3d8ab66d.png', 'Ingredients: Turkey, rosemary, thyme, butter, garlic Description: Tender roast turkey seasoned with herbs and garlic.', 5, 20, 1, '2024-11-15 15:51:40', '2024-11-15 15:51:40', 'buivinhson@gmail.com', 'buivinhson@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `food_image`
--

CREATE TABLE `food_image` (
  `id` bigint(20) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `food_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `food_order_detail`
--

CREATE TABLE `food_order_detail` (
  `id` bigint(20) NOT NULL,
  `order_detail_id` bigint(20) DEFAULT NULL,
  `food_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food_order_detail`
--

INSERT INTO `food_order_detail` (`id`, `order_detail_id`, `food_id`, `quantity`, `unit_price`, `createddate`) VALUES
(40, 103, 70, 1, 8.00, '2024-11-16 04:05:56'),
(49, 112, 54, 1, 5.00, '2024-11-16 08:42:36'),
(50, 113, 54, 2, 5.00, '2024-11-16 08:44:33'),
(51, 114, 54, 1, 5.00, '2026-07-18 04:32:16'),
(52, 115, 55, 1, 5.00, '2026-07-18 04:50:59');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` bigint(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `image`, `createddate`, `modifieddate`, `createdby`, `modifiedby`) VALUES
(19, 'Classic American Feast', 'The Classic American Feast menu celebrates the hearty and diverse flavors of American cuisine. From smoky barbecue to comforting classics, every dish is crafted with fresh, high-quality ingredients for a true taste of America.', 'http://localhost:8080/api/v1/FileUpload/files/0f526223772e44d39c10cebbc08a31c6.png', '2024-11-15 15:55:37', '2024-11-16 10:40:33', 'buivinhson@gmail.com', 'buivinhson@gmail.com'),
(21, 'Healthy Delight', 'The Healthy Delight menu focuses on nutritious, flavorful dishes made with fresh, wholesome ingredients. Each meal is thoughtfully crafted to promote wellness without compromising on taste.', 'http://localhost:8080/api/v1/FileUpload/files/e0097e7d27bc4bbe99ed6c60899cc7c6.png', '2024-11-15 15:58:39', '2024-11-16 10:40:47', 'buivinhson@gmail.com', 'buivinhson@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `menufood`
--

CREATE TABLE `menufood` (
  `id` bigint(20) NOT NULL,
  `menu_id` bigint(20) NOT NULL,
  `food_id` bigint(20) DEFAULT NULL,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedby` varchar(255) DEFAULT NULL,
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menufood`
--

INSERT INTO `menufood` (`id`, `menu_id`, `food_id`, `createdby`, `createddate`, `modifiedby`, `modifieddate`) VALUES
(9, 19, NULL, 'son', '2024-11-15 15:56:07', 'son', '2024-11-15 15:56:07'),
(11, 21, NULL, 'son', '2024-11-15 15:58:57', 'son', '2024-11-15 15:58:57');

-- --------------------------------------------------------

--
-- Table structure for table `menu_food`
--

CREATE TABLE `menu_food` (
  `menu_id` bigint(20) NOT NULL,
  `food_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_food`
--

INSERT INTO `menu_food` (`menu_id`, `food_id`) VALUES
(9, 52),
(9, 54),
(9, 57),
(9, 65),
(11, 59),
(11, 61),
(11, 64),
(11, 70);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) NOT NULL,
  `message` varchar(255) NOT NULL,
  `is_read` tinyint(1) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `message`, `is_read`, `timestamp`) VALUES
(5, 'New table order created by Hoàng Phương on Sat Nov 16 07:00:00 ICT 2024 at 18:26:00', 1, '2024-11-16 15:26:16'),
(6, 'New table order created by Hoàng Phương on Mon Nov 18 07:00:00 ICT 2024 at 22:22:00', 1, '2024-11-18 22:18:52'),
(7, 'New table order created by Hoàng Phương on Mon Nov 18 07:00:00 ICT 2024 at 22:23:00', 1, '2024-11-18 22:20:02');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` bigint(11) NOT NULL,
  `order_id` bigint(11) DEFAULT NULL,
  `food_id` bigint(11) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`id`, `order_id`, `food_id`, `discount`, `createddate`, `modifieddate`, `createdby`, `modifiedby`, `user_id`) VALUES
(103, 70, NULL, 0, '2024-11-16 04:05:56', '2024-11-16 04:05:56', 'son', 'son', 1),
(112, 71, NULL, 0, '2024-11-16 08:42:36', '2024-11-16 08:42:36', 'son', 'son', 1),
(113, 72, NULL, 0, '2024-11-16 08:44:33', '2024-11-16 08:44:33', 'son', 'son', 1),
(114, 73, NULL, 0, '2026-07-18 04:32:16', '2026-07-18 04:32:16', 'Phuong', 'Phuong', 8),
(115, 74, NULL, 0, '2026-07-18 04:50:59', '2026-07-18 04:50:59', 'Phuong', 'Phuong', 8);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `order_code` varchar(255) NOT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `is_paid` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `payment_method` varchar(255) NOT NULL,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedby` varchar(255) DEFAULT NULL,
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `order_code`, `total`, `is_paid`, `status`, `payment_method`, `createdby`, `createddate`, `modifiedby`, `modifieddate`) VALUES
(70, 1, '4636152f-67f8-420e-9857-34b8dcbdf611', 8, '0', 'paid', 'paypal', 'son', '2024-11-16 04:05:56', 'son', '2024-11-16 10:30:56'),
(71, 1, '937e75a6-8bba-484b-a58f-39ea92663919', 5, '0', 'paid', 'card', 'son', '2024-11-15 08:42:36', 'son', '2024-11-16 10:30:43'),
(72, 1, '98d61748-19ab-43de-a145-243c0ec21ed0', 10, '0', 'paid', 'card', 'son', '2024-11-15 08:44:33', 'son', '2024-11-16 10:30:46'),
(73, 8, '486e2174-7aec-4c7a-815f-bbb2df4b1282', 5, '0', 'paid', 'paypal', 'Phuong', '2026-07-18 04:32:16', 'Phuong', '2026-07-18 04:32:16'),
(74, 8, 'a11ca757-99c2-4cb7-91aa-3afaef297cd9', 5, '0', 'paid', 'paypal', 'Phuong', '2026-07-18 04:50:59', 'Phuong', '2026-07-18 04:50:59');

-- --------------------------------------------------------

--
-- Table structure for table `ordertable`
--

CREATE TABLE `ordertable` (
  `id` bigint(11) NOT NULL,
  `menu_id` bigint(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number_of_person` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ordertable`
--

INSERT INTO `ordertable` (`id`, `menu_id`, `name`, `number_of_person`, `email`, `phone`, `status`, `time`, `date`, `createddate`, `modifieddate`) VALUES
(11, 19, 'Hoàng Phương', 15, 'buivinhson@gmail.com', '0367640262', 'accepted', '22:22:00', '2024-11-18', '2024-11-18 15:18:46', '2026-07-18 04:24:34'),
(12, 19, 'Hoàng Phương', 5, 'buivinhson@gmail.com', '0367640262', 'pending', '22:23:00', '2024-11-18', '2024-11-18 15:19:56', '2024-11-18 15:19:56');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` bigint(20) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `is_paid` tinyint(1) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `payment_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order_id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedby` varchar(255) DEFAULT NULL,
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `food_id` bigint(11) NOT NULL,
  `Rating` bigint(11) NOT NULL,
  `Message` varchar(255) NOT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdby` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `Role` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_token_expiry` datetime DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` varchar(255) DEFAULT NULL,
  `modifiedby` varchar(255) DEFAULT NULL,
  `modifieddate` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `user_type` varchar(255) DEFAULT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `full_name`, `birthday`, `email`, `phone`, `password`, `Role`, `address`, `reset_token`, `reset_token_expiry`, `status`, `createdby`, `createddate`, `modifiedby`, `modifieddate`, `user_type`, `code`) VALUES
(1, 'son', NULL, 'buivinhson@gmail.com', NULL, '$2a$10$KM3W2SJb5hHMsjKL5hpMeeEdVFIlVQEj6/s8EvXIJEb2QJYjVREpy', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-12 02:25:56.969891', 'user', 'e04HtSNN'),
(2, 'sonbui', NULL, 'buivinhson123@gmail.com', NULL, '$2a$10$oIWQzA2oyOKkGxFNb.KkdOEvftvpUFpEbNqQzPw9z/QPktyDmr.k.', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-13 15:47:55.618300', 'user', 'zTwo1tFZ'),
(7, 'Phg', NULL, 'phuongphuong2622@gmail.com', NULL, '$2a$10$P6thHjBzHzjtMtgmTnI/SuVYifayv.KeaC9ejPCS1XXBccodtb/hy', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2026-07-18 04:23:09.099692', 'user', 'LOWULYsi'),
(8, 'Phuong', NULL, 'phuongphuong262204@gmail.com', NULL, '$2a$10$eKdeZLTwbv/Lwk1RwgfDQ.3tSC.0nq4CPprtqoX.8hDzDNN0N2L1S', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2026-07-18 04:29:41.063424', 'user', '80z3mEcP');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `food_id` bigint(11) NOT NULL,
  `createdby` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedby` varchar(255) DEFAULT NULL,
  `modifieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `food_id` (`food_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_Food_CategoryId` (`category_id`),
  ADD KEY `fk_user` (`user_id`);

--
-- Indexes for table `food_image`
--
ALTER TABLE `food_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `food_id` (`food_id`);

--
-- Indexes for table `food_order_detail`
--
ALTER TABLE `food_order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_detail_id` (`order_detail_id`),
  ADD KEY `food_id` (`food_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `menufood`
--
ALTER TABLE `menufood`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_id` (`menu_id`),
  ADD KEY `food_id` (`food_id`);

--
-- Indexes for table `menu_food`
--
ALTER TABLE `menu_food`
  ADD PRIMARY KEY (`menu_id`,`food_id`),
  ADD KEY `menufood_fk1` (`menu_id`),
  ADD KEY `menufood_fk2` (`food_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_OrderDetail_OrderId` (`order_id`),
  ADD KEY `FK_OrderDetail_FoodId` (`food_id`),
  ADD KEY `FK_OrdersDetail_UserId` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_Orders_UserId` (`user_id`);

--
-- Indexes for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_OrderTable_MenuId` (`menu_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_Review_UserId` (`user_id`),
  ADD KEY `FK_Review_FoodId` (`food_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_Wishlist_FoodId` (`food_id`),
  ADD KEY `FK_Wishlist_UserId` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `food_image`
--
ALTER TABLE `food_image`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food_order_detail`
--
ALTER TABLE `food_order_detail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `menufood`
--
ALTER TABLE `menufood`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `ordertable`
--
ALTER TABLE `ordertable`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`);

--
-- Constraints for table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `FK_Food_CategoryId` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `food_image`
--
ALTER TABLE `food_image`
  ADD CONSTRAINT `food_image_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `food_order_detail`
--
ALTER TABLE `food_order_detail`
  ADD CONSTRAINT `food_order_detail_ibfk_1` FOREIGN KEY (`order_detail_id`) REFERENCES `orderdetail` (`id`),
  ADD CONSTRAINT `food_order_detail_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`);

--
-- Constraints for table `menufood`
--
ALTER TABLE `menufood`
  ADD CONSTRAINT `menufood_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menufood_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `FK_OrderDetail_FoodId` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`),
  ADD CONSTRAINT `FK_OrderDetail_OrderId` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_Orders_UserId` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD CONSTRAINT `FK_OrderTable_MenuId` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `FK_Review_FoodId` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`),
  ADD CONSTRAINT `FK_Review_UserId` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `FK_Wishlist_FoodId` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`),
  ADD CONSTRAINT `FK_Wishlist_UserId` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
