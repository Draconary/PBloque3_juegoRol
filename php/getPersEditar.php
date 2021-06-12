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
 
$recibidos = $_POST["idEditar"];

$perfAEditar = json_decode($recibidos);

$cadenaEditar = "SELECT personaje_id, personaje_nombre, tipo_personaje, personaje_arma, personaje_xp, personaje_observ FROM personaje ";
$cadenaEditar .= "WHERE personaje_id ='".$perfAEditar."'"; 

// echo $cadenaEditar;

$persEditable = mysqli_query($conexion, $cadenaEditar) or die(mysqli_error($conexion));

$datos = [];

if ($persEditable){ // Si hay resultados

    while ($fila = mysqli_fetch_array($persEditable)) {
       // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
}


// echo json_encode($persEditable);
// echo $persEditable;

mysqli_close($conexion);

// Generar la respuesta y la mandamos
header('Content-Type: application/json');

echo json_encode($datos);
?>
