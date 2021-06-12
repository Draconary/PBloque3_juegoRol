<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "juego_rol";
$usuario   = "root";
$password  = "";

$nombreJugador = $_GET["nomBuscarJugador"];//nombre a buscar
$nickJugador = $_GET["nickBuscarJugador"];//nick a buscar
$estadoJugador = $_GET["radioEstadoJugador"];//estado del jugador a buscar
$conPartida = $_GET["radioBuscJugPart"];//si el jugador a buscar tiene partida
$ordenarJugador = $_GET["radioOrdenarJugador"];//ordenación de la búsqueda

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(enviarResultados(0, [], $conexion));
mysqli_set_charset($conexion,"utf8");

// Consulta SQL para obtener los datos del jugador
$sql = "SELECT * FROM jugador WHERE true";

if(isset($_GET["nomBuscarJugador"])){
    $sql.= "AND jugador_nombre LIKE %.'$nombreJugador'.%";
}

if(isset($_GET["nickBuscarJugador"])){
    $sql.= "AND jugador_nick LIKE %.'$nickJugador'.%";
}

if(isset($_GET["radioEstadoJugador"])){
    $sql.= "AND jugador_estado ='$estadoJugador'";
}

if(isset($_GET["radioBuscJugPart"])){
    if($conPartida == "conPartida"){
        $sql.= "AND jugador_id IN (SELECT jugador_id FROM jugador_partida)";
    }
    else{
        $sql.= "AND jugador_id NOT IN (SELECT jugador_id FROM jugador_partida)";
    }    
}

if(isset($_GET["radioOrdenarJugador"]){
    if($ordenarJugador == "nombre"){
        $sql.="ORDER BY jugador_nombre";
    }
    else{
        $sql.="ORDER BY jugador_nick";
    }   
}

$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

//creamos un array vacío
$datos = [];

if ($resultados){ // Si hay resultados

    while ($fila = mysqli_fetch_array($resultados)) {
       // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
}
mysqli_close($conexion);

// Generar la respuesta y la mandamos
header('Content-Type: application/json');

echo json_encode($datos);
?>