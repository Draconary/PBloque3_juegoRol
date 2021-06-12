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


// Consulta SQL para obtener los datos de los escenarios
$sqlBuscEscenario = "SELECT e.escenario_nombre, e.escenario_tipo, e.escenario_nivel, e.escenario_observ";
$sqlBuscEscenario.= " FROM escenario e WHERE true";

// if($_POST["tipoEscBuscar"] != ""){
//     $tipoEscenario = $_POST["nomPersonajeBuscar"];//nombre a buscar

//     $sqlBuscEscenario.= " AND p.personaje_nombre LIKE '%".tipoEscenario."%'";
// }

if($_POST["tipoEscBuscar"] != "" && $_POST["tipoEscBuscar"] != "0"){
    $tipoEscenario = $_POST["tipoEscBuscar"];//tipo de escenario a buscar
    $escenario = explode(",", $tipoEscenario);
    $escenarioBuscar = implode("', '", $escenario);
    
    
    $sqlBuscEscenario.= " AND e.escenario_tipo IN ('$escenarioBuscar')";
}

if($_POST["nivMinEscBusc"] != ""){
    $nivelMinimo = $_POST["nivMinEscBusc"];//nivel mínimo a buscar

    $sqlBuscEscenario.= " AND e.escenario_nivel >= '$nivelMinimo'";
}

if($_POST["nivMaxEscBusc"] != ""){
    $nivelMaximo = $_POST["nivMaxEscBusc"];//nivel máximo a buscar

    $sqlBuscEscenario.= " AND e.escenario_nivel <= '$nivelMaximo'";
}

if($_POST["nivMinEscBusc"] != "" && $_POST["nivMaxEscBusc"] != ""){
    $nivelMinimo = $_POST["nivMinEscBusc"];//nivel mínimo a buscar
    $nivelMaximo = $_POST["nivMaxEscBusc"];//nivel máximo a buscar

    $sqlBuscEscenario.= " AND e.escenario_nivel BETWEEN '$nivelMinimo' AND '$nivelMaximo'";
}

if($_POST["usoEscBusc"] != ""){
    $csUsoBuscar = $_POST["usoEscBusc"];
    if($csUsoBuscar=="uso"){
        //Con uso
        $sqlBuscEscenario.= " AND e.escenario_id IN (SELECT p.escenario_id FROM partida p)";
    }
    else if ($csUsoBuscar=="noUso"){
        //Sin uso
        $sqlBuscEscenario.= " AND e.escenario_id NOT IN (SELECT p.escenario_id FROM partida p)";
    }
}

if($_POST["ordEscBusc"] != ""){
    $ordenarEscenario = $_POST["ordEscBusc"];//ordenación de la búsqueda
    $sqlBuscEscenario.= " ORDER BY $ordenarEscenario";

}

$resultados = mysqli_query($conexion, $sqlBuscEscenario) or die(mysqli_error($conexion));

    $XML ='<?xml version="1.0" encoding="UTF-8"?>';
    $XML .='<datos>';
    
    while ($fila = mysqli_fetch_array($resultados)) {
        $XML .='<escenario>';
            $XML .='<escenario_nombre>'.$fila[0].'</escenario_nombre>';
            $XML .='<escenario_tipo>'.$fila[1].'</escenario_tipo>';
            $XML .='<escenario_nivel>'.$fila[2].'</escenario_nivel>';
            $XML .='<escenario_observ>'.$fila[3].'</escenario_observ>';
        $XML .='</escenario>';
    }
    
    $XML .='</datos>';

    // Cabecera de respuesta indicando que el contenido de la respuesta es XML
    header("Content-Type: text/xml");
    // Para que el navegador no haga cache de los datos devueltos por la página PHP.
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    
    echo $XML;
    
    // echo $sqlBuscEscenario;
    
    mysqli_close($conexion);
?>