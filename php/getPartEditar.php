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
 
$recibidos = $_GET["idPartEditar"];

$partAEditar = json_decode($recibidos);

$sqlPartida = "SELECT p.partida_id, p.partida_nivel, p.partida_fecha, p.partida_estado, p.partida_observ, p.escenario_id, jp.jugador_id, jp.es_master ";
$sqlPartida .= "FROM partida p INNER JOIN jugador_partida jp ON p.partida_id = jp.partida_id ";
$sqlPartida .= "WHERE p.partida_id ='".$partAEditar."' AND jp.partida_id ='".$partAEditar."'"; 



// echo $sqlPartida;

$partEditable = mysqli_query($conexion, $sqlPartida) or die(mysqli_error($conexion));

$datos = [];

if ($partEditable){ // Si hay resultados

    while ($fila = mysqli_fetch_array($partEditable)) {
       // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
}


// echo json_encode($partEditable);
// echo $sqlPartida;

mysqli_close($conexion);

// Generar la respuesta y la mandamos
header('Content-Type: application/json');

echo json_encode($datos);
?>
