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

    // Recojo los datos de entrada
    $recibidos = $_POST["datosInicio"];

    $jugador = json_decode($recibidos);

    $cadenaInicio = "SELECT jugador_nick, jugador_password FROM jugador WHERE jugador_nick "; 
    $cadenaInicio .= "LIKE '".$jugador->nick."' AND jugador_password LIKE '".$jugador->contrasena."'";

    $consulta = mysqli_query($conexion, $cadenaInicio);

    $resultado = false;

    if($consulta = mysqli_query($conexion, $cadenaInicio))
    {
        if(mysqli_num_rows($consulta) == 0)
            {
                $resultado = false;
            }
        else
            {
                $resultado = true;
            }
    }

    if ($resultado)
        {
            $salida["error"] = 0;
            $salida["mensaje"] = "Sesión iniciada"; 
        } 
    else 
        {
            $salida["error"] = 1;
            $salida["mensaje"] = "Ha habido un error: ".mysqli_error($conexion);
        }

    echo json_encode($salida);

    mysqli_close($conexion);
?>