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
extract($_POST);

// Consulta SQL para obtener los datos de las partidas.
$sqlBuscPartida = "SELECT p.partida_id, p.partida_fecha, p.partida_nivel, p.partida_observ, p.partida_estado, e.escenario_nombre ";
$sqlBuscPartida .= "FROM escenario e, partida p ";
$sqlBuscPartida .= "where p.escenario_id = e.escenario_id";

//Si se ha elegido niveles de partida
if($nivMinPartBusc != "" && $nivMaxPartBusc != ""){
    // $ataqueMinimo = $_POST["minAtqBuscar"];//ataque mínimo a buscar
    // $ataqueMaximo = $_POST["maxAtqBuscar"];//ataque máximo a buscar

    $sqlBuscPartida.= " AND p.partida_nivel BETWEEN '$nivMinPartBusc' AND '$nivMaxPartBusc'";
}

if($nivMinPartBusc != ""){

    $sqlBuscPartida.= " AND p.partida_nivel >= '$nivMinPartBusc'";
}

if($nivMaxPartBusc != ""){

    $sqlBuscPartida.= " AND p.partida_nivel <= '$nivMaxPartBusc'";
}

//Si se ha elegido escenario
if($nombEscBuscar != "0"){
    $sqlBuscPartida.= " AND p.escenario_id = '$nombEscBuscar'";
}

//Si se ha elegido fecha
if($fecMinPartBusc != "" && $fecMaxPartBusc != ""){

    $sqlBuscPartida.= " AND p.partida_fecha BETWEEN '$fecMinPartBusc' AND '$fecMaxPartBusc'";
}


//Si se ha elegido master a buscar
if($masterPartBusc != ""){
    $sqlBuscPartida.= " AND p.partida_id IN (SELECT pj.partida_id from jugador_partida pj where pj.es_master = 1 and pj.jugador_id IN (";
    $sqlBuscPartida.= "SELECT j.jugador_id from jugador j where j.jugador_nick LIKE ('%".$masterPartBusc."%')))";
}

//Si se ha marcado orden
if($ordenPartBusc != ""){
    $sqlBuscPartida.= " ORDER BY $ordenPartBusc";
}

$resultPartida = mysqli_query($conexion, $sqlBuscPartida) or die(mysqli_error($conexion));

$filaPartida = mysqli_fetch_assoc($resultPartida);


if($filaPartida != null)
    {

        $tabla = "<table border=2 class='tabla'>";
        $tabla .= "<tr><th colspan='7' style='text-align:center'>Partidas Encontradas</th></tr>";
        $tabla .= "<tr><th>Nivel</th><th>Fecha</th><th>Escenario</th><th>Jugadores</th>";
        $tabla .= "<th>Master</th><th>Descripción</th><th>Estado</th></tr>";

        do{
                extract($filaPartida);

                $tabla .= "<tr><td>$partida_nivel</td>";
                $tabla .= "<td>$partida_fecha</td>";
                $tabla .= "<td>$escenario_nombre</td>";

                // Obtenemos Jugadores
                    $sqlBuscJugad= "SELECT j.jugador_nombre, j.jugador_nick FROM jugador j";
                    $sqlBuscJugad.=" WHERE j.jugador_id IN (";
                    $sqlBuscJugad.="SELECT pj.jugador_id from jugador_partida pj WHERE";
                    $sqlBuscJugad.=" pj.partida_id = ".$partida_id." AND pj.es_master = 0) ORDER BY j.jugador_nombre";

                    $resultJugad=$conexion->query($sqlBuscJugad);

                    $numeroJug=$resultJugad->num_rows;
                    if ($numeroJug==0){
                        $tabla .="<td>Esta partida aún no cuenta con jugadores</td>";
                    }
                    else{
                        $tabla .= "<td><table>";
                        while ($filaJugad=$resultJugad->fetch_assoc())
                            {
                                extract($filaJugad);

                                $tabla .= "<tr><td class='dividida'>".$jugador_nombre."</td><td class='dividida'>".$jugador_nick."</td></tr>";
                            }
                        $tabla .= "</table></td>";
                    }
                    $resultJugad->close();
                //-----------------------------//

                // Obtenemos Master
                $sqlBuscMaster= "SELECT j.jugador_nombre, j.jugador_nick FROM jugador j";
                $sqlBuscMaster.=" WHERE j.jugador_id IN (";
                $sqlBuscMaster.="SELECT pj.jugador_id from jugador_partida pj WHERE";
                $sqlBuscMaster.=" pj.partida_id = ".$partida_id." AND pj.es_master = 1)";

                $resultMaster=$conexion->query($sqlBuscMaster);
                $tabla .= "<td><table>";
                while ($filaMaster=$resultMaster->fetch_assoc())
                    {
                        extract($filaMaster);

                        $tabla .= "<tr><td>".$jugador_nombre."</td><td>".$jugador_nick."</td></tr>";
                    }
                $tabla .= "</table></td>";
                $resultMaster->close();
                //-----------------------------//


                $tabla .= "<td>$partida_observ</td><td>$partida_estado</td></tr>";
            } while($filaPartida = mysqli_fetch_assoc($resultPartida));

            echo "</table>";
        
    }else{
        $tabla = "<h4>No hay partidas con esos datos</h4>";
    }
    // echo $sqlBuscPartida;
    // echo $sqlBuscJugad;
    // echo $sqlBuscMaster;
    
    echo $tabla;

    mysqli_close($conexion);
?>