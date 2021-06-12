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
 


$recibidos = $_POST["nick"];

$nickAEditar = json_decode($recibidos);

$cadenaEditar = "SELECT jugador_nombre, jugador_nick, jugador_email, jugador_password, jugador_estado FROM jugador ";
$cadenaEditar .= "WHERE jugador_nick ='".$nickAEditar."'"; 

// echo $cadenaEditar;

$perfilEditable = mysqli_query($conexion, $cadenaEditar) or die(mysqli_error($conexion));

$datos = [];

if ($perfilEditable){ // Si hay resultados

    while ($fila = mysqli_fetch_array($perfilEditable)) {
       // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
}


// echo json_encode($perfilEditable);

mysqli_close($conexion);

// Generar la respuesta y la mandamos
header('Content-Type: application/json');

echo json_encode($datos);
?>
