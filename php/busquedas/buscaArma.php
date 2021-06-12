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

// Consulta SQL para obtener los datos de las armas.
$sqlBuscArma = "SELECT a.arma_nombre, a.arma_ataque, a.arma_defensa, a.arma_tipo, a.arma_observ FROM arma a";
$sqlBuscArma .= " WHERE true";

//Si se ha escrito nombre a buscar
if($_POST["nomArmaBuscar"] != ""){
    $nombreBuscar = $_POST["nomArmaBuscar"];
    $sqlBuscArma.= " AND a.arma_nombre LIKE ('%".$nombreBuscar."%')";
}

//Si se ha seleccionado tipo a buscar
if($_POST["tipoArmaBuscar"] != ""){
    $tipoBuscar = $_POST["tipoArmaBuscar"];
    $tipo= explode(",", $tipoBuscar);
    $buscarTipo= implode("', '", $tipo);

    $sqlBuscArma.= " AND a.arma_tipo IN ('$buscarTipo')";
}

if($_POST["minAtqBuscar"] != "" && $_POST["maxAtqBuscar"] != ""){
    $ataqueMinimo = $_POST["minAtqBuscar"];//ataque mínimo a buscar
    $ataqueMaximo = $_POST["maxAtqBuscar"];//ataque máximo a buscar

    $sqlBuscArma.= " AND a.arma_ataque BETWEEN '$ataqueMinimo' AND '$ataqueMaximo'";
}

if($_POST["minAtqBuscar"] != ""){
    $ataqueMinimo = $_POST["minAtqBuscar"];//ataque mínimo a buscar
    $sqlBuscArma.= " AND a.arma_ataque >= '$ataqueMinimo'";
}

if($_POST["maxAtqBuscar"] != ""){
    $ataqueMaximo = $_POST["maxAtqBuscar"];//ataque máximo a buscar
    $sqlBuscArma.= " AND a.arma_ataque <= '$ataqueMaximo'";
}

if($_POST["minDefBuscar"] != "" && $_POST["maxDefBuscar"] != ""){
    $defensaMin = $_POST["minDefBuscar"];//defensa mínima a buscar
    $defensaMax = $_POST["maxDefBuscar"];//defensa máxima a buscar

    $sqlBuscArma.= " AND a.arma_defensa BETWEEN '$defensaMin' AND '$defensaMax'";
}

if($_POST["minDefBuscar"] != ""){
    $defensaMin = $_POST["minDefBuscar"];//defensa mínima a buscar
    $sqlBuscArma.= " AND a.arma_defensa >= '$defensaMin'";
}

if($_POST["maxDefBuscar"] != ""){
    $defensaMax = $_POST["maxDefBuscar"];//defensa máxima a buscar
    $sqlBuscArma.= " AND a.arma_defensa <= '$defensaMax'";
}

//Si se ha marcado con/sin uso
if($_POST["armaEnUso"] != ""){
    $csUsoBuscar = $_POST["armaEnUso"];
    if($csUsoBuscar=="uso"){
        //Con uso
        $sqlBuscArma.= " AND a.arma_id IN (SELECT p.personaje_arma FROM personaje p)";
    }
    else if($csUsoBuscar=="noUso"){
        //Sin uso
        $sqlBuscArma.= " AND a.arma_id NOT IN (SELECT p.personaje_arma FROM personaje p)";
    }
}

//Si se ha marcado forma de ordenación
if($_POST["armaOrdena"] != ""){
    $ordenBuscar = $_POST["armaOrdena"];
    $sqlBuscArma.= " ORDER BY $ordenBuscar";
}

// echo json_encode($sqlBuscArma);

$resultados = mysqli_query($conexion, $sqlBuscArma) or die(mysqli_error($conexion));
 
if ($resultados){ // Si hay resultados
 
    $armaEncontrada = [];
 
    while ($filaArma = mysqli_fetch_array($resultados)) {
       // Almacenamos en un array los jugadores encontrados
       $armaEncontrada[] = $filaArma;
    }
}
 
mysqli_close($conexion);
 
enviarResultados($resultados, $armaEncontrada, $conexion);
 
function enviarResultados($resultados, $armaEncontrada, $conexion){
    // Generamos la respuesta
    header('Content-Type: application/json');
 
    if ($resultados )
        {
            $respuesta["error"] = 0;
            $respuesta["mensaje"] = "Armas encontradas"; 
            $respuesta["arma"] = $armaEncontrada;
        } 
    else 
        {
            $respuesta["error"] = 1;
            $respuesta["mensaje"] = "Error en la búsqueda de arma: ".mysqli_error($conexion);
            $respuesta["arma"] = [];
        }
 
    echo json_encode($respuesta);
}
?>
