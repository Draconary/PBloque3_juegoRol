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

    //Recogemos
    extract($_POST);

    // echo json_encode($_POST);

    //---------------------------Buscamos el ID del jugador Logueado---------------------------//

    $sqlIdLogueado = "SELECT jugador_id FROM JUGADOR WHERE jugador_nick ='".$nickJugPersonajeCrear."';";
    $resIdLogueado = mysqli_query($conexion, $sqlIdLogueado);

    $filaIdLogueado = mysqli_fetch_array($resIdLogueado);

    $idLogueado = (int) $filaIdLogueado['jugador_id'];

    // echo json_encode($idLogueado);

    //---------------------------Insertamos en la tabla PERSONAJE---------------------------//
    $sqlPersonaje = "INSERT INTO personaje (personaje_nombre, jugador_id, tipo_personaje, personaje_xp, personaje_arma, personaje_observ) ";
    $sqlPersonaje .= "VALUES ('$nombPersonajeCrear','$idLogueado','$tipoPersonajeCrear','1','$armaPersonajeCrear','$descrPersonajeCrear');";
    
    $resultadoPersonaje = mysqli_query($conexion, $sqlPersonaje);


    if ($resultadoPersonaje){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Personaje creado con éxito"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Ha habido un error en la creación de su personaje: ".mysqli_error($conexion);
    }

    echo json_encode($respuesta);

    mysqli_close($conexion);
?>