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

$aEliminar= $_POST["idEliminar"];

// Consulta SQL para eliminar los datos de los personajes.
// (jugador_nombre, jugador_nick, jugador_email, jugador_password, jugador_estado)
$cadEdit = "UPDATE personaje SET personaje_inactivo = '1' WHERE personaje_id=$aEliminar;";

// echo $cadEdit;

$consulta = mysqli_query($conexion, $cadEdit);

if ($consulta){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "\nPersonaje eliminado correctamente";
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en la eliminación del personaje: ".mysqli_error($conexion);
}



echo json_encode($respuesta);

mysqli_close($conexion);


?>