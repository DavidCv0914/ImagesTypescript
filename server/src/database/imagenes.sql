-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2023 a las 04:54:27
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `imagenes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `create_img` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `title`, `description`, `img`, `create_img`) VALUES
(1, 'caballo', 'los caballosson mi pasion', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682345215/defaults/Fotografo/6_wz1ogd.png', '2023-04-30 17:30:13'),
(3, 'rinoceronte', 'que bello animal', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682345216/defaults/Fotografo/9_x3uide.png', '2023-04-30 21:47:24'),
(4, 'comida', 'que monton de comida', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1676555418/cld-sample-4.jpg', '2023-04-30 21:47:57'),
(6, 'impact', 'Me encanta genshin', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1681909977/posts/nucxuhwm1a6i7j6txb8n.jpg', '2023-05-01 03:31:17'),
(7, 'anime', 'Me encanta sudar ', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1680804429/Images%20Chat/nkd06rgj2xa7siwhj1td.jpg', '2023-05-01 03:35:10'),
(8, 'Android', 'Me encanta kotlin y la programacion para moviles', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1680804133/Images%20Chat/len6rvkxpiya36sr9yks.png', '2023-05-01 04:23:07'),
(13, 'Andrew Garfield', 'el mejor spider man', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682957001/674442_alo8nw.jpg', '2023-05-01 16:03:45'),
(14, 'Miles Morales', 'spider-vers', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682957978/quie-n-es-miles-morales-spiderman-un-nuevo-universo-1545383015_ppxieh.jpg', '2023-05-01 16:21:10'),
(15, 'Elie', 'the last of us', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682958214/the_last_of_us_part_ii_ellie_lbjxdk.webp', '2023-05-01 16:24:02'),
(16, 'Vi', 'mi patrona', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682958337/missbricosplay_en_su_propia_versixn_de_vi_de_arcanex_la_serie_de_netflix.jpg_1902800913_mwobok.webp', '2023-05-01 16:26:20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
