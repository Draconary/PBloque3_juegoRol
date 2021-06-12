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
 


$recibidos = $_GET["nick"];
$nickLogueado = json_decode($recibidos);

$cadenaEditar = "SELECT p.partida_id, p.partida_fecha, p.partida_nivel, e.escenario_nombre, p.partida_observ, p.partida_estado FROM partida p ";
$cadenaEditar .= "INNER JOIN escenario e ON e.escenario_id = p.escenario_id ";
$cadenaEditar .= "WHERE p.partida_id IN (SELECT pj.partida_id FROM jugador_partida pj WHERE pj.es_master = 1 and pj.jugador_id IN ";
$cadenaEditar .= "(SELECT j.jugador_id from jugador j where j.jugador_nick ='".$nickLogueado."'))";

// echo $cadenaEditar;

$partidasLogueados = mysqli_query($conexion, $cadenaEditar) or die(mysqli_error($conexion));
$filaPartida = mysqli_fetch_assoc($partidasLogueados);

if($filaPartida != 0)
    {

        $tabla = "<table border='2' class='tabla'>";
        $tabla .= "<thead><tr><th colspan='7' style='text-align:center'>Partidas encontrados</th></tr></thead>";
        $tabla .= "<thead><tr><th>Fecha</th><th>Nivel</th><th>Jugadores</th><th>Escenario</th><th>Descripcion</th><th>Estado</th><th>Editar</th></thead>";


        while($filaPartida = mysqli_fetch_assoc($partidasLogueados))
            {
                extract($filaPartida);

                $tabla .= "<tr><td>$partida_fecha</td>";
                $tabla .= "<td>$partida_nivel</td>";
                

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

                $tabla .= "<td>$escenario_nombre</td><td>$partida_observ</td><td>$partida_estado</td>";
                // $tabla .= "<td><button class='btn btn-warning' id='btnEditarPersonaje'><i class='fa fa-edit'></i></button></td></tr>";
                $tabla .= "<td style='text-align:center'><i id='bEditP' class='fa fa-edit bnEdit' data-id-partida='".$partida_id."' ></i></td></tr>";

            }
        echo "</table>";
    }
    else{
        $tabla = "<h4>Ninguna partida encontrada</h4>";
    }

echo $tabla;

mysqli_close($conexion);
?>
