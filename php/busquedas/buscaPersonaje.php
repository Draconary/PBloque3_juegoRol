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


// Consulta SQL para obtener los datos de los personajes
$sqlBuscPersonaje = "SELECT j.jugador_nombre, p.personaje_nombre, p.tipo_personaje, p.personaje_xp, p.personaje_observ";
$sqlBuscPersonaje.= " FROM personaje p, jugador j WHERE p.jugador_id = j.jugador_id AND personaje_inactivo='0'";

if($_POST["nomPersonajeBuscar"] != ""){
    $nombrePersonaje = $_POST["nomPersonajeBuscar"];//nombre a buscar

    $sqlBuscPersonaje.= " AND p.personaje_nombre LIKE '%".$nombrePersonaje."%'";
}

if($_POST["tipPersonajeBuscar"] != ""){
    $tipoPersonaje = $_POST["tipPersonajeBuscar"];//tipo de personaje a buscar
    $personaje = explode(",", $tipoPersonaje);
    $personajeBuscar = implode("', '", $personaje);
    
    
    $sqlBuscPersonaje.= " AND p.tipo_personaje IN ('$personajeBuscar')";
}

if($_POST["minPersonajeBuscar"] != ""){
    $nivelMinimo = $_POST["minPersonajeBuscar"];//nivel mínimo a buscar

    $sqlBuscPersonaje.= " AND p.personaje_xp >= '$nivelMinimo'";
}

if($_POST["maxPersonajeBuscar"] != ""){
    $nivelMaximo = $_POST["maxPersonajeBuscar"];//nivel máximo a buscar

    $sqlBuscPersonaje.= " AND p.personaje_xp <= '$nivelMaximo'";
}

if($_POST["minPersonajeBuscar"] != "" && $_POST["maxPersonajeBuscar"] != ""){
    $nivelMinimo = $_POST["minPersonajeBuscar"];//nivel mínimo a buscar
    $nivelMaximo = $_POST["maxPersonajeBuscar"];//nivel máximo a buscar

    $sqlBuscPersonaje.= " AND p.personaje_xp BETWEEN '$nivelMinimo' AND '$nivelMaximo'";
}

if($_POST["ordenBuscar"] != ""){
    $ordenarPersonaje = $_POST["ordenBuscar"];//ordenación de la búsqueda
    $sqlBuscPersonaje.= " ORDER BY $ordenarPersonaje";

}

$resultados = mysqli_query($conexion, $sqlBuscPersonaje) or die(mysqli_error($conexion));

    $XML ='<?xml version="1.0" encoding="UTF-8"?>';
    $XML .='<datos>';
    
    while ($fila = mysqli_fetch_array($resultados)) {
        $XML .='<personaje>';
            $XML .='<jugador_nombre>'.$fila[0].'</jugador_nombre>';
            $XML .='<personaje_nombre>'.$fila[1].'</personaje_nombre>';
            $XML .='<tipo_personaje>'.$fila[2].'</tipo_personaje>';
            $XML .='<personaje_xp>'.$fila[3].'</personaje_xp>';
            $XML .='<personaje_observ>'.$fila[4].'</personaje_observ>';
        $XML .='</personaje>';
    }
    
    $XML .='</datos>';

    // Cabecera de respuesta indicando que el contenido de la respuesta es XML
    header("Content-Type: text/xml");
    // Para que el navegador no haga cache de los datos devueltos por la página PHP.
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    
    echo $XML;
    
    // echo $sqlBuscPersonaje;
    
    mysqli_close($conexion);
?>