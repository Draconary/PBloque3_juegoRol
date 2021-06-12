<?php
    // Configuración BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "juego_rol";
    $usuario   = "root";
    $password  = "";
    
    $nickMaster = $_REQUEST["nick"];//El nick del master el nick de la persona logueada que crea la partida

    // Creamos la conexión al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "SELECT DISTINCT jugador_id, jugador_nombre, jugador_nick FROM jugador WHERE jugador_estado = 'Activo'";
    $sql .= " AND jugador_nick NOT LIKE '$nickMaster'";
    $resultados = mysqli_query($conexion, $sql);

    $datos = [];

    while($fila = mysqli_fetch_array($resultados))
        {
            $datos[] = $fila;
        }

    echo json_encode($datos);

    mysqli_close($conexion);
?>