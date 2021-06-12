<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "juego_rol";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");
mysqli_set_charset($conexion,"utf8");

$nombre = $_POST["nombJugador"];
$nick = $_POST["nickJugador"];
$correo = $_POST["mailJugador"];
$contrasena = $_POST["contrasenaJugador"];
$estado= $_POST["estadoJugador"];


// Consulta SQL para obtener los datos de los centros.
$cadenaInsertar = "INSERT INTO jugador (jugador_nombre, jugador_nick, jugador_email, jugador_password, jugador_estado) ";
$cadenaInsertar.= "VALUES ('$nombre', '$nick', '$correo', '$contrasena', '$estado');";

$consulta = mysqli_query($conexion, $cadenaInsertar);

if ($consulta){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "\nPerfil creado correctamente"; 
    $respuesta["mensaje"] .= "\nDiviértete, ".$nick; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en la creación del perfil: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);


?>