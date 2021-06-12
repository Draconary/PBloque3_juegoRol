<?php
 
$datosSaludo["nick"] = $_REQUEST["nick"];
 
// Codifico el array asociativo en JSON (string)
$salida = json_encode($datosSaludo);
 
echo $salida;
?>
