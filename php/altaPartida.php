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
    $datosPartida = $_POST["partidaCrear"];

    //Decodificamos
    $partida = json_decode($datosPartida);

    //---------------------------Insertamos en la tabla PARTIDA---------------------------//
    $sqlPartida = "INSERT INTO partida (partida_fecha, partida_nivel, partida_observ, escenario_id, partida_estado) ";
    $sqlPartida .= "VALUES ('$partida->fecha','$partida->nivel','$partida->descripcion','$partida->escenario','$partida->estado');";
    
    $resultadoPartida = mysqli_query($conexion, $sqlPartida);

    //---------------------------Hayamos el id de la partida insertada---------------------------//
    $sqlIdPartida = "SELECT partida_id FROM partida WHERE partida_fecha ='".$partida->fecha."' AND partida_observ = '".$partida->descripcion."';";
    $resIdPartida = mysqli_query($conexion, $sqlIdPartida);

    $filaIdPartida = mysqli_fetch_array($resIdPartida);

    $idPartida = (int) $filaIdPartida['partida_id'];

    //---------------------------Buscamos el ID del jugador Master---------------------------//

    $sqlMaster = "SELECT jugador_id FROM JUGADOR WHERE jugador_nick ='".$partida->master."';";
    $resIdMaster = mysqli_query($conexion, $sqlMaster);

    $filaIdMaster = mysqli_fetch_array($resIdMaster);

    $idMaster = (int) $filaIdMaster['jugador_id'];
  
    //---------------------------Insertamos en la tabla JUGADOR_PARTIDA---------------------------//

    $jugadores = $partida->jugadores;

    $sqlJugadorPartida = "INSERT INTO jugador_partida (jugador_id, partida_id, es_master) VALUES ";
        foreach($jugadores as $idJugador){   
            $sqlJugadorPartida .= "('$idJugador','$idPartida','0'), ";
        }
        //Insertamos el jugador que es el master
        $sqlJugadorPartida .= "('$idMaster','$idPartida','1'), ";
        //PREGUNTAR SI ES CORRECTO????
        $sqlJugadorPartida = substr($sqlJugadorPartida, 0, strlen($sqlJugadorPartida)-2);
    
    
    $resultadoJugadorPartida = mysqli_query($conexion, $sqlJugadorPartida);

    if ($resultadoPartida && $resultadoJugadorPartida){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Partida creada con éxito"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Ha habido un error en la creación de la partida: ".mysqli_error($conexion);
    }

    echo json_encode($respuesta);

    //echo json_encode($partida);
    

    mysqli_close($conexion);
?>