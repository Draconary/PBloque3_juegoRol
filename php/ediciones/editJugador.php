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
$aEditar= $_POST["perfilEditar"];


// Consulta SQL para editar los datos de los jugadores.
// (jugador_nombre, jugador_nick, jugador_email, jugador_password, jugador_estado)
$cadEdit = "UPDATE jugador SET jugador_nombre='".$nombre."',jugador_nick='".$nick."',";
$cadEdit.= " jugador_email='".$correo."', jugador_password='".$contrasena."', jugador_estado='".$estado."'";
$cadEdit.= " WHERE jugador_nick='".$aEditar."';";

// echo $cadEdit;

$consulta = mysqli_query($conexion, $cadEdit);

if ($consulta){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "\nPerfil editado correctamente";
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en la edición del perfil: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);


?>