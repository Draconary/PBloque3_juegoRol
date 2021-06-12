-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2021 a las 08:18:43
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juego_rol`
--
CREATE DATABASE IF NOT EXISTS `juego_rol` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `juego_rol`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arma`
--

CREATE TABLE `arma` (
  `arma_id` int(11) NOT NULL,
  `arma_nombre` varchar(20) NOT NULL,
  `arma_ataque` int(11) NOT NULL,
  `arma_defensa` int(11) NOT NULL,
  `arma_tipo` varchar(15) NOT NULL,
  `arma_observ` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `arma`
--

INSERT INTO `arma` (`arma_id`, `arma_nombre`, `arma_ataque`, `arma_defensa`, `arma_tipo`, `arma_observ`) VALUES
(1, 'Puñal mellado', 1, 0, 'Cortante', 'Puñal pequeño con escasos valores de ataque y defensa. Arma inicial'),
(2, ' Arco corto antiguo', 1, 0, 'A distancia', 'Arco corto con poco ataque y ninguna defensa.'),
(3, 'Martillo pequeño', 2, 0, 'Contusión', 'Martillo pequeño con manchas de óxido con poco ataque y ninguna defensa'),
(4, 'Espada oxidada', 1, 1, 'Cortante', 'Espada oxidada que conoció tiempos mejores con valores escasos de ataque y defensa'),
(5, 'Lanza astillada', 1, 1, 'Perforación', 'Lanza astillada y endeble que puede romperse fácilmente'),
(6, 'Puñal mejorado', 2, 1, 'Cortante', 'Puñal mellado tras ser restaurado y afilado'),
(7, 'Arco corto tensado', 2, 0, 'A distancia', 'Arco corto antiguo tras ser tensado de nuevo'),
(8, 'Martillo restaurado', 3, 1, 'Contusión', 'Martillo pequeño tras ser restaurado y limpiado'),
(9, 'Espada noble', 3, 2, 'Cortante', 'Espada oxidada tras ser restaurada y afilada de nuevo'),
(10, 'Lanza de combate', 2, 2, 'Perforación', 'Lanza astillada tras ser restaurada y mejorada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escenario`
--

CREATE TABLE `escenario` (
  `escenario_id` int(11) NOT NULL,
  `escenario_nombre` varchar(30) NOT NULL,
  `escenario_tipo` varchar(10) NOT NULL,
  `escenario_nivel` int(11) NOT NULL,
  `escenario_observ` varchar(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `escenario`
--

INSERT INTO `escenario` (`escenario_id`, `escenario_nombre`, `escenario_tipo`, `escenario_nivel`, `escenario_observ`) VALUES
(1, 'El primer obstáculo', 'Urbano', 1, 'Escenario urbano al aire libre de nivel 1, bueno para comenzar una aventura. Con pocos enemigos'),
(2, 'Una encrucijada en el camino', 'Bosque', 2, 'Escenario boscoso de nivel 2. Tiene pocos enemigos'),
(3, 'Tengo un mal presentimiento', 'Cueva', 2, 'Escenario interior de cueva. De nivel 2. Hay un buen número de enemigos de nivel 2 y 3'),
(4, 'En la boca del lobo', 'Cueva', 3, 'Escenario interior de cueva de nivel 3. Primer enfrentamiento con jefe de nivel 4'),
(5, 'Dentro del laberinto', 'Laberinto', 4, 'Escenario laberíntico en unas alcantarillas. Plagado de enemigos de nivel 5'),
(6, 'Estamos rodeados', 'Urbano', 5, 'Escenario urbano exterior de nivel 5. Comienzan a aparecer enemigos de nivel 6'),
(7, 'Escondiendose del enemigo', 'Laberinto', 6, 'Escenario laberíntico dentro de un edificio. Plagado de enemigos de nivel 7'),
(8, 'La batalla final', 'Urbano', 8, 'Escenario final. Exterior de una torre. Algunos enemigos de nivel 8, combate final con Jefe de nivel 9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `jugador_id` int(11) NOT NULL,
  `jugador_nombre` varchar(20) NOT NULL,
  `jugador_nick` varchar(20) NOT NULL,
  `jugador_email` varchar(25) NOT NULL,
  `jugador_password` varchar(12) NOT NULL,
  `jugador_estado` enum('Activo','Inactivo') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`jugador_id`, `jugador_nombre`, `jugador_nick`, `jugador_email`, `jugador_password`, `jugador_estado`) VALUES
(1, 'Daniel Ruiz', 'Draconary', 'dan29dharma@gmail.com', 'Dani1234', 'Activo'),
(2, 'Javier de la Fuente', 'Zaker Eram', 'javi_wyrmfoe@gmail.com', 'Javi5678', 'Activo'),
(3, 'Antonio Catalán', 'Nalatac', 'master_herrero@gmail.com', 'Cata9123', 'Activo'),
(4, 'Nanda Ruiz', 'Veryariel', 'veryariel@gmail.com', 'Nanda1138', 'Activo'),
(5, 'Manuel Fuentes', 'Panda', 'panda@holored.com', 'Panda9876', 'Activo'),
(6, 'Bea López', 'Beiss Offe', 'bea_burger@gmail.com', 'Bea4321', 'Activo'),
(7, 'May Díaz', 'May_Jade', 'may_force@gmail.com', 'May6547', 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador_partida`
--

CREATE TABLE `jugador_partida` (
  `jugador_id` int(11) NOT NULL,
  `partida_id` int(11) NOT NULL,
  `es_master` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `jugador_partida`
--

INSERT INTO `jugador_partida` (`jugador_id`, `partida_id`, `es_master`) VALUES
(1, 1, 0),
(1, 2, 0),
(1, 7, 1),
(1, 19, 1),
(2, 1, 1),
(2, 2, 0),
(2, 4, 1),
(2, 5, 1),
(2, 7, 0),
(3, 2, 0),
(3, 7, 0),
(3, 9, 1),
(3, 19, 0),
(4, 1, 0),
(4, 2, 0),
(4, 7, 0),
(4, 19, 0),
(5, 1, 0),
(5, 7, 0),
(5, 19, 0),
(6, 2, 1),
(6, 3, 1),
(6, 7, 0),
(6, 8, 1),
(6, 19, 0),
(7, 1, 0),
(7, 6, 1),
(7, 19, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `partida_id` int(11) NOT NULL,
  `partida_fecha` date NOT NULL,
  `partida_nivel` int(11) NOT NULL,
  `partida_observ` varchar(120) NOT NULL,
  `escenario_id` int(11) NOT NULL,
  `partida_estado` enum('Iniciada','Terminada','Inactiva') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`partida_id`, `partida_fecha`, `partida_nivel`, `partida_observ`, `escenario_id`, `partida_estado`) VALUES
(1, '2021-03-31', 1, 'Comienzo de la aventura. Nuestros protagonistas se unen por primera vez', 1, 'Iniciada'),
(2, '2021-04-09', 2, 'Tras sobrevivir al comienzo de la aventura, nuestros héroes encuentran las primeras dificultades', 2, 'Inactiva'),
(3, '2021-04-10', 2, 'Los personajes no han conseguido terminar aún el escenario. Se añaden nuevos héroes', 2, 'Inactiva'),
(4, '2021-04-18', 3, 'Los protagonistas llegan a la cueva', 3, 'Inactiva'),
(5, '2021-04-24', 3, 'Comienzan las complicaciones. Primer enfrentamiento con un jefe de nivel. Posibilidad de muerte y entrada de personajes', 4, 'Inactiva'),
(6, '2021-04-30', 4, 'Tras la salida y entrada de nuevos personajes continúa la aventura dentro de un laberinto', 5, 'Inactiva'),
(7, '2021-05-24', 5, 'Tras salir del laberinto aparecen nuevos enemigos', 6, 'Inactiva'),
(8, '2021-05-07', 6, 'Los protagonistas entran en otro laberinto. Nuevos enemigos', 7, 'Inactiva'),
(9, '2021-05-08', 8, 'Final del camino, todos los héroes se unen de nuevo. ¿Conseguirán vencer al enemigo final?', 8, 'Inactiva'),
(19, '2021-05-31', 2, 'Prueba editado', 8, 'Inactiva');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

CREATE TABLE `personaje` (
  `personaje_id` int(11) NOT NULL,
  `personaje_nombre` varchar(20) NOT NULL,
  `jugador_id` int(11) NOT NULL,
  `tipo_personaje` varchar(10) NOT NULL,
  `personaje_xp` int(11) NOT NULL,
  `personaje_arma` int(11) NOT NULL,
  `personaje_observ` varchar(120) NOT NULL,
  `personaje_inactivo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personaje`
--

INSERT INTO `personaje` (`personaje_id`, `personaje_nombre`, `jugador_id`, `tipo_personaje`, `personaje_xp`, `personaje_arma`, `personaje_observ`, `personaje_inactivo`) VALUES
(1, 'Heimdall', 1, 'Aventurero', 1, 4, 'Joven aventurero que espera labrarse un nombre en el reino', 0),
(2, 'Zaker Wyrmfoe', 2, 'Bárbaro', 4, 9, 'Bárbaro que ya ha vivido grandes aventuras y está curtido en mil batallas', 0),
(3, 'Oinotna Nalatac', 3, 'Herrero', 2, 3, 'Joven herrero experto en restaurar armas y ducho en combate cuerpo a cuerpo', 0),
(4, 'May Jade', 7, 'Hechicera', 2, 5, 'Hechicera iniciada en ataque y sanación', 0),
(5, 'Pandaman', 5, 'Bardo', 1, 2, 'Escribano que va narrando las historias vividas en tiempos antiguos. Bueno en ataque a distancia', 0),
(6, 'Beiss Offee', 6, 'Sanadora', 3, 10, 'Sanadora experta en combate con lanza', 0),
(7, 'Veryariel ', 4, 'Hechicera', 1, 1, 'Joven aprendiz que espera aprender el arte de la hechicería', 0),
(9, 'Dragonett', 1, 'Bárbaro', 1, 10, 'Luchador picto de más allá del muro', 0),
(10, 'MoabDib', 1, 'Bardo', 1, 7, 'Heredero de la casa Atreides', 0),
(12, 'A eliminar', 1, 'Herrero', 1, 4, 'Prueba Eliminar', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arma`
--
ALTER TABLE `arma`
  ADD PRIMARY KEY (`arma_id`);

--
-- Indices de la tabla `escenario`
--
ALTER TABLE `escenario`
  ADD PRIMARY KEY (`escenario_id`);

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`jugador_id`);

--
-- Indices de la tabla `jugador_partida`
--
ALTER TABLE `jugador_partida`
  ADD PRIMARY KEY (`jugador_id`,`partida_id`),
  ADD KEY `partida_id` (`partida_id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`partida_id`),
  ADD KEY `escenario_id` (`escenario_id`);

--
-- Indices de la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`personaje_id`),
  ADD KEY `jugador_id` (`jugador_id`),
  ADD KEY `personaje_arma` (`personaje_arma`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arma`
--
ALTER TABLE `arma`
  MODIFY `arma_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `escenario`
--
ALTER TABLE `escenario`
  MODIFY `escenario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `jugador`
--
ALTER TABLE `jugador`
  MODIFY `jugador_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `partida_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `personaje`
--
ALTER TABLE `personaje`
  MODIFY `personaje_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `jugador_partida`
--
ALTER TABLE `jugador_partida`
  ADD CONSTRAINT `jugador_partida_ibfk_1` FOREIGN KEY (`jugador_id`) REFERENCES `jugador` (`jugador_id`),
  ADD CONSTRAINT `jugador_partida_ibfk_2` FOREIGN KEY (`partida_id`) REFERENCES `partida` (`partida_id`);

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `partida_ibfk_1` FOREIGN KEY (`escenario_id`) REFERENCES `escenario` (`escenario_id`);

--
-- Filtros para la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD CONSTRAINT `personaje_ibfk_1` FOREIGN KEY (`jugador_id`) REFERENCES `jugador` (`jugador_id`),
  ADD CONSTRAINT `personaje_ibfk_2` FOREIGN KEY (`personaje_arma`) REFERENCES `arma` (`arma_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
