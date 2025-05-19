-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2025 at 04:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--
CREATE DATABASE IF NOT EXISTS `notes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `notes`;

-- --------------------------------------------------------

--
-- Table structure for table `note_details`
--

CREATE TABLE `note_details` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `contents` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `note_details`
--

INSERT INTO `note_details` (`id`, `title`, `contents`, `created_at`) VALUES
(1, 'Buy Course', 'Buy course from Mosh', '2025-05-19 09:38:05'),
(2, 'Create database', 'Create a new MySQL database', '2025-05-19 09:38:50'),
(3, 'Node server', 'Create Node JS Server', '2025-05-19 09:39:20'),
(4, 'Containerize Process', 'Use Docker to Containerize DB and Backend', '2025-05-19 09:40:00'),
(5, 'Test Title', 'Test Content', '2025-05-19 09:55:50'),
(6, 'Test Title', 'Test Content', '2025-05-19 09:56:27'),
(7, 'Docker test 2', 'this should be added to the database', '2025-05-19 10:04:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `note_details`
--
ALTER TABLE `note_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `note_details`
--
ALTER TABLE `note_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
