-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2020 at 06:48 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_lab2`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `description`) VALUES
(0, 'Mechanical Engineering', 'Branch that combines engineering physics and mathematics principles with materials science'),
(1, 'Architectural Engineering', ' Is an engineering discipline that deals with the technological aspects and multi-disciplinary approach to planning, design, construction and operation'),
(2, 'Chemical Engineering', ' Chemical engineering is a branch of engineering which deals with the study of design and operation of chemical plants and methods of improving production'),
(3, 'Computer Engineering', 'Focuses on how to design, integrate, and manage complex systems over their life cycles'),
(4, 'Electrical Engineering', 'Is an engineering discipline concerned with the study, design and application of equipment, devices and systems which use electricity, electronics, and electromagnetism.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(250) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(400) DEFAULT NULL,
  `registration_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `name`, `password`, `registration_date`) VALUES
(41, 'ahmed@gmail.com', 'ahmed', 'f5bb0c8de146c67b44babbf4e6584cc0', '2020-12-25'),
(42, 'mohmed@gmail.com', 'mohmed', 'f5bb0c8de146c67b44babbf4e6584cc0', '2020-12-25'),
(44, 'akram@gmail.com', 'akram', '833a64b4035587559090527fa238026d', '2020-12-25'),
(45, 'kamal@gmail.com', 'kamal', 'f5bb0c8de146c67b44babbf4e6584cc0', '2020-12-25'),
(46, 'hussen@gmail.com', 'hussen', '0fbe663c017e51738b24f685bbe25ccb', '2020-12-25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
