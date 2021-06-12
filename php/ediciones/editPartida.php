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
    $datosPartida = $_POST["partidaEditar"];
    // extract($_POST);

    $partida = json_decode($datosPartida);

    // (partida_fecha, partida_nivel, partida_observ, escenario_id, partida_estado)
    //---------------------------Actualizamos en la tabla PARTIDA---------------------------//
    $sqlEditPart = "UPDATE partida SET partida_fecha='".$partida->fechaEdit."', partida_nivel='".$partida->nivelEdit."', partida_observ='".$partida->descrEdit."', ";
    $sqlEditPart .= "escenario_id='".$partida->escEdit."', partida_estado='".$partida->estadoEdit."' WHERE partida_id='".$partida->idPartida."';";
    
    $resultPart = mysqli_query($conexion, $sqlEditPart);

    // echo $sqlEditPart;

    //---------------------------Actualizamos en la tabla JUGADOR_PARTIDA---------------------------//

    // Borramos los jugadores de la partida
    $sqlDelJugPart = "DELETE FROM jugador_partida WHERE partida_id='".$partida->idPartida."' AND es_master='0';";

    $resultDel = mysqli_query($conexion, $sqlDelJugPart);

    // echo $sqlDelJugPart;

    // Los insertamos de nuevo
    $jugadores = $partida->jugEdit;

    $sqlEditJugPart = "INSERT INTO jugador_partida (jugador_id, partida_id, es_master) VALUES ";
        foreach($jugadores as $idJugEdit){   
            $sqlEditJugPart .= "('$idJugEdit','$partida->idPartida','0'), ";
        }
        //PREGUNTAR SI ES CORRECTO????
        $sqlEditJugPart = substr($sqlEditJugPart, 0, strlen($sqlEditJugPart)-2);
    
    
    $resultJugPart = mysqli_query($conexion, $sqlEditJugPart);

    // echo $sqlEditJugPart;

    if ($resultPart && $resultJugPart){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Partida editada con éxito"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Ha habido un error en la edición de la partida: ".mysqli_error($conexion);
    }

    echo json_encode($respuesta);

    //echo json_encode($partida);
    

    mysqli_close($conexion);
?>