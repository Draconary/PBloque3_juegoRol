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

// Consulta SQL para obtener los datos de los jugadores.
$sqlBuscJugador = "SELECT j.jugador_id, j.jugador_nombre, j.jugador_nick, j.jugador_email, j.jugador_estado FROM jugador j";
$sqlBuscJugador .= " WHERE true";

//Si se ha escrito nombre a buscar
if(isset($_POST["nomBuscarJugador"])){
    $nombreBuscar = $_POST["nomBuscarJugador"];
    $sqlBuscJugador.= " AND j.jugador_nombre LIKE '%".$nombreBuscar."%'";
}

//Si se ha escrito nick a buscar
if(isset($_POST["nickBuscarJugador"])){
    $nickBuscar = $_POST["nickBuscarJugador"];
    $sqlBuscJugador.= " AND j.jugador_nick LIKE '%".$nickBuscar."%'";
}

//Si se ha marcado algún estado
if(isset($_POST["radioBuscarEstJugador"])){
    $estadoBuscar = $_POST["radioBuscarEstJugador"];
    $sqlBuscJugador.= " AND j.jugador_estado = '".$estadoBuscar."'";
}

//Si se ha marcado con/sin partida
if(isset($_POST["radioBuscJugPart"])){
    $csPartidaBuscar = $_POST["radioBuscJugPart"];
    if($csPartidaBuscar="conPartida"){
        //Con partida
        $sqlBuscJugador.= " AND j.jugador_id IN (SELECT jp.jugador_id FROM jugador_partida jp)";
    }
    else{
        //Sin partida
        $sqlBuscJugador.= " AND j.jugador_id NOT IN (SELECT jp.jugador_id FROM jugador_partida jp)";
    }
}

//Si se ha marcado forma de ordenación
if(isset($_POST["radioOrdenarJugador"])){
    $ordenBuscar = $_POST["radioOrdenarJugador"];
    $sqlBuscJugador.= " ORDER BY $ordenBuscar";

    // if($ordenBuscar="nombre"){
    //     //Por nombre
    //     $sqlBuscJugador.= " ORDER BY j.jugador_nombre";
    // }
    // else{
    //     //Por nick
    //     $sqlBuscJugador.= " ORDER BY j.jugador_nick";
    // }
}

//echo json_encode($sqlBuscJugador);

$resultados = mysqli_query($conexion, $sqlBuscJugador) or die(mysqli_error($conexion));
 
if ($resultados){ // Si hay resultados
 
    $jugEncontrado = [];
 
    while ($filaJug = mysqli_fetch_array($resultados)) {
       // Almacenamos en un array los jugadores encontrados
        $jugEncontrado[] = $filaJug;
    }
}
 
mysqli_close($conexion);
 
enviarResultados($resultados, $jugEncontrado, $conexion);
 
function enviarResultados($resultados, $jugEncontrado, $conexion){
    // Generamos la respuesta
    header('Content-Type: application/json');
 
    if ($resultados )
        {
            $respuesta["error"] = 0;
            $respuesta["mensaje"] = "Jugadores encontrados"; 
            $respuesta["jugador"] = $jugEncontrado;
        } 
    else 
        {
            $respuesta["error"] = 1;
            $respuesta["mensaje"] = "Error en la búsqueda de jugador: ".mysqli_error($conexion);
            $respuesta["jugador"] = [];
        }
 
    echo json_encode($respuesta);
}
?>
