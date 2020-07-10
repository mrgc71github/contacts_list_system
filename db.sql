-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-07-2020 a las 05:08:09
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `contacts`
--
CREATE DATABASE IF NOT EXISTS `contacts` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `contacts`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `first_name` varchar(32) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  `last_name` varchar(32) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  `email` varchar(64) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  `contact_number` varchar(16) COLLATE utf8_spanish_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `contacts`
--

INSERT INTO `contacts` (`id`, `first_name`, `last_name`, `email`, `contact_number`) VALUES
(1, 'Annielis', 'Gonzalez', 'annixdc@gmail.co', '02443869962'),
(2, 'Ana', 'Mota', 'motaana0@gmail.com', '+584144776607'),
(3, 'Miguel', 'Gonzalez', 'mrgc71@gmail.com', '+584141445866'),
(4, 'Anita', 'Mota', 'motaana0@gmail.com', '+584144776607'),
(5, 'Ana Luisa', 'Mota Rivas', 'motaana0@gmail.com', '+584144776607'),
(6, 'Jose', 'Gonzalez', 'mrgc71@gmail.com', '+584144776607'),
(7, 'Jose', 'Gonzalez', 'mrgc71@gmail.com', '+584144776607'),
(8, 'susana', 'rivas', 'motaana0@gmail.com', '+584144776607');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `activo`) VALUES
(1, 'mrgc71@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(2, 'motaana0@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
