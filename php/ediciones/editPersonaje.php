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

$nombre = $_POST["nombPersonaje"];
$tipo = $_POST["tipoPersonaje"];
$arma = $_POST["armaPersonaje"];
$nivel = $_POST["nivelPersonaje"];
$descrip= $_POST["descrPersonaje"];
$aEditar= $_POST["idPersonaje"];


// Consulta SQL para editar los datos de los jugadores.
// (jugador_nombre, jugador_nick, jugador_email, jugador_password, jugador_estado)
$cadEdit = "UPDATE personaje SET personaje_nombre='".$nombre."', tipo_personaje='".$tipo."',";
$cadEdit.= " personaje_arma='".$arma."', personaje_xp='".$nivel."', personaje_observ='".$descrip."'";
$cadEdit.= " WHERE personaje_id='".$aEditar."';";

// echo $cadEdit;

$consulta = mysqli_query($conexion, $cadEdit);

if ($consulta){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "\nPersonaje editado correctamente";
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en la edición del personaje: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);


?>