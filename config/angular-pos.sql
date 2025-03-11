/*
 Navicat MySQL Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : angular-pos

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 24/12/2024 14:26:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `financial_number` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_customer` tinyint(1) DEFAULT '0',
  `is_supplier` tinyint(1) DEFAULT '0',
  `is_bank` tinyint(1) DEFAULT '0',
  `is_employee` tinyint(1) DEFAULT '0',
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of accounts
-- ----------------------------
BEGIN;
INSERT INTO `accounts` VALUES (1, NULL, 'customer 1', 'testing address for customer 1', '70846278', '', 1, 0, 0, 0, 0);
INSERT INTO `accounts` VALUES (2, NULL, 'testing supplier', '', '70786995', '', 0, 1, 0, 0, 0);
COMMIT;

-- ----------------------------
-- Table structure for chart_of_accounts
-- ----------------------------
DROP TABLE IF EXISTS `chart_of_accounts`;
CREATE TABLE `chart_of_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_number` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `english_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `arabic_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_number` int(11) NOT NULL,
  `sub_category_number` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `account_type` enum('EXPENSES','INCOME','EQUITY','ASSETS','LIABILITIES','ASSETS/ LIABILITIES') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `chart_of_accounts_categories_unique` (`account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of chart_of_accounts
-- ----------------------------
BEGIN;
INSERT INTO `chart_of_accounts` VALUES (1, '4011', 'Invoices ', 'فواتیر ', 4, '40', 'LIABILITIES');
INSERT INTO `chart_of_accounts` VALUES (2, '4111', 'Ordinary Clients ', 'زبائن عادیون ', 4, '41', 'ASSETS');
INSERT INTO `chart_of_accounts` VALUES (3, '413', 'Notes Receivable ( Clients ) ', 'اوراق قبض - زبائن ', 4, '41', 'ASSETS');
INSERT INTO `chart_of_accounts` VALUES (4, '6011', 'Goods ', 'البضاعة ', 6, '60', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (5, '7011', 'Sales Goods ', '- ', 7, '70', 'INCOME');
INSERT INTO `chart_of_accounts` VALUES (6, '44271', 'V.A.T On Sales', NULL, 4, '44', 'LIABILITIES');
INSERT INTO `chart_of_accounts` VALUES (7, '531', 'Cash Dollar', 'كاش دولار', 5, '53', 'ASSETS');
INSERT INTO `chart_of_accounts` VALUES (8, '6112', 'Consumables Purchases ', 'شراء مواد ولوازم استھلاكیة ', 6, '61', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (9, '61121', 'Fuel And Gaz ', 'محروقات ', 6, '61', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (10, '61122', 'Maintenance Products ', 'مواد الصیانة ', 6, '61', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (11, '61123', 'Workshop And Factory Supplies ', 'لوازم للمشغل و المصنع ', 6, '61', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (12, '61124', 'Stores Supplies ', 'لوازم للمخزن ', 6, '61', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (13, '61125', 'Office Supplies ', 'لوازم مكتبیة ', 6, '61', 'EXPENSES');
INSERT INTO `chart_of_accounts` VALUES (14, '401', 'Accounts Payables ( Suppliers ) ', NULL, 4, '40', 'LIABILITIES');
COMMIT;

-- ----------------------------
-- Table structure for exchange_rate
-- ----------------------------
DROP TABLE IF EXISTS `exchange_rate`;
CREATE TABLE `exchange_rate` (
  `rate_id` int(11) NOT NULL AUTO_INCREMENT,
  `rate_value` decimal(10,0) NOT NULL DEFAULT '89400',
  `transaction_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`rate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of exchange_rate
-- ----------------------------
BEGIN;
INSERT INTO `exchange_rate` VALUES (1, 89400, '2024-08-24 08:35:48', 0);
INSERT INTO `exchange_rate` VALUES (2, 90000, '2024-09-11 12:50:54', 0);
COMMIT;

-- ----------------------------
-- Table structure for inventory_transactions
-- ----------------------------
DROP TABLE IF EXISTS `inventory_transactions`;
CREATE TABLE `inventory_transactions` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id_fk` int(11) NOT NULL,
  `transaction_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `transaction_type` enum('SALE','SUPPLY','RETURN','UNRETURN','DELETE','DISPOSE','DELIVER','ADD','REMOVE') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `transaction_notes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `order_id_fk` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1971 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of inventory_transactions
-- ----------------------------
BEGIN;
INSERT INTO `inventory_transactions` VALUES (1947, 1, '2024-12-23 14:17:33', 'ADD', 50, 'Initial Quantity', 0, NULL);
INSERT INTO `inventory_transactions` VALUES (1948, 2, '2024-12-23 14:17:51', 'ADD', 100, 'Initial Quantity', 0, NULL);
INSERT INTO `inventory_transactions` VALUES (1949, 1, '2024-12-23 14:18:32', 'SALE', -1, 'INV1001', 0, '1');
INSERT INTO `inventory_transactions` VALUES (1950, 2, '2024-12-23 14:18:32', 'SALE', -1, 'INV1001', 0, '1');
INSERT INTO `inventory_transactions` VALUES (1951, 2, '2024-12-23 14:22:12', 'SALE', -1, 'INV1002', 0, '2');
INSERT INTO `inventory_transactions` VALUES (1952, 2, '2024-12-23 14:35:28', 'DELETE', 1, NULL, 0, NULL);
INSERT INTO `inventory_transactions` VALUES (1953, 2, '2024-12-23 14:40:35', 'SALE', -1, 'INV1002', 0, '3');
INSERT INTO `inventory_transactions` VALUES (1958, 2, '2024-12-24 12:36:09', 'SALE', -1, 'INV1003', 0, '6');
INSERT INTO `inventory_transactions` VALUES (1959, 1, '2024-12-24 12:44:40', 'SALE', -1, 'INV1004', 0, '7');
INSERT INTO `inventory_transactions` VALUES (1960, 2, '2024-12-24 13:42:23', 'SUPPLY', 1, 'SUP1001', 0, '1');
INSERT INTO `inventory_transactions` VALUES (1961, 1, '2024-12-24 13:42:23', 'SUPPLY', 1, 'SUP1001', 0, '1');
INSERT INTO `inventory_transactions` VALUES (1962, 1, '2024-12-24 13:45:44', 'SUPPLY', 1, 'SUP1002', 0, '2');
INSERT INTO `inventory_transactions` VALUES (1963, 2, '2024-12-24 13:45:44', 'SUPPLY', 1, 'SUP1002', 0, '2');
INSERT INTO `inventory_transactions` VALUES (1965, 1, '2024-12-24 13:55:52', 'DELETE', 1, NULL, 0, NULL);
INSERT INTO `inventory_transactions` VALUES (1966, 2, '2024-12-24 13:55:52', 'DELETE', 1, NULL, 0, NULL);
INSERT INTO `inventory_transactions` VALUES (1969, 1, '2024-12-24 13:56:53', 'SALE', -1, 'INV1005', 0, '8');
INSERT INTO `inventory_transactions` VALUES (1970, 2, '2024-12-24 14:22:15', 'SUPPLY', 1, 'SUP1003', 0, '3');
COMMIT;

-- ----------------------------
-- Table structure for journal_items
-- ----------------------------
DROP TABLE IF EXISTS `journal_items`;
CREATE TABLE `journal_items` (
  `journal_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `journal_id_fk` int(11) NOT NULL,
  `journal_date` datetime DEFAULT NULL,
  `account_id_fk` int(11) NOT NULL,
  `partner_id_fk` int(11) DEFAULT NULL,
  `reference_number` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `debit` decimal(10,2) NOT NULL DEFAULT '0.00',
  `credit` decimal(10,2) NOT NULL DEFAULT '0.00',
  `currency` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `exchange_value` decimal(10,2) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`journal_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of journal_items
-- ----------------------------
BEGIN;
INSERT INTO `journal_items` VALUES (5, 3, '2024-12-23 14:22:00', 7, NULL, NULL, 40.00, 0.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (6, 3, '2024-12-23 14:22:00', 3, 1, NULL, 0.00, 40.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (7, 4, '2024-12-23 14:40:35', 5, NULL, NULL, 0.00, 40.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (8, 4, '2024-12-23 14:40:35', 2, 1, NULL, 40.00, 0.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (15, 9, '2024-12-24 12:36:09', 5, NULL, NULL, 0.00, 100.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (16, 9, '2024-12-24 12:36:09', 2, 1, NULL, 100.00, 0.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (17, 10, '2024-12-24 12:44:40', 5, NULL, NULL, 0.00, 20.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (18, 10, '2024-12-24 12:44:40', 2, 1, NULL, 20.00, 0.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (19, 11, '2024-12-24 12:44:00', 7, NULL, NULL, 120.00, 0.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (20, 11, '2024-12-24 12:44:00', 3, 1, NULL, 0.00, 120.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (25, 14, '2024-12-24 13:42:23', 1, NULL, NULL, 0.00, 45.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (26, 14, '2024-12-24 13:42:23', 4, NULL, NULL, 45.00, 0.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (27, 15, '2024-12-24 13:45:44', 1, 2, NULL, 0.00, 200.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (28, 15, '2024-12-24 13:45:44', 4, NULL, NULL, 200.00, 0.00, 'USD', 90000.00, 0);
INSERT INTO `journal_items` VALUES (29, 16, '2024-12-24 13:45:44', 7, NULL, NULL, 0.00, 50.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (30, 16, '2024-12-24 13:45:44', 14, 2, NULL, 50.00, 0.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (33, 18, '2024-12-24 13:56:00', 7, NULL, NULL, 0.00, 10.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (34, 18, '2024-12-24 13:56:00', 14, 2, NULL, 10.00, 0.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (37, 17, '2024-12-24 13:50:00', 1, 2, NULL, 0.00, 50.00, 'USD', NULL, 0);
INSERT INTO `journal_items` VALUES (38, 17, '2024-12-24 13:50:00', 4, NULL, NULL, 50.00, 0.00, 'USD', NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for journal_vouchers
-- ----------------------------
DROP TABLE IF EXISTS `journal_vouchers`;
CREATE TABLE `journal_vouchers` (
  `journal_id` int(11) NOT NULL AUTO_INCREMENT,
  `journal_number` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `journal_date` datetime NOT NULL,
  `reference_number` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `journal_description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `total_value` decimal(10,2) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`journal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of journal_vouchers
-- ----------------------------
BEGIN;
INSERT INTO `journal_vouchers` VALUES (3, 'PAY1001', '2024-12-23 14:22:00', NULL, 'Payment', 40.00, 0);
INSERT INTO `journal_vouchers` VALUES (4, 'INV1002', '2024-12-23 14:40:35', NULL, 'Invoice', 40.00, 0);
INSERT INTO `journal_vouchers` VALUES (9, 'INV1003', '2024-12-24 12:36:09', NULL, 'Invoice', 100.00, 0);
INSERT INTO `journal_vouchers` VALUES (10, 'INV1004', '2024-12-24 12:44:40', NULL, 'Invoice', 20.00, 0);
INSERT INTO `journal_vouchers` VALUES (11, 'PAY1002', '2024-12-24 12:44:00', NULL, 'Payment', 120.00, 0);
INSERT INTO `journal_vouchers` VALUES (14, 'SUP1001', '2024-12-24 13:42:23', NULL, 'Supply', 45.00, 0);
INSERT INTO `journal_vouchers` VALUES (15, 'SUP1002', '2024-12-24 13:45:44', NULL, 'Supply', 200.00, 0);
INSERT INTO `journal_vouchers` VALUES (16, 'REC1002', '2024-12-24 13:45:44', NULL, 'Supplier Payment', 50.00, 0);
INSERT INTO `journal_vouchers` VALUES (17, 'SUP1003', '2024-12-24 13:50:00', NULL, 'Supply', 50.00, 0);
INSERT INTO `journal_vouchers` VALUES (18, 'REC1003', '2024-12-24 13:56:00', NULL, 'Supplier Payment', 10.00, 0);
COMMIT;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id_fk` int(11) DEFAULT NULL,
  `sku` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `barcode` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `avg_cost_usd` decimal(10,2) DEFAULT NULL,
  `unit_cost_usd` decimal(10,2) NOT NULL,
  `unit_price_usd` decimal(10,2) NOT NULL DEFAULT '1.00',
  `product_notes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `stock_management` tinyint(1) NOT NULL DEFAULT '1',
  `low_stock_threshold` int(11) DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `barcode` (`barcode`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES (1, 1, NULL, NULL, 'item 1', 16.67, 100.00, 20.00, NULL, 1, 10, 0);
INSERT INTO `products` VALUES (2, 1, NULL, NULL, 'item 2', 31.57, 100.00, 40.00, NULL, 1, 10, 0);
COMMIT;

-- ----------------------------
-- Table structure for products_brands
-- ----------------------------
DROP TABLE IF EXISTS `products_brands`;
CREATE TABLE `products_brands` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Table structure for products_categories
-- ----------------------------
DROP TABLE IF EXISTS `products_categories`;
CREATE TABLE `products_categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_index` int(11) DEFAULT NULL,
  `category_name` varchar(50) NOT NULL,
  `show_on_sell` tinyint(1) NOT NULL DEFAULT '1',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products_categories
-- ----------------------------
BEGIN;
INSERT INTO `products_categories` VALUES (1, 0, 'category 1', 1, 0);
COMMIT;

-- ----------------------------
-- Table structure for purchase_order_items
-- ----------------------------
DROP TABLE IF EXISTS `purchase_order_items`;
CREATE TABLE `purchase_order_items` (
  `order_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id_fk` int(11) NOT NULL,
  `product_id_fk` int(11) NOT NULL,
  `product_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_unit_id` int(11) DEFAULT NULL,
  `product_unit_abbreviation` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `unit_cost_usd` decimal(10,2) NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id_fk`) USING BTREE,
  KEY `product_id` (`product_id_fk`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of purchase_order_items
-- ----------------------------
BEGIN;
INSERT INTO `purchase_order_items` VALUES (1, 1, 2, 'item 2', NULL, NULL, 1, 30.00, 0);
INSERT INTO `purchase_order_items` VALUES (2, 1, 1, 'item 1', NULL, NULL, 1, 15.00, 0);
INSERT INTO `purchase_order_items` VALUES (3, 2, 1, 'item 1', NULL, NULL, 1, 100.00, 0);
INSERT INTO `purchase_order_items` VALUES (4, 2, 2, 'item 2', NULL, NULL, 1, 100.00, 0);
INSERT INTO `purchase_order_items` VALUES (6, 3, 2, 'item 2', NULL, NULL, 1, 50.00, 0);
COMMIT;

-- ----------------------------
-- Table structure for purchase_orders
-- ----------------------------
DROP TABLE IF EXISTS `purchase_orders`;
CREATE TABLE `purchase_orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `journal_voucher_id` int(11) DEFAULT NULL,
  `partner_id_fk` int(11) DEFAULT NULL,
  `order_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total_cost` decimal(10,2) NOT NULL DEFAULT '0.00',
  `purchase_notes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `exchange_rate` decimal(10,2) DEFAULT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `supplier_id` (`partner_id_fk`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of purchase_orders
-- ----------------------------
BEGIN;
INSERT INTO `purchase_orders` VALUES (1, 'SUP1001', 14, NULL, '2024-12-24 13:42:23', 45.00, NULL, 90000.00, 0);
INSERT INTO `purchase_orders` VALUES (2, 'SUP1002', 15, 2, '2024-12-24 13:45:44', 200.00, NULL, 90000.00, 0);
INSERT INTO `purchase_orders` VALUES (3, 'SUP1003', 17, 2, '2024-12-24 13:50:00', 50.00, NULL, 90000.00, 0);
COMMIT;

-- ----------------------------
-- Table structure for reservations
-- ----------------------------
DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `allDay` tinyint(1) NOT NULL DEFAULT '0',
  `backgroundColor` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `borderColor` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `customer_id_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reservations
-- ----------------------------
BEGIN;
INSERT INTO `reservations` VALUES (4, '2024-09-19 11:00:00', '2024-09-19 12:00:00', 0, '#3B82F6', '#3B82F6', 'shower', 0, 24);
INSERT INTO `reservations` VALUES (5, '2024-10-03 11:00:00', '2024-10-03 12:00:00', 0, '#3B82F6', '#3B82F6', 'shower cat', 0, 32);
INSERT INTO `reservations` VALUES (6, '2024-10-03 12:30:00', '2024-10-03 13:30:00', 0, '#3B82F6', '#3B82F6', 'haircut + shower cat', 0, 26);
INSERT INTO `reservations` VALUES (7, '2024-10-04 12:00:00', '2024-10-04 13:00:00', 0, '#3B82F6', '#3B82F6', 'haircut +shower cat', 0, 36);
INSERT INTO `reservations` VALUES (8, '2024-10-10 11:00:00', '2024-10-10 12:30:00', 0, '#3B82F6', '#3B82F6', 'shower pomeranian ', 0, 39);
INSERT INTO `reservations` VALUES (9, '2024-10-10 12:30:00', '2024-10-10 13:30:00', 0, '#3B82F6', '#3B82F6', 'Haircut + shower cat', 0, 42);
INSERT INTO `reservations` VALUES (10, '2024-10-18 10:00:00', '2024-10-18 11:00:00', 0, '#3B82F6', '#3B82F6', NULL, 0, 50);
INSERT INTO `reservations` VALUES (11, '2024-10-18 12:00:00', '2024-10-18 13:00:00', 0, '#3B82F6', '#3B82F6', 'grooming', 0, 48);
INSERT INTO `reservations` VALUES (12, '2024-10-28 12:30:00', '2024-10-28 14:30:00', 0, '#3B82F6', '#3B82F6', '2 cats shower', 0, 40);
INSERT INTO `reservations` VALUES (13, '2024-10-31 13:00:00', '2024-10-31 14:00:00', 0, '#3B82F6', '#3B82F6', 'shower golden', 0, 40);
INSERT INTO `reservations` VALUES (14, '2024-10-31 14:00:00', '2024-10-31 15:00:00', 0, '#3B82F6', '#3B82F6', 'shower cat', 0, 40);
INSERT INTO `reservations` VALUES (15, '2024-11-08 10:30:00', '2024-11-08 11:30:00', 0, '#3B82F6', '#3B82F6', 'mohammad dadah 71212923 haircut+shower', 0, NULL);
INSERT INTO `reservations` VALUES (16, '2024-11-08 11:30:00', '2024-11-08 12:30:00', 0, '#3B82F6', '#3B82F6', 'mohammad fawaz 03088339 haircut +shower', 0, NULL);
INSERT INTO `reservations` VALUES (17, '2024-11-08 18:00:00', '2024-11-08 19:00:00', 0, '#3B82F6', '#3B82F6', 'Shero 81144721 shower', 0, NULL);
INSERT INTO `reservations` VALUES (18, '2024-11-08 13:00:00', '2024-11-08 14:00:00', 0, '#3B82F6', '#3B82F6', 'georges maalouf haircut ', 0, NULL);
INSERT INTO `reservations` VALUES (19, '2024-11-08 12:30:00', '2024-11-08 13:00:00', 0, '#37eb17', '#37eb17', 'Lea  consultation cat ', 0, NULL);
INSERT INTO `reservations` VALUES (20, '2024-11-08 09:00:00', '2024-11-08 09:30:00', 0, '#3B82F6', '#3B82F6', 'Hassan Kaouk 78952275  haircut+shower', 0, NULL);
INSERT INTO `reservations` VALUES (21, '2024-11-13 15:00:00', '2024-11-13 16:11:00', 0, '#3B82F6', '#3B82F6', '78952275 Hassan Kaouk', 1, NULL);
INSERT INTO `reservations` VALUES (22, '2024-11-11 11:00:00', '2024-11-11 12:00:00', 0, '#3B82F6', '#3B82F6', 'Nour Hariri 76657050', 1, NULL);
INSERT INTO `reservations` VALUES (23, '2024-11-11 12:00:00', '2024-11-11 13:00:00', 0, '#3B82F6', '#3B82F6', 'Emili salloum 76499518', 0, NULL);
INSERT INTO `reservations` VALUES (24, '2024-11-11 13:00:00', '2024-11-11 14:00:00', 0, '#3B82F6', '#3B82F6', 'Mohammad abo Mahdi cat shower', 0, NULL);
INSERT INTO `reservations` VALUES (25, '2024-11-13 11:00:00', '2024-11-13 12:00:00', 0, '#18f52b', '#18f52b', 'Linda Basma 71528888 castration cat ', 0, NULL);
INSERT INTO `reservations` VALUES (26, '2024-11-11 14:00:00', '2024-11-11 14:30:00', 0, '#3B82F6', '#3B82F6', 'rida saad cozmo ', 0, NULL);
INSERT INTO `reservations` VALUES (27, '2024-11-13 11:00:00', '2024-11-13 12:00:00', 0, '#3B82F6', '#3B82F6', 'Nour hariri 76657050 haircut+shower', 1, NULL);
INSERT INTO `reservations` VALUES (28, '2024-11-11 14:30:00', '2024-11-11 15:30:00', 0, '#3B82F6', '#3B82F6', 'Jana Slaiman 03977675', 0, NULL);
INSERT INTO `reservations` VALUES (29, '2024-11-13 12:00:00', '2024-11-13 13:30:00', 0, '#3B82F6', '#3B82F6', 'aida cat shower (2)', 0, NULL);
INSERT INTO `reservations` VALUES (30, '2024-11-15 11:00:00', '2024-11-15 12:00:00', 0, '#3B82F6', '#3B82F6', 'Cat shower', 0, NULL);
INSERT INTO `reservations` VALUES (31, '2024-11-15 12:00:00', '2024-11-15 13:00:00', 0, '#3B82F6', '#3B82F6', 'Cat shower + grooming ', 0, NULL);
INSERT INTO `reservations` VALUES (32, '2024-11-18 10:00:00', '2024-11-18 11:00:00', 0, '#eb072d', '#eb072d', 'Castration male cat 03257991', 0, NULL);
INSERT INTO `reservations` VALUES (33, '2024-11-18 11:00:00', '2024-11-18 13:00:00', 0, '#fa260a', '#fa260a', 'Castration 2 cats ', 0, 40);
INSERT INTO `reservations` VALUES (34, '2024-11-16 10:00:00', '2024-11-16 12:00:00', 0, '#f00024', '#f00024', 'Spaying dog', 0, NULL);
INSERT INTO `reservations` VALUES (35, '2024-11-16 12:00:00', '2024-11-16 13:00:00', 0, '#f00a2c', '#f00a2c', 'scaling cat ', 0, NULL);
INSERT INTO `reservations` VALUES (36, '2024-11-18 12:00:00', '2024-11-18 13:00:00', 0, '#3B82F6', '#3B82F6', 'Hair cut+shower ', 1, NULL);
INSERT INTO `reservations` VALUES (37, '2024-11-15 16:00:00', '2024-11-15 16:30:00', 0, '#07f285', '#07f285', 'Consultaion ', 0, NULL);
INSERT INTO `reservations` VALUES (38, '2024-11-15 12:00:00', '2024-11-15 13:00:00', 0, '#0ff563', '#0ff563', 'Consultation kitten ', 0, NULL);
INSERT INTO `reservations` VALUES (39, '2024-11-15 12:30:00', '2024-11-15 13:15:00', 0, '#f6673b', '#f6673b', NULL, 1, NULL);
INSERT INTO `reservations` VALUES (40, '2024-11-18 16:00:00', '2024-11-18 17:00:00', 0, '#3B82F6', '#3B82F6', 'cat shower 78909139 ', 0, NULL);
INSERT INTO `reservations` VALUES (41, '2024-11-18 13:00:00', '2024-11-18 14:00:00', 0, '#3B82F6', '#3B82F6', 'shower bichon ', 0, 40);
INSERT INTO `reservations` VALUES (42, '2024-11-18 15:00:00', '2024-11-18 16:00:00', 0, '#3B82F6', '#3B82F6', '71234966 Myriam ', 0, NULL);
INSERT INTO `reservations` VALUES (43, '2024-11-20 10:30:00', '2024-11-20 11:30:00', 0, '#3B82F6', '#3B82F6', 'cat shower 70291413 karim sabbah ', 0, NULL);
INSERT INTO `reservations` VALUES (44, '2024-12-02 11:00:00', '2024-12-02 12:00:00', 0, '#3B82F6', '#3B82F6', 'cat shower', 0, 44);
INSERT INTO `reservations` VALUES (45, '2024-12-02 13:00:00', '2024-12-02 14:00:00', 0, '#3B82F6', '#3B82F6', 'rania al arab haircut + shower cat 03607043', 0, NULL);
INSERT INTO `reservations` VALUES (46, '2024-12-02 14:30:00', '2024-12-02 15:30:00', 0, '#3B82F6', '#3B82F6', '03019345 houmam moussa', 0, NULL);
INSERT INTO `reservations` VALUES (47, '2024-12-04 13:00:00', '2024-12-04 13:30:00', 0, '#3B82F6', '#3B82F6', 'hassan jaber ', 1, NULL);
INSERT INTO `reservations` VALUES (48, '2024-12-04 10:00:00', '2024-12-04 11:30:00', 0, '#3B82F6', '#3B82F6', 'amany moukalled shower dog', 0, NULL);
INSERT INTO `reservations` VALUES (49, '2024-12-04 12:00:00', '2024-12-04 13:00:00', 0, '#3B82F6', '#3B82F6', 'zeina shower + grooming bichon ', 0, NULL);
INSERT INTO `reservations` VALUES (50, '2024-12-06 11:00:00', '2024-12-06 12:00:00', 0, '#f70f32', '#f70f32', 'lea cat castration ', 0, NULL);
INSERT INTO `reservations` VALUES (51, '2024-12-04 14:00:00', '2024-12-04 15:00:00', 0, '#3B82F6', '#3B82F6', 'Rami 03435847 shower cat ', 1, NULL);
INSERT INTO `reservations` VALUES (52, '2024-12-05 10:00:00', '2024-12-05 12:00:00', 0, '#eb0e2f', '#eb0e2f', 'spaying dog soha', 0, NULL);
INSERT INTO `reservations` VALUES (53, '2024-12-06 11:00:00', '2024-12-06 12:00:00', 0, '#3B82F6', '#3B82F6', '76000318 mustafa brahim', 0, NULL);
INSERT INTO `reservations` VALUES (54, '2024-12-06 12:00:00', '2024-12-06 13:00:00', 0, '#3B82F6', '#3B82F6', 'medical shower cat', 0, 46);
INSERT INTO `reservations` VALUES (55, '2024-12-09 12:00:00', '2024-12-09 13:00:00', 0, '#3B82F6', '#3B82F6', 'shower cat', 0, 45);
INSERT INTO `reservations` VALUES (56, '2024-12-12 14:00:00', '2024-12-12 15:00:00', 0, '#3bf641', '#3bf641', 'Amir Hamze ', 0, NULL);
COMMIT;

-- ----------------------------
-- Table structure for return_order_items
-- ----------------------------
DROP TABLE IF EXISTS `return_order_items`;
CREATE TABLE `return_order_items` (
  `order_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `unit_cost` decimal(10,2) NOT NULL,
  `price_type` enum('unit_price_usd','whole_price_usd','grandwhole_price_usd','latest') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_item_id`),
  KEY `return_order_items_order_id` (`order_id`),
  KEY `return_order_items_product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Table structure for return_orders
-- ----------------------------
DROP TABLE IF EXISTS `return_orders`;
CREATE TABLE `return_orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `journal_voucher_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total_amount` decimal(10,2) NOT NULL,
  `total_cost` decimal(10,2) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `return_customer_id` (`customer_id`),
  KEY `return_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Table structure for sales_order_items
-- ----------------------------
DROP TABLE IF EXISTS `sales_order_items`;
CREATE TABLE `sales_order_items` (
  `order_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `unit_cost` decimal(10,2) DEFAULT NULL,
  `price_type` enum('unit_price_usd','whole_price_usd','grandwhole_price_usd','latest') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sales_order_items
-- ----------------------------
BEGIN;
INSERT INTO `sales_order_items` VALUES (4, 3, 2, 1, 40.00, 40.00, 30.00, NULL, 0);
INSERT INTO `sales_order_items` VALUES (7, 6, 2, 1, 100.00, 100.00, 30.00, NULL, 0);
INSERT INTO `sales_order_items` VALUES (8, 7, 1, 1, 20.00, 20.00, 15.00, NULL, 0);
INSERT INTO `sales_order_items` VALUES (10, 8, 1, 1, 20.00, 20.00, 100.00, NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for sales_orders
-- ----------------------------
DROP TABLE IF EXISTS `sales_orders`;
CREATE TABLE `sales_orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `journal_voucher_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `total_cost` decimal(10,2) DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `exchange_rate` decimal(20,2) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sales_orders
-- ----------------------------
BEGIN;
INSERT INTO `sales_orders` VALUES (3, 'INV1002', 4, 1, '2024-12-23 14:40:35', 30.00, 40.00, 90000.00, 0);
INSERT INTO `sales_orders` VALUES (6, 'INV1003', 9, 1, '2024-12-24 12:36:09', 30.00, 100.00, 90000.00, 0);
INSERT INTO `sales_orders` VALUES (7, 'INV1004', 10, 1, '2024-12-24 12:44:40', 15.00, 20.00, 90000.00, 0);
INSERT INTO `sales_orders` VALUES (8, 'INV1005', NULL, NULL, '2024-12-24 13:56:00', 100.00, 20.00, 90000.00, 0);
COMMIT;

-- ----------------------------
-- Table structure for settings
-- ----------------------------
DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `address_2` text COLLATE utf8mb4_unicode_ci,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for units_of_measure
-- ----------------------------
DROP TABLE IF EXISTS `units_of_measure`;
CREATE TABLE `units_of_measure` (
  `unit_id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `unit_abbreviation` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of units_of_measure
-- ----------------------------
BEGIN;
INSERT INTO `units_of_measure` VALUES (1, 'unit', 'unit', 0);
INSERT INTO `units_of_measure` VALUES (3, 'Bags', 'bg', 0);
INSERT INTO `units_of_measure` VALUES (4, 'test', 'ts', 1);
INSERT INTO `units_of_measure` VALUES (5, 'asdf', 'as', 1);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` enum('admin','user') NOT NULL DEFAULT 'user',
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `edit_pets` tinyint(1) NOT NULL DEFAULT '0',
  `show_stock` tinyint(1) NOT NULL DEFAULT '0',
  `show_cost` tinyint(1) NOT NULL DEFAULT '0',
  `edit_invoice` tinyint(1) NOT NULL DEFAULT '0',
  `delete_invoice` tinyint(1) NOT NULL DEFAULT '0',
  `show_reports` tinyint(1) NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (7, 'admin', '$2a$10$QmR5EBArlKV8Gd7Rh3mEJOm/xvVMbLq8nyVpfotKSX0ZINskrXArW', 'admin', 'admin', 'admin', '2024-12-24 13:10:58', 1, 1, 1, 1, 1, 1, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
