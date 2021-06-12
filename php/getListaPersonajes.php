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
 


$recibidos = $_GET["nick"];
$nickLogueado = json_decode($recibidos);

$cadenaEditar = "SELECT p.personaje_id, p.personaje_nombre, p.jugador_id, p.tipo_personaje, p.personaje_xp, p.personaje_observ, a.arma_nombre FROM personaje p ";
$cadenaEditar .= "INNER JOIN arma a ON p.personaje_arma = a.arma_id ";
$cadenaEditar .= "WHERE p.jugador_id IN (SELECT j.jugador_id FROM jugador j WHERE j.jugador_nick ='".$nickLogueado ."') AND personaje_inactivo='0'";

// echo $cadenaEditar;

$personajesLogueados = mysqli_query($conexion, $cadenaEditar) or die(mysqli_error($conexion));


$datos = [];

if ($personajesLogueados){ // Si hay resultados

    while ($fila = mysqli_fetch_array($personajesLogueados)) {
       // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
}


// echo json_encode($personajesLogueados);

mysqli_close($conexion);

enviarResultados($personajesLogueados, $datos, $conexion);
 
function enviarResultados($personajesLogueados, $datos, $conexion){
    // Generamos la respuesta
    header('Content-Type: application/json');
 
    if ($personajesLogueados )
        {
            $respuesta["error"] = 0;
            $respuesta["mensaje"] = "Personajes encontrados"; 
            $respuesta["personaje"] = $datos;
        } 
    else 
        {
            $respuesta["error"] = 1;
            $respuesta["mensaje"] = "Error en la búsqueda de personajes: ".mysqli_error($conexion);
            $respuesta["personaje"] = [];
        }
 
    echo json_encode($respuesta);
}
?>
