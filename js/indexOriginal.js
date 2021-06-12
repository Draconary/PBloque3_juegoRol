// "use strict";


// $(document).ready(function() {
saludo();

$("form").hide();

$("#btnInicio").click(function() {
    saludo();
    $("#fondo").removeClass("baseDesenfocada");
    $("#fondo").addClass("baseNormal");
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
});

$("#botonInicioSesion").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    if (sessionStorage.getItem('nick') != undefined) {
        //alert("Ya está logueado");
        $("#contenido").text("Ya está logueado");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
        $("#fondo").removeClass("baseDesenfocada");
        $("#fondo").addClass("baseNormal");

    } else {
        limpiarValids();
        frmIniSesion.reset();
        $("#frmIniSesion").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#botonCrearPerfil").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    if (sessionStorage.getItem('nick') != undefined) {
        perfilAEditar();
        $("#cabeceraPerfil").text("Editar Perfil");
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
        $("#btnEditarPerfil").css('display', 'inline');
        $("#btnCrearPerfil").css('display', 'none');
    } else {
        limpiarValids();
        frmCrearPerfil.reset();
        //Ocultamos el botón "editar"
        $("#btnEditarPerfil").css('display', 'none');
        $("#btnCrearPerfil").css('display', 'inline');
        $("#cabeceraPerfil").text("Crear Perfil");
        $("#frmCrearPerfil").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#botonPersonaje").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

    } else {
        cargarComboArmas();
        cargarComboTipoPersonaje();
        limpiarValids();
        frmPersonaje.reset();
        $("#frmPersonaje").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#btnEditarPersonaje").click(function() {
    alert("Prueba de comprobación");
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    
    cargarComboArmas();
    cargarComboTipoPersonaje();
    limpiarValids();
    frmEditPersonaje.reset();
    $("#frmEditPersonaje").show();
    $("#fondo").removeClass("baseNormal");
    $("#fondo").addClass("baseDesenfocada");
    
});

$("#btnCargarPersonajes").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    
    limpiarValids();

    cargarPersonajes();

    $("#frmTablaPersonaje").show();

    $("#fondo").removeClass("baseNormal");
    $("#fondo").addClass("baseDesenfocada");
    
});

$("#botonPartidas").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        limpiarValids();
        cargarComboEscenarios();
        cargarComboJugadores();
        frmPartidas.reset();
        $("#frmPartidas").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#btnCargarPartidas").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    
    limpiarValids();

    cargarPartidas();

    $("#frmTablaPartida").show();

    $("#fondo").removeClass("baseNormal");
    $("#fondo").addClass("baseDesenfocada");
    
});

$("#btnFormBuscarJugador").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    $("#jugadorEncontrado").html("");
    $("#jugadorEncontrado").addClass("invisible");

    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        limpiarValids();
        frmBuscarJugador.reset();
        $("#frmBuscarJugador").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#btnFormBuscarPersonaje").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    $("#personajeEncontrado").html("");
    $("#personajeEncontrado").addClass("invisible");

    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {

        limpiarValids();
        cargarComboTipoPersonaje();
        frmBuscarPersonaje.reset();
        $("#frmBuscarPersonaje").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#btnFormBuscarPartida").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    $("#partidaEncontrada").html("");
    $("#partidaEncontrada").addClass("invisible");

    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {

        limpiarValids();
        cargarComboEscBuscar();
        frmBuscarPartida.reset();
        $("#frmBuscarPartida").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#btnFormBuscarArma").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    $("#armaEncontrada").html("");
    $("#armaEncontrada").addClass("invisible");

    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        limpiarValids();
        cargarComboTipoArmas();
        frmBuscarArma.reset();
        $("#frmBuscarArma").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});

$("#btnFormBuscarEscenario").click(function() {
    $("form").hide();
    $("#popup1").css("display", "none");
    $("#avisos").removeClass("superior");
    $("#escenarioEncontrado").html("");
    $("#escenarioEncontrado").addClass("invisible");

    if (sessionStorage.getItem('nick') == undefined) {
        //alert("Conéctese para participar");
        $("#contenido").text("Conéctese para participar");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {

        limpiarValids();
        cargarComboTipoEscenario();
        frmBuscarEscenario.reset();
        $("#frmBuscarEscenario").show();
        $("#fondo").removeClass("baseNormal");
        $("#fondo").addClass("baseDesenfocada");
    }
});



$("#btnInicioSesion").click(valInicSesion);

$("#btnCrearPerfil").click(valCreaPerfil);

$("#btnCrearPersonaje").click(valCreaPersonaje);

$("#btnCrearPartida").click(valCreaPartida);

$("#botonCerrarSesion").click(cierreSesion);

// Botones Búsquedas

$("#btnBuscarJugador").click(busquedaJugador);

$("#btnBuscarPersonaje").click(busquedaPersonaje);

$("#btnBuscarArma").click(busquedaArma);

$("#btnBuscarEsc").click(busquedaEscenario);

$("#btnBuscarPartida").click(busquedaPartida);

// Botones Editar/Eliminar

$("#btnEditarPerfil").click(valEditarPerfil);

$("#btnBorrarPersonaje").click(eliminarPersonaje);

$("#btnEditPers").click(valEditPersonaje);




// Botones cerrar cargas

$("#btnCerrarTabPers").click(cerrarCargas);
$("#btnCerrarTabPart").click(cerrarCargas);


function cerrarCargas(){
    $("form").hide();
    $("#fondo").removeClass("baseDesenfocada");
    $("#fondo").addClass("baseNormal");
}

// });

function limpiarValids() {
    $("#nickInicio").removeClass("falloValid");
    $("#passInicio").removeClass("falloValid");

    $("#nombreCrear").removeClass("falloValid");
    $("#nickCrear").removeClass("falloValid");
    $("#mailCrear").removeClass("falloValid");
    $("#passCrear").removeClass("falloValid");
    $("#passConfirmar").removeClass("falloValid");
    $("#lstEstadoJugador").removeClass("falloValid");

    $("#nombrePersonaje").removeClass("falloValid");
    $("#lstTipoPersonaje").removeClass("falloValid");
    $("#lstArmasPersonaje").removeClass("falloValid");
    $("#descripcionPersonaje").removeClass("falloValid");

    $("#fechaPartida").removeClass("falloValid");
    $("#lstEscePartida").removeClass("falloValid");
    $("#lstJugPartida").removeClass("falloValid");
    $("#nivelPersonaje").removeClass("falloValid");
    $("#lstEstadoPartida").removeClass("falloValid");
    $("#descripcionPartida").removeClass("falloValid");
}

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}

//Creamos el saludo al usuario

function saludo() {

    $("form").hide();

    if (sessionStorage.getItem('nick') != undefined) {
        $("#presentacion").load("saludoJugador.html");
        accionSaludo();
    } else {
        $("#presentacion").load("saludoInvitado.html");
    }

}

function accionSaludo() {
    $.getJSON("./php/getSaludo.php", {
            nick: sessionStorage.getItem('nick'),
        },
        procesoSaludo
    );
}

function procesoSaludo(datosSaludo, textStatus, jqXHR) {
    $("#saludo").text("Hola " + datosSaludo.nick);

}

//COMBO ARMAS PARA CREAR PERSONAJE//

function cargarComboArmas() {
    var oArrayArmas = null;

    if (localStorage['armasCrear'] != null) {
        oArrayArmas = JSON.parse(localStorage['armasCrear']);
        rellenaComboArmas(oArrayArmas);
    } else {
        $.get('./php/combos/getComboArmas.php',
            null,
            crearComboArmas,
            'json');
    }
}

function crearComboArmas(oArrayArmas, sStatus, oXHR) {
    rellenaComboArmas(oArrayArmas)

    // Guardar en localStorage
    localStorage['armasCrear'] = JSON.stringify(oArrayArmas);
}

function rellenaComboArmas(oArrayArmas) {
    $("#lstArmasPersonaje").empty();
    $('<option value="0">Escoja un arma</option>').appendTo("#lstArmasPersonaje");

    for (var i = 0; i < oArrayArmas.length; i++) {
        $('<option value="' + oArrayArmas[i].arma_id + '">' + oArrayArmas[i].arma_nombre + ' de tipo ' + oArrayArmas[i].arma_tipo + '</option>').appendTo("#lstArmasPersonaje");
    }
}

//COMBO ESCENARIO PARA CREAR PARTIDA//

function cargarComboEscenarios() {
    var oArrayEscenarios = null;

    if (localStorage['escenarios'] != null) {
        oArrayEscenarios = JSON.parse(localStorage['escenarios']);
        rellenaComboEscenarios(oArrayEscenarios);
    } else {
        $.get('./php/combos/getComboEscenarios.php',
            null,
            crearComboEscenarios,
            'json');
    }
}

function crearComboEscenarios(oArrayEscenarios, sStatus, oXHR) {
    rellenaComboEscenarios(oArrayEscenarios)

    // Guardar en localStorage
    localStorage['escenarios'] = JSON.stringify(oArrayEscenarios);
}

function rellenaComboEscenarios(oArrayEscenarios) {
    $("#lstEscePartida").empty();
    $('<option value="0">Escoja un escenario</option>').appendTo("#lstEscePartida");

    for (var i = 0; i < oArrayEscenarios.length; i++) {
        $('<option value="' + oArrayEscenarios[i].escenario_id + '">' + oArrayEscenarios[i].escenario_nombre + ' - ' + oArrayEscenarios[i].escenario_tipo + ' de nivel ' + oArrayEscenarios[i].escenario_nivel + '</option>').appendTo("#lstEscePartida");
    }
}

//COMBO JUGADORES PARA CREAR PARTIDA//

function cargarComboJugadores() {
    var oArrayJugadores = null;

    if (localStorage['jugadores'] != null) {
        oArrayJugadores = JSON.parse(localStorage['jugadores']);
        rellenaComboJugadores(oArrayJugadores);
    } else {
        $.get('./php/combos/getComboJugadores.php', { nick: sessionStorage.getItem('nick'), }, //Para que cargue todos los jugadores menos el usuario logueado (será master)
            crearComboJugadores,
            'json');
    }
}

function crearComboJugadores(oArrayJugadores, sStatus, oXHR) {
    rellenaComboJugadores(oArrayJugadores)

    // Guardar en localStorage
    localStorage['jugadores'] = JSON.stringify(oArrayJugadores);
}

function rellenaComboJugadores(oArrayJugadores) {
    $("#lstJugPartida").empty();
    $('<option value="0">Escoja jugadores para la partida</option>').appendTo("#lstJugPartida");

    for (var i = 0; i < oArrayJugadores.length; i++) {
        $('<option value="' + oArrayJugadores[i].jugador_id + '">' + oArrayJugadores[i].jugador_nombre + ' - ' + oArrayJugadores[i].jugador_nick + '</option>').appendTo("#lstJugPartida");
    }
}

//COMBO TIPO ARMAS PARA BUSCAR PERSONAJE//

function cargarComboTipoArmas() {
    var oArrayArmasBuscar = null;

    if (localStorage['armasBuscar'] != null) {
        oArrayArmasBuscar = JSON.parse(localStorage['armasBuscar']);
        rellenaComboTipoArmas(oArrayArmasBuscar);
    } else {
        $.get('./php/combos/getComboTipoArmas.php',
            null,
            crearComboTipoArmas,
            'json');
    }
}

function crearComboTipoArmas(oArrayArmasBuscar, sStatus, oXHR) {
    rellenaComboTipoArmas(oArrayArmasBuscar)

    // Guardar en localStorage
    localStorage['armasBuscar'] = JSON.stringify(oArrayArmasBuscar);
}

function rellenaComboTipoArmas(oArrayArmasBuscar) {
    $("#lstTipoArmaBuscar").empty();

    for (var i = 0; i < oArrayArmasBuscar.length; i++) {
        $('<option value="' + oArrayArmasBuscar[i].arma_tipo + '">' + oArrayArmasBuscar[i].arma_tipo + '</option>').appendTo("#lstTipoArmaBuscar");
    }
}

//COMBO ESCENARIO PARA BUSCAR PARTIDA//

function cargarComboEscBuscar() {
    var oArrayEscBuscar = null;

    if (localStorage['escenarios'] != null) {
        oArrayEscBuscar = JSON.parse(localStorage['escenarios']);
        rellenaComboEscBuscar(oArrayEscBuscar);
    } else {
        $.get('./php/combos/getComboEscenarios.php',
            null,
            crearComboEscBuscar,
            'json');
    }
}

function crearComboEscBuscar(oArrayEscBuscar, sStatus, oXHR) {
    rellenaComboEscBuscar(oArrayEscBuscar)

    // Guardar en localStorage
    localStorage['escenarios'] = JSON.stringify(oArrayEscBuscar);
}

function rellenaComboEscBuscar(oArrayEscBuscar) {
    $("#lstEscePartidaBuscar").empty();
    $('<option value="0">Escoja un escenario</option>').appendTo("#lstEscePartidaBuscar");

    for (var i = 0; i < oArrayEscBuscar.length; i++) {
        $('<option value="' + oArrayEscBuscar[i].escenario_id + '">' + oArrayEscBuscar[i].escenario_nombre + ' - ' + oArrayEscBuscar[i].escenario_tipo + ' de nivel ' + oArrayEscBuscar[i].escenario_nivel + '</option>').appendTo("#lstEscePartidaBuscar");
    }
}

//COMBO TIPO ESCENARIO PAREA BUSCAR ESCENARIO//

function cargarComboTipoEscenario() {
    var oArrayTipoEscBuscar = null;

    if (localStorage['tipoEscenarios'] != null) {
        oArrayTipoEscBuscar = JSON.parse(localStorage['tipoEscenarios']);
        rellenaComboTipoEscenario(oArrayTipoEscBuscar);
    } else {
        $.get('./php/combos/getComboTipoEscenarios.php',
            null,
            crearComboTipoEscenario,
            'json');
    }
}

function crearComboTipoEscenario(oArrayTipoEscBuscar, sStatus, oXHR) {
    rellenaComboTipoEscenario(oArrayTipoEscBuscar)

    // Guardar en localStorage
    localStorage['tipoEscenarios'] = JSON.stringify(oArrayTipoEscBuscar);
}

function rellenaComboTipoEscenario(oArrayTipoEscBuscar) {
    $("#lstTipoBuscarEsc").empty();
    $('<option value="0">Escoja uno o varios escenarios</option>').appendTo("#lstTipoBuscarEsc");

    for (var i = 0; i < oArrayTipoEscBuscar.length; i++) {
        $('<option value="' + oArrayTipoEscBuscar[i].escenario_tipo + '">' + oArrayTipoEscBuscar[i].escenario_tipo + '</option>').appendTo("#lstTipoBuscarEsc");
    }
}

//COMBO TIPO PERSONAJE PARA CREAR PERSONAJE//

function cargarComboTipoPersonaje() {
    var oArrayTipoPersonajeBusc = null;

    if (localStorage['tipoPersonaje'] != null) {
        oArrayTipoPersonajeBusc = JSON.parse(localStorage['tipoPersonaje']);
        rellenaComboTipoPersonaje(oArrayTipoPersonajeBusc);
    } else {
        $.get('./php/combos/getComboTipoPersonaje.php',
            null,
            crearComboTipoPersonaje,
            'json');
    }
}

function crearComboTipoPersonaje(oArrayTipoPersonajeBusc, sStatus, oXHR) {
    rellenaComboTipoPersonaje(oArrayTipoPersonajeBusc)

    // Guardar en localStorage
    localStorage['tipoPersonaje'] = JSON.stringify(oArrayTipoPersonajeBusc);
}

function rellenaComboTipoPersonaje(oArrayTipoPersonajeBusc) {
    $("#lstTipoPersonaje").empty();
    $("#lstTipoPersonajeBusc").empty();

    $('<option value="0">Escoja un tipo de personaje</option>').appendTo("#lstTipoPersonaje");
    $('<option value="0">Escoja uno o varios tipos de personaje</option>').appendTo("#lstTipoPersonajeBusc");

    for (var i = 0; i < oArrayTipoPersonajeBusc.length; i++) {
        $('<option value="' + oArrayTipoPersonajeBusc[i].tipo_personaje + '">' + oArrayTipoPersonajeBusc[i].tipo_personaje + '</option>').appendTo("#lstTipoPersonaje");
    }

    for (var i = 0; i < oArrayTipoPersonajeBusc.length; i++) {
        $('<option value="' + oArrayTipoPersonajeBusc[i].tipo_personaje + '">' + oArrayTipoPersonajeBusc[i].tipo_personaje + '</option>').appendTo("#lstTipoPersonajeBusc");
    }
}



//INICIO y CIERRE DE SESIÓN

function valInicSesion() {
    let sError = "";
    let bCorrecto = true; // creamos el formulario como correcto en principio

    // Validamos el email
    let sNick = frmIniSesion.nickInicio.value.trim();
    // let oReglaEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;    
    let oReglaNick = /^(([A-Za-záéíóúÁÉÍÓÚ1-9-_])|(\s)){4,15}$/;

    if (!oReglaNick.test(sNick)) {
        if (bCorrecto) {
            frmIniSesion.nickInicio.focus();
            bCorrecto = false;
        }
        sError += '\n- El nick introducido no cumple el formato\t';
        frmIniSesion.nickInicio.classList.add("falloValid");
    } else {
        frmIniSesion.nickInicio.classList.remove("falloValid");
    }

    // Validamos el password
    let sContr = frmIniSesion.passInicio.value.trim();
    let oReglaPass = /^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{4,15}$/;

    if (!oReglaPass.test(sContr)) {
        if (bCorrecto) {
            frmIniSesion.passInicio.focus();
            bCorrecto = false;
        }
        sError += "\n- La contraseña no cumple el formato (de 4 a 15 caracteres)";
        frmIniSesion.passInicio.classList.add("falloValid");
    } else {
        frmIniSesion.passInicio.classList.remove("falloValid");
    }

    if (bCorrecto) { // Si ambas validaciones eran correctas
        incioSesion();
    } else {
        //alert(sError);
        $("#contenido").text(sError);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    }
}

function incioSesion() {
    var oDatosInicio = {
        nick: frmIniSesion.nickInicio.value.trim(),
        contrasena: frmIniSesion.passInicio.value.trim()
    };

    var sDatos = "datosInicio=" + JSON.stringify(oDatosInicio);

    $.post("./php/inicioSesion.php",
        sDatos,
        resInicioSesion,
        "json");
}

function resInicioSesion(oDatos, sStatus, oXHR) {
    if (oDatos.error) {
        //alert(oDatos.mensaje);
        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        //alert(oDatos.mensaje);
        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
        sessionStorage.setItem('nick', frmIniSesion.nickInicio.value.trim());
        sessionStorage.setItem('contrasena', frmIniSesion.passInicio.value.trim());
        frmIniSesion.reset();

        $("#fondo").removeClass("baseDesenfocada");
        $("#fondo").addClass("baseNormal");

        saludo();
    }
}

//Cierre de sesión
function cierreSesion() {
    if (sessionStorage['nick'] != undefined) {
        if (confirm("¿Está seguro de querer cerrar sesión?")) {
            sessionStorage.removeItem('nick');
            sessionStorage.removeItem('contrasena');
            //localStorage.clear();
            localStorage.removeItem('jugadores');
            //alert("Vuelva pronto");
            $("#contenido").text("Vuelva pronto");

            $("#popup1").css("display", "block");
            $("#avisos").addClass("superior");
            saludo();

            $("#fondo").removeClass("baseDesenfocada");
            $("#fondo").addClass("baseNormal");
        }
    } else {
        //alert("No hay sesión iniciada");
        $("#contenido").text("No hay sesión iniciada");

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    }
}



// CREACIÓN DE PERFIL
function valCreaPerfil() {
    let sError = "";
    let bCorrecto = true; //Creamos el formulario como válido

    // Validación Nombre Usuario
    let sNomJugador = frmCrearPerfil.nombreCrear.value.trim();
    let oRegCreaNomJug = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,50}$/;

    if (!oRegCreaNomJug.test(sNomJugador)) {
        bCorrecto = false;
        sError = "\n- El nombre de jugador es incorrecto";
        frmCrearPerfil.nombreCrear.classList.add("falloValid");
        frmCrearPerfil.nombreCrear.focus();
    } else {
        frmCrearPerfil.nombreCrear.classList.remove("falloValid");
    }

    // Validación Nick
    let sNickJugador = frmCrearPerfil.nickCrear.value.trim();
    let oRegCreaNickJug = /^(([A-Za-záéíóúÁÉÍÓÚ1-9-_])|(\s)){4,15}$/;

    if (!oRegCreaNickJug.test(sNickJugador)) {
        bCorrecto = false;
        sError = "\n- El nick de jugador es incorrecto";
        frmCrearPerfil.nickCrear.classList.add("falloValid");
        frmCrearPerfil.nickCrear.focus();
    } else {
        frmCrearPerfil.nickCrear.classList.remove("falloValid");
    }

    //Validación Email
    let sMailJugador = frmCrearPerfil.mailCrear.value.trim();
    let oRegCreaMailJug = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if (!oRegCreaMailJug.test(sMailJugador)) {
        bCorrecto = false;
        sError = "\n- El formato del e-mail es incorrecto";
        frmCrearPerfil.mailCrear.classList.add("falloValid");
        frmCrearPerfil.mailCrear.focus();
    } else {
        frmCrearPerfil.mailCrear.classList.remove("falloValid");
    }

    // Validación Contraseñas
    //Primera Contraseña
    let sContras1 = frmCrearPerfil.passCrear.value.trim();
    let oRegCreaContrJug = /^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{4,15}$/;

    if (!oRegCreaContrJug.test(sContras1)) {
        if (bCorrecto) {
            frmCrearPerfil.passCrear.focus();
            bCorrecto = false;
        }
        sError += "\n- La contraseña no cumple el formato (de 4 a 15 caracteres)";
        frmCrearPerfil.passCrear.classList.add("falloValid");
    } else {
        frmCrearPerfil.passCrear.classList.remove("falloValid");
    }

    //Segunda Contraseña
    let sContras2 = frmCrearPerfil.passConfirmar.value.trim();
    // let oRegCreaContrJug = /^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{4,15}$/;

    if (!oRegCreaContrJug.test(sContras2)) {
        if (bCorrecto) {
            frmCrearPerfil.passConfirmar.focus();
            bCorrecto = false;
        }
        sError += "\n- La contraseña no cumple el formato (de 4 a 15 caracteres)";
        frmCrearPerfil.passConfirmar.classList.add("falloValid");
    } else {
        frmCrearPerfil.passConfirmar.classList.remove("falloValid");
    }

    //Confirmamos que ambas contraseñas son iguales
    if (sContras1 != sContras2) {
        frmCrearPerfil.passConfirmar.focus();
        bCorrecto = false;
        sError += "\n- Las contraseñas son distintas";
        frmCrearPerfil.passConfirmar.classList.add("falloValid");
    } else {
        frmCrearPerfil.passConfirmar.classList.remove("falloValid");
    }

    //Se ha elegido un estado
    let sEstadoJug = frmCrearPerfil.lstEstadoJugador.value.trim();

    if (sEstadoJug == 0) {
        bCorrecto = false;
        sError += "\n- No ha elegido un estado para su perfil";
        frmCrearPerfil.lstEstadoJugador.classList.add("falloValid");
    } else {
        frmCrearPerfil.lstEstadoJugador.classList.remove("falloValid");
    }

    //Si todo está correctos, llamamos a la siguiemnte función
    if (bCorrecto) {
        altaJugador();
    } else {
        //alert(sError);
        $("#contenido").text(sError);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

    }

}

function altaJugador() {
    let oAjax = instanciarXHR();
    let sEnviarPerfil = "nombJugador=" + frmCrearPerfil.nombreCrear.value.trim();
    sEnviarPerfil += "&nickJugador=" + frmCrearPerfil.nickCrear.value.trim();
    sEnviarPerfil += "&mailJugador=" + frmCrearPerfil.mailCrear.value.trim();
    sEnviarPerfil += "&contrasenaJugador=" + frmCrearPerfil.passCrear.value.trim();
    sEnviarPerfil += "&estadoJugador=" + frmCrearPerfil.lstEstadoJugador.value.trim();
    sEnviarPerfil = encodeURI(sEnviarPerfil);

    //Configurar la llamada --> Asincrono por defecto
    oAjax.open("POST", encodeURI("./php/altaJugador.php"));

    //Asociar manejador de evento de la respuesta
    oAjax.addEventListener("readystatechange", accionAltaJugador, false);

    // Cabecera POST
    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //Llamamos
    oAjax.send(sEnviarPerfil);
}

function accionAltaJugador() {
    var oAjax = this;
    // Proceso la respuesta cuando llega
    if (oAjax.readyState == 4 && oAjax.status == 200) {
        var oRespuesta = JSON.parse(oAjax.responseText);


        if (oRespuesta.error == 0) {
            //alert(oRespuesta.mensaje);
            $("#contenido").text(oRespuesta.mensaje);

            $("#popup1").css("display", "block");
            $("#avisos").addClass("superior");

            $("#frmCrearPerfil").hide();
            frmCrearPerfil.reset();
            $("#fondo").removeClass("baseDesenfocada");
            $("#fondo").addClass("baseNormal");

        } else {
            //alert(oRespuesta.mensaje);

            $("#contenido").text(oRespuesta.mensaje);

            $("#popup1").css("display", "block");
            $("#avisos").addClass("superior");

        }
    }
}



//Creación de partida

function valCreaPartida() {
    let sError = "";
    let bCorrecto = true; //Creamos el formulario como válido

    //Se ha elegido fecha
    let sFechaPartida = frmPartidas.fechaPartida.value.trim();

    if (sFechaPartida == '') {
        bCorrecto = false;
        sError += "\n- Debe ingresar una fecha para la partida";
        frmPartidas.fechaPartida.classList.add("falloValid");
    } else {
        frmPartidas.fechaPartida.classList.remove("falloValid");
    }

    //Se ha elegido escenario
    let sEscenPartida = frmPartidas.lstEscePartida.value.trim();

    if (sEscenPartida == 0) {
        bCorrecto = false;
        sError += "\n- No ha elegido escenario para la partida";
        frmPartidas.lstEscePartida.classList.add("falloValid");
    } else {
        frmPartidas.lstEscePartida.classList.remove("falloValid");
    }

    //Se han escogido jugadores (5)
    let sJugadoresPartida = frmPartidas.lstJugPartida.value.trim();

    //Obtenemos el número de elementos seleccionados en el combo
    var totalJugadores = 0;
    var lista = document.getElementById("lstJugPartida");

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].value > 0 && lista[i].selected) {
            totalJugadores += 1;
        }
    }

    if (totalJugadores < 5) {
        bCorrecto = false;
        sError += "\n- No ha escogido el número correcto de jugadores (5)";
        // sError += "\n- "+ totalJugadores;
        frmPartidas.lstJugPartida.classList.add("falloValid");
    } else {
        frmPartidas.lstJugPartida.classList.remove("falloValid");
    }

    //Se ha elegido nivel
    let sNivPartida = frmPartidas.nivelPersonaje.value.trim();

    if (sNivPartida == '') {
        bCorrecto = false;
        sError += "\n- No ha elegido nivel recomendado para la partida";
        frmPartidas.nivelPersonaje.classList.add("falloValid");
    } else {
        frmPartidas.nivelPersonaje.classList.remove("falloValid");
    }

    //Se ha elegido estado de la partida
    let sEstPartida = frmPartidas.lstEstadoPartida.value.trim();

    if (sEstPartida == 0) {
        bCorrecto = false;
        sError += "\n- No ha elegido estado inicial para la partida";
        frmPartidas.lstEstadoPartida.classList.add("falloValid");
    } else {
        frmPartidas.lstEstadoPartida.classList.remove("falloValid");
    }

    //Se ha rellenado el campo descripción
    let sDescPartida = frmPartidas.descripcionPartida.value.trim();

    if (sDescPartida == '') {
        bCorrecto = false;
        sError += "\n- No ha descrito la partida";
        frmPartidas.descripcionPartida.classList.add("falloValid");
    } else {
        frmPartidas.descripcionPartida.classList.remove("falloValid");
    }

    //Si todo está correctos, llamamos a la siguiemnte función
    if (bCorrecto) {
        altaPartida();
    } else {
        //alert(sError);
        $("#contenido").text(sError);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

    }

}

function altaPartida() {
    //Creamos vacío el arrayJugadores
    let arrayJugadores = [];

    //Por cada elemento seleccionado del combo de jugadores
    for (let i = 0; i < frmPartidas.lstJugPartida.selectedOptions.length; i++) {
        //lo metemos en el arrayJugadores
        arrayJugadores.push(frmPartidas.lstJugPartida.selectedOptions[i].value);
    }


    var oPartida = {
        master: sessionStorage.getItem('nick'),
        fecha: frmPartidas.fechaPartida.value.trim(),
        escenario: frmPartidas.lstEscePartida.value.trim(),
        jugadores: arrayJugadores,
        nivel: frmPartidas.nivelPersonaje.value.trim(),
        estado: frmPartidas.lstEstadoPartida.value.trim(),
        descripcion: frmPartidas.descripcionPartida.value.trim()

    };

    var sDatos = "partidaCrear=" + JSON.stringify(oPartida);

    $.post("./php/altaPartida.php",
        sDatos,
        respuestaAltaPartida,
        "json");
}

function respuestaAltaPartida(oDatos, sStatus, oXHR) {
    if (oDatos.error) {
        //alert(oDatos.mensaje);

        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        //alert(oDatos.mensaje);

        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

        $("#frmPartidas").hide();
        frmPartidas.reset();
        $("#fondo").removeClass("baseDesenfocada");
        $("#fondo").addClass("baseNormal");
    }
}

//Crear personaje

function valCreaPersonaje() {
    let sError = "";
    let bCorrecto = true; //Creamos el formulario como válido

    // Validación nombre personaje
    let sNombrePersonaje = frmPersonaje.nombrePersonaje.value.trim();
    let oRegCreaNombPers = /^(([A-Za-záéíóúÁÉÍÓÚ1-9-_])|(\s)){4,15}$/;

    if (!oRegCreaNombPers.test(sNombrePersonaje)) {
        bCorrecto = false;
        sError = "\n- El nombre del personaje es incorrecto";
        frmPersonaje.nombrePersonaje.classList.add("falloValid");
        frmPersonaje.nombrePersonaje.focus();
    } else {
        frmPersonaje.nombrePersonaje.classList.remove("falloValid");
    }

    // Se ha elegido tipo de personaje
    let sTipoPers = frmPersonaje.lstTipoPersonaje.value.trim();

    if (sTipoPers == 0) {
        bCorrecto = false;
        sError += "\n- No ha escogido tipo de personaje";
        frmPersonaje.lstTipoPersonaje.classList.add("falloValid");
    } else {
        frmPersonaje.lstTipoPersonaje.classList.remove("falloValid");
    }

    // Se ha escogido arma
    let sArmaPers = frmPersonaje.lstArmasPersonaje.value.trim();

    if (sArmaPers == 0) {
        bCorrecto = false;
        sError += "\n- No ha elegido arma para su personaje";
        frmPersonaje.lstArmasPersonaje.classList.add("falloValid");
    } else {
        frmPersonaje.lstArmasPersonaje.classList.remove("falloValid");
    }

    //Se ha rellenado el campo descripción
    let sDescPersonaje = frmPersonaje.descripcionPersonaje.value.trim();

    if (sDescPersonaje == '') {
        bCorrecto = false;
        sError += "\n- No ha descrito a su personaje";
        frmPersonaje.descripcionPersonaje.classList.add("falloValid");
    } else {
        frmPersonaje.descripcionPersonaje.classList.remove("falloValid");
    }

    //Si todo está correctos, llamamos a la siguiemnte función
    if (bCorrecto) {
        altaPersonaje();
    } else {
        //alert(sError);
        $("#contenido").text(sError);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

    }
}

function altaPersonaje() {
    let sPersonajeCrear = "nombPersonajeCrear=" + frmPersonaje.nombrePersonaje.value.trim();
    sPersonajeCrear += "&tipoPersonajeCrear=" + frmPersonaje.lstTipoPersonaje.value.trim();
    sPersonajeCrear += "&armaPersonajeCrear=" + frmPersonaje.lstArmasPersonaje.value.trim();
    sPersonajeCrear += "&descrPersonajeCrear=" + frmPersonaje.descripcionPersonaje.value.trim();
    sPersonajeCrear += "&nickJugPersonajeCrear=" + sessionStorage.getItem('nick');
    sPersonajeCrear = encodeURI(sPersonajeCrear);

    $.ajax({
        method: "post",
        url: "./php/altaPersonaje.php",
        data: sPersonajeCrear,
        dataType: "json",
        async: true, // por defecto
        cache: false,
        success: respuestaAltaPersonaje
    });
}

function respuestaAltaPersonaje(oDatos, sStatus, oXHR) {
    if (oDatos.error) {
        //alert(oDatos.mensaje);

        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        //alert(oDatos.mensaje);

        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

        $("#frmPersonaje").hide();
        frmPersonaje.reset();
        $("#fondo").removeClass("baseDesenfocada");
        $("#fondo").addClass("baseNormal");
    }
}


//------------------------------------------------------
//
//
//Búsquedas
//
//
//------------------------------------------------------

// Busqueda de Jugador

function busquedaJugador() {
    $.post("./php/busquedas/buscaJugador.php",
        $("#frmBuscarJugador").serialize(),
        respuestaBuscaJugador,
        'json');
}

function respuestaBuscaJugador(oDatos, sStatus, oXHR) {
    if (oDatos.error) {
        //alert(oDatos.mensaje);
        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        if (oDatos.jugador.length == 0) {
            sTabla = "<h4>No hay jugadores con esos datos</h4>";
        } else {
            var sTabla = '<table border="2" class="tabla">';

            sTabla += '<thead><tr><th colspan="4" style="text-align:center">Jugadores encontrados</th></tr></thead>';

            sTabla += '<thead><tr><th>Nombre</th><th>Nick</th><th>E-Mail</th><th>Estado</th></thead>';

            sTabla += "<tbody>";
            for (var i = 0; i < oDatos.jugador.length; i++) {
                sTabla += "<tr>";
                sTabla += "<td>" + oDatos.jugador[i].jugador_nombre + "</td>";
                sTabla += "<td>" + oDatos.jugador[i].jugador_nick + "</td>";
                sTabla += "<td>" + oDatos.jugador[i].jugador_email + "</td>";
                sTabla += "<td>" + oDatos.jugador[i].jugador_estado + "</td>";
                sTabla += "</tr>";
            }

            sTabla += "</tbody></table>";
            // sTabla += "<br><br>";
        }

        $("#jugadorEncontrado").html(sTabla);
        $("#jugadorEncontrado").removeClass("invisible");
    }
}

//Búsqueda de Personaje

function busquedaPersonaje() {
    //Creamos vacío el arrayJugadores
    let arrayTipoPers = [];

    //Por cada elemento seleccionado del combo de tipo
    for (let i = 0; i < frmBuscarPersonaje.lstTipoPersonajeBusc.selectedOptions.length; i++) {
        //lo metemos en el arrayTipoPers
        arrayTipoPers.push(frmBuscarPersonaje.lstTipoPersonajeBusc.selectedOptions[i].value);
    }

    let sPersonajeBuscar = "nomPersonajeBuscar=" + frmBuscarPersonaje.nomBuscarPersonaje.value.trim();
    sPersonajeBuscar += "&tipPersonajeBuscar=" + arrayTipoPers;
    sPersonajeBuscar += "&minPersonajeBuscar=" + frmBuscarPersonaje.nivelBuscarPersonajeMin.value.trim();
    sPersonajeBuscar += "&maxPersonajeBuscar=" + frmBuscarPersonaje.nivelBuscarPersonajeMax.value.trim();
    sPersonajeBuscar += "&ordenBuscar=" + frmBuscarPersonaje.radioOrdPersonaje.value.trim(); //PREGUNTAR
    sPersonajeBuscar = encodeURI(sPersonajeBuscar);

    $.ajax({
        url: "./php/busquedas/buscaPersonaje.php",
        dataType: 'xml',
        data: sPersonajeBuscar,
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaBuscaPersonajes,
    });

}

function respuestaBuscaPersonajes(oXML) {

    var posPers;

    var table = "<table border='2' class='tabla'>";
    table += "<thead><tr><th colspan='5' style='text-align:center'>Personajes encontrados</th></tr></thead>";
    table += "<tr><th>Jugador</th><th>Personaje</th><th>Tipo</th><th>Nivel</th><th>Descripción</th></tr>";
    var persEncotrado = oXML.getElementsByTagName("personaje");
    for (posPers = 0; posPers < persEncotrado.length; posPers++) {
        table += "<tr><td>" + persEncotrado[posPers].getElementsByTagName("jugador_nombre")[0].textContent + "</td>";
        table += "<td>" + persEncotrado[posPers].getElementsByTagName("personaje_nombre")[0].textContent + "</td>";
        table += "<td>" + persEncotrado[posPers].getElementsByTagName("tipo_personaje")[0].textContent + "</td>";
        table += "<td>" + persEncotrado[posPers].getElementsByTagName("personaje_xp")[0].textContent + "</td>";
        table += "<td>" + persEncotrado[posPers].getElementsByTagName("personaje_observ")[0].textContent + "</td></tr>";
    }
    table += "</table>";

    $("#personajeEncontrado").html(table);
    $("#personajeEncontrado").removeClass("invisible");

}

// Búsqueda de Arma

function busquedaArma() {

    let arrayTipoArma = [];

    //Por cada elemento seleccionado del combo de tipo
    for (let i = 0; i < frmBuscarArma.lstTipoArmaBuscar.selectedOptions.length; i++) {
        //lo metemos en el arrayTipoArma
        arrayTipoArma.push(frmBuscarArma.lstTipoArmaBuscar.selectedOptions[i].value);
    }

    let sArmaBuscar = "nomArmaBuscar=" + frmBuscarArma.nomBuscarArma.value.trim();
    sArmaBuscar += "&tipoArmaBuscar=" + arrayTipoArma;
    sArmaBuscar += "&minAtqBuscar=" + frmBuscarArma.ataqueBuscarArmaMin.value.trim();
    sArmaBuscar += "&maxAtqBuscar=" + frmBuscarArma.ataqueBuscarArmaMax.value.trim();
    sArmaBuscar += "&minDefBuscar=" + frmBuscarArma.defensaBuscarArmaMin.value.trim();
    sArmaBuscar += "&maxDefBuscar=" + frmBuscarArma.defensaBuscarArmaMax.value.trim();
    sArmaBuscar += "&armaEnUso=" + frmBuscarArma.radioUsoArma.value.trim();
    sArmaBuscar += "&armaOrdena=" + frmBuscarArma.radioOrdenarArma.value.trim();
    sArmaBuscar = encodeURI(sArmaBuscar);

    $.ajax({
        url: "./php/busquedas/buscaArma.php",
        dataType: 'json',
        data: sArmaBuscar,
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaBuscaArma,
    });
}

function respuestaBuscaArma(oDatos, sStatus, oXHR) {
    if (oDatos.error) {
        //alert(oDatos.mensaje);
        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        if (oDatos.arma.length == 0) {
            sTabla = "<h4>No hay armas con esos datos</h4>";
        } else {
            var sTabla = '<table border="2" class="tabla">';

            sTabla += '<thead><tr><th colspan="5" style="text-align:center">Armas encontradas</th></tr></thead>';

            sTabla += '<thead><tr><th>Nombre</th><th>Ataque</th><th>Defensa</th><th>Tipo</th><th>Descripcion</th></thead>';

            sTabla += "<tbody>";
            for (var i = 0; i < oDatos.arma.length; i++) {
                sTabla += "<tr>";
                sTabla += "<td>" + oDatos.arma[i].arma_nombre + "</td>";
                sTabla += "<td>" + oDatos.arma[i].arma_ataque + "</td>";
                sTabla += "<td>" + oDatos.arma[i].arma_defensa + "</td>";
                sTabla += "<td>" + oDatos.arma[i].arma_tipo + "</td>";
                sTabla += "<td>" + oDatos.arma[i].arma_observ + "</td>";
                sTabla += "</tr>";
            }

            sTabla += "</tbody></table>";
            // sTabla += "<br><br>";
        }

        $("#armaEncontrada").html(sTabla);
        $("#armaEncontrada").removeClass("invisible");
    }
}

// Búsqueda de escenario

function busquedaEscenario() {
    let arrayTipoEsc = [];

    //Por cada elemento seleccionado del combo de tipo
    for (let i = 0; i < frmBuscarEscenario.lstTipoBuscarEsc.selectedOptions.length; i++) {
        //lo metemos en el arrayTipoEsc
        arrayTipoEsc.push(frmBuscarEscenario.lstTipoBuscarEsc.selectedOptions[i].value);
    }

    let sEscBuscar = "tipoEscBuscar=" + arrayTipoEsc;
    sEscBuscar += "&nivMinEscBusc=" + frmBuscarEscenario.nivelBuscarEscMin.value.trim();
    sEscBuscar += "&nivMaxEscBusc=" + frmBuscarEscenario.nivelBuscarEscMax.value.trim();
    sEscBuscar += "&usoEscBusc=" + frmBuscarEscenario.radioUsoEsc.value.trim();
    sEscBuscar += "&ordEscBusc=" + frmBuscarEscenario.radioOrdenarEsc.value.trim();

    sEscBuscar = encodeURI(sEscBuscar);

    $.ajax({
        url: "./php/busquedas/buscaEscenario.php",
        dataType: 'xml',
        data: sEscBuscar,
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaBuscaEsc,
    });
}

function respuestaBuscaEsc(oXML) {

    var posEsc;
    var escEncotrado = oXML.getElementsByTagName("escenario");


    var table = "<table border='2' class='tabla'>";
    table += "<thead><tr><th colspan='4' style='text-align:center'>Escenarios encontrados</th></tr></thead>";
    table += "<tr><th>Nombre</th><th>Tipo</th><th>Nivel</th><th>Descripción</th></tr>";

    for (posEsc = 0; posEsc < escEncotrado.length; posEsc++) {
        table += "<tr><td>" + escEncotrado[posEsc].getElementsByTagName("escenario_nombre")[0].textContent + "</td>";
        table += "<td>" + escEncotrado[posEsc].getElementsByTagName("escenario_tipo")[0].textContent + "</td>";
        table += "<td>" + escEncotrado[posEsc].getElementsByTagName("escenario_nivel")[0].textContent + "</td>";
        table += "<td>" + escEncotrado[posEsc].getElementsByTagName("escenario_observ")[0].textContent + "</td></tr>";
    }
    table += "</table>";

    $("#escenarioEncontrado").html(table);
    $("#escenarioEncontrado").removeClass("invisible");

}

// Búsqueda de partida

function busquedaPartida() {
    let arrayNombEsc = [];

    //Por cada elemento seleccionado del combo de tipo
    for (let i = 0; i < frmBuscarPartida.lstEscePartidaBuscar.selectedOptions.length; i++) {
        //lo metemos en el arrayNombEsc
        arrayNombEsc.push(frmBuscarPartida.lstEscePartidaBuscar.selectedOptions[i].value);
    }

    let sPartBuscar = "nombEscBuscar=" + arrayNombEsc;
    sPartBuscar += "&nivMinPartBusc=" + frmBuscarPartida.nivelBuscarPartidaMin.value.trim();
    sPartBuscar += "&nivMaxPartBusc=" + frmBuscarPartida.nivelBuscarPartidaMax.value.trim();
    sPartBuscar += "&fecMinPartBusc=" + frmBuscarPartida.fechaBuscarPartidaMin.value.trim();
    sPartBuscar += "&fecMaxPartBusc=" + frmBuscarPartida.fechaBuscarPartidaMax.value.trim();
    sPartBuscar += "&masterPartBusc=" + frmBuscarPartida.masterBuscarPartida.value.trim();
    sPartBuscar += "&ordenPartBusc=" + frmBuscarPartida.radioOrdPartida.value.trim();

    sPartBuscar = encodeURI(sPartBuscar);

    $.ajax({
        url: "./php/busquedas/buscaPartida.php",
        dataType: 'HTML',
        data: sPartBuscar,
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaBuscaPart,
    });
}

function respuestaBuscaPart(oTabla){
    $("#partidaEncontrada").html(oTabla);
    $("#partidaEncontrada").removeClass("invisible");
}

//------------------------------------------------------
//
//
//Ediciones
//
//
//------------------------------------------------------

// EditarPerfil

function perfilAEditar() {
    // $.getJSON("./php/getPerfilEditar.php", {
    //         nick: sessionStorage.getItem('nick')
    //     },
    //     cargarEditarPerfil
    // );
    /////////////////////////////
    var oDatosEditar = sessionStorage.getItem('nick');

    var sDatos = "nick=" + JSON.stringify(oDatosEditar);

    $.post("./php/getPerfilEditar.php",
        sDatos,
        cargarEditarPerfil,
        "json");
}

function cargarEditarPerfil(datos, textStatus, jqXHR) {

    //Metemos los datos del perfil a editar en los inputs del formulario

    document.getElementById("nombreCrear").value = datos[0].jugador_nombre;
    document.getElementById("nickCrear").value = datos[0].jugador_nick;
    document.getElementById("mailCrear").value = datos[0].jugador_email;
    document.getElementById("passCrear").value = datos[0].jugador_password;
    document.getElementById("passConfirmar").value = datos[0].jugador_password;
    document.getElementById("lstEstadoJugador").value = datos[0].jugador_estado;

    // $('#nickCrear').val(datos.jugador_nick);

    //Ocultamos el botón "crear"
    // $("#btnCrearPerfil").css('display', 'none');

    //Mostramos el formulario
    $("#frmCrearPerfil").show();
}


function valEditarPerfil(){
    let sError = "";
    let bCorrecto = true; //Creamos el formulario como válido

    // Validación Nombre Usuario
    let sNomJugador = frmCrearPerfil.nombreCrear.value.trim();
    let oRegEditNomJug = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,50}$/;

    if (!oRegEditNomJug.test(sNomJugador)) {
        bCorrecto = false;
        sError = "\n- El nombre de jugador es incorrecto";
        frmCrearPerfil.nombreCrear.classList.add("falloValid");
        frmCrearPerfil.nombreCrear.focus();
    } else {
        frmCrearPerfil.nombreCrear.classList.remove("falloValid");
    }

    // Validación Nick
    let sNickJugador = frmCrearPerfil.nickCrear.value.trim();
    let oRegEditNickJug = /^(([A-Za-záéíóúÁÉÍÓÚ1-9-_])|(\s)){4,15}$/;

    if (!oRegEditNickJug.test(sNickJugador)) {
        bCorrecto = false;
        sError = "\n- El nick de jugador es incorrecto";
        frmCrearPerfil.nickCrear.classList.add("falloValid");
        frmCrearPerfil.nickCrear.focus();
    } else {
        frmCrearPerfil.nickCrear.classList.remove("falloValid");
    }

    //Validación Email
    let sMailJugador = frmCrearPerfil.mailCrear.value.trim();
    let oRegEditMailJug = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if (!oRegEditMailJug.test(sMailJugador)) {
        bCorrecto = false;
        sError = "\n- El formato del e-mail es incorrecto";
        frmCrearPerfil.mailCrear.classList.add("falloValid");
        frmCrearPerfil.mailCrear.focus();
    } else {
        frmCrearPerfil.mailCrear.classList.remove("falloValid");
    }

    // Validación Contraseñas
    //Primera Contraseña
    let sContras1 = frmCrearPerfil.passCrear.value.trim();
    let oRegEditContrJug = /^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{4,15}$/;

    if (!oRegEditContrJug.test(sContras1)) {
        if (bCorrecto) {
            frmCrearPerfil.passCrear.focus();
            bCorrecto = false;
        }
        sError += "\n- La contraseña no cumple el formato (de 4 a 15 caracteres)";
        frmCrearPerfil.passCrear.classList.add("falloValid");
    } else {
        frmCrearPerfil.passCrear.classList.remove("falloValid");
    }

    //Segunda Contraseña
    let sContras2 = frmCrearPerfil.passConfirmar.value.trim();
    // let oRegCreaContrJug = /^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{4,15}$/;

    if (!oRegEditContrJug.test(sContras2)) {
        if (bCorrecto) {
            frmCrearPerfil.passConfirmar.focus();
            bCorrecto = false;
        }
        sError += "\n- La contraseña no cumple el formato (de 4 a 15 caracteres)";
        frmCrearPerfil.passConfirmar.classList.add("falloValid");
    } else {
        frmCrearPerfil.passConfirmar.classList.remove("falloValid");
    }

    //Confirmamos que ambas contraseñas son iguales
    if (sContras1 != sContras2) {
        frmCrearPerfil.passConfirmar.focus();
        bCorrecto = false;
        sError += "\n- Las contraseñas son distintas";
        frmCrearPerfil.passConfirmar.classList.add("falloValid");
    } else {
        frmCrearPerfil.passConfirmar.classList.remove("falloValid");
    }

    //Se ha elegido un estado
    let sEstadoJug = frmCrearPerfil.lstEstadoJugador.value.trim();

    if (sEstadoJug == 0) {
        bCorrecto = false;
        sError += "\n- No ha elegido un estado para su perfil";
        frmCrearPerfil.lstEstadoJugador.classList.add("falloValid");
    } else {
        frmCrearPerfil.lstEstadoJugador.classList.remove("falloValid");
    }

    //Si todo está correctos, llamamos a la siguiemnte función
    if (bCorrecto) {
        editJugador();
    } else {
        //alert(sError);
        $("#contenido").text(sError);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

    }

}

function editJugador(){
let oAjax = instanciarXHR();
    let sEnviarPerfilEdit = "nombJugador=" + frmCrearPerfil.nombreCrear.value.trim();
    sEnviarPerfilEdit += "&nickJugador=" + frmCrearPerfil.nickCrear.value.trim();
    sEnviarPerfilEdit += "&mailJugador=" + frmCrearPerfil.mailCrear.value.trim();
    sEnviarPerfilEdit += "&contrasenaJugador=" + frmCrearPerfil.passCrear.value.trim();
    sEnviarPerfilEdit += "&estadoJugador=" + frmCrearPerfil.lstEstadoJugador.value.trim();
    sEnviarPerfilEdit += "&perfilEditar=" + sessionStorage.getItem('nick')
    sEnviarPerfilEdit = encodeURI(sEnviarPerfilEdit);

    //Configurar la llamada --> Asincrono por defecto
    oAjax.open("POST", encodeURI("./php/ediciones/editJugador.php"));

    //Asociar manejador de evento de la respuesta
    oAjax.addEventListener("readystatechange", accionEditJugador, false);

    // Cabecera POST
    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //Llamamos
    oAjax.send(sEnviarPerfilEdit);
}

function accionEditJugador(){
 var oAjax = this;
    // Proceso la respuesta cuando llega
    if (oAjax.readyState == 4 && oAjax.status == 200) {
        var oRespuesta = JSON.parse(oAjax.responseText);


        if (oRespuesta.error == 0) {
            //alert(oRespuesta.mensaje);
            $("#contenido").text(oRespuesta.mensaje);

            $("#popup1").css("display", "block");
            $("#avisos").addClass("superior");

            $("#frmCrearPerfil").hide();
            frmCrearPerfil.reset();
            $("#fondo").removeClass("baseDesenfocada");
            $("#fondo").addClass("baseNormal");

        } else {
            //alert(oRespuesta.mensaje);

            $("#contenido").text(oRespuesta.mensaje);

            $("#popup1").css("display", "block");
            $("#avisos").addClass("superior");

        }
    }
}

// Editar/Eliminar Personajes

function cargarPersonajes(){
    var oDatosEditar = sessionStorage.getItem('nick');

    var sDatos = "nick=" + JSON.stringify(oDatosEditar);

    $.get("./php/getListaPersonajes.php",
        sDatos,
        cargarTablaPersonajes,
        "json");
}

function cargarTablaPersonajes(oDatos, sStatus, oXHR){
    var sNick = sessionStorage.getItem('nick');
    $("#personajesLogueado").text("Personajes de "+sNick);

    if (oDatos.error) {
        //alert(oDatos.mensaje);
        $("#contenido").text(oDatos.mensaje);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");
    } else {
        if (oDatos.personaje.length == 0) {
            sTabla = "<h4>Aún no has creado ningún personaje</h4>";
        } else {
            var sTabla = "<table border='2' class='tabla'>";

            sTabla += "<thead><tr><th colspan='7' style='text-align:center'>Personajes encontrados</th></tr></thead>";

            sTabla += "<thead><tr><th>Nombre</th><th>Tipo</th><th>Nivel</th><th>Arma</th><th>Descripcion</th><th>Editar</th><th>Eliminar</th></thead>";

            sTabla += "<tbody>";
            for (var i = 0; i < oDatos.personaje.length; i++) {
                sTabla += "<tr>";
                sTabla += "<td>" + oDatos.personaje[i].personaje_nombre + "</td>";
                sTabla += "<td>" + oDatos.personaje[i].tipo_personaje + "</td>";
                sTabla += "<td>" + oDatos.personaje[i].personaje_xp + "</td>";
                sTabla += "<td>" + oDatos.personaje[i].arma_nombre + "</td>";
                sTabla += "<td>" + oDatos.personaje[i].personaje_observ + "</td>";
                // sTabla += "<td><button class='btn btn-warning' name='btnEditarPersonaje' id='btnEditarPersonaje'><i class='fa fa-edit'></i></button></td>";
                // sTabla += "<td><button class='btn btn-danger' name='btnBorrarPersonaje' id='btnBorrarPersonaje'><i class='fa fa-eraser'></i></button></td>";
                sTabla += "<td><i class='fa fa-edit' name='btnEditarPersonaje' id='btnEditarPersonaje'></i></td>";
                sTabla += "<td><button class='btn btn-danger' name='btnBorrarPersonaje' id='btnBorrarPersonaje'><i class='fa fa-eraser'></i></button></td>";
                sTabla += "<input id='idEliminar' type='hidden' value='"+oDatos.personaje[i].personaje_id+"'>";
                sTabla += "</tr>";
            }

            sTabla += "</tbody></table>";
        }

        $("#tablaPersonajesLogueado").html(sTabla);
        $("#tablaPersonajesLogueado").removeClass("invisible");
    }
}

function eliminarPersonaje(){
    
    let sIdEliminar = frmTablaPartida.idEliminar.value.trim();
    alert(sIdEliminar);
}

function resultadoElimPers(){
    cargarPersonajes();
}

function valEditPersonaje() {
    let sError = "";
    let bCorrecto = true; //Creamos el formulario como válido

    // Validación nombre personaje
    let sNombrePersonaje = frmEditPersonaje.nombrePersonaje.value.trim();
    let oRegCreaNombPers = /^(([A-Za-záéíóúÁÉÍÓÚ1-9-_])|(\s)){4,15}$/;

    if (!oRegCreaNombPers.test(sNombrePersonaje)) {
        bCorrecto = false;
        sError = "\n- El nombre del personaje es incorrecto";
        frmEditPersonaje.nombrePersonaje.classList.add("falloValid");
        frmEditPersonaje.nombrePersonaje.focus();
    } else {
        frmEditPersonaje.nombrePersonaje.classList.remove("falloValid");
    }

    // Se ha elegido tipo de personaje
    let sTipoPers = frmEditPersonaje.lstTipoPersonaje.value.trim();

    if (sTipoPers == 0) {
        bCorrecto = false;
        sError += "\n- No ha escogido tipo de personaje";
        frmEditPersonaje.lstTipoPersonaje.classList.add("falloValid");
    } else {
        frmEditPersonaje.lstTipoPersonaje.classList.remove("falloValid");
    }

    // Se ha escogido arma
    let sArmaPers = frmEditPersonaje.lstArmasPersonaje.value.trim();

    if (sArmaPers == 0) {
        bCorrecto = false;
        sError += "\n- No ha elegido arma para su personaje";
        frmEditPersonaje.lstArmasPersonaje.classList.add("falloValid");
    } else {
        frmEditPersonaje.lstArmasPersonaje.classList.remove("falloValid");
    }

    //Se ha rellenado el campo descripción
    let sDescPersonaje = frmEditPersonaje.descripcionPersonaje.value.trim();

    if (sDescPersonaje == '') {
        bCorrecto = false;
        sError += "\n- No ha descrito a su personaje";
        frmEditPersonaje.descripcionPersonaje.classList.add("falloValid");
    } else {
        frmEditPersonaje.descripcionPersonaje.classList.remove("falloValid");
    }

    //Si todo está correctos, llamamos a la siguiemnte función
    if (bCorrecto) {
        editPersonaje();
    } else {
        //alert(sError);
        $("#contenido").text(sError);

        $("#popup1").css("display", "block");
        $("#avisos").addClass("superior");

    }
}

// Editar/Eliminar Partidas

function cargarPartidas(){
    var oDatosEditar = sessionStorage.getItem('nick');

    var sDatos = "nick=" + JSON.stringify(oDatosEditar);

    $.ajax({
        url: "./php/getListaPartidas.php",
        dataType: 'HTML',
        data: sDatos,
        cache: false,
        async: true, // por defecto
        method: "GET",
        success: cargarTablaPartidas,
    });
}

function cargarTablaPartidas(oTabla){
    var sNick = sessionStorage.getItem('nick');
    $("#partidasLogueado").text("Partidas en las que "+sNick+" es el master");

    $("#tablaPartidasLogueado").html(oTabla);
    $("#tablaPartidasLogueado").removeClass("invisible");
}