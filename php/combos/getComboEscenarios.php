<?php
    // Configuración BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "juego_rol";
    $usuario   = "root";
    $password  = "";

    // Creamos la conexión al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "SELECT escenario_id, escenario_nombre, escenario_tipo, escenario_nivel FROM escenario";
    $resultados = mysqli_query($conexion, $sql);

    $datos = [];

    while($fila = mysqli_fetch_array($resultados))
        {
            $datos[] = $fila;
        }

    echo json_encode($datos);

    mysqli_close($conexion);
?>