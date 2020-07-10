function asignarOrigen(iata_origen, descripcion) {
  document.getElementById("VueloOrigen").focus();
  document.getElementById("VueloOrigen").value = iata_origen;
  document.getElementById("VueloOrigenmostrar").value = descripcion;
  document.getElementById("VueloOrigen").blur();
  document.getElementById("VueloOrigenmostrar").focus();
  document.getElementById("VueloOrigenmostrar").blur();
  document.getElementById("VueloDestinomostrar").focus();
  $('#VueloSalida').datepicker("hide");
  $('#VueloSalida').datepicker("destroy");
}

function asignarDestino(iata_destino, descripcion) {
  document.getElementById("VueloDestino").focus();
  document.getElementById("VueloDestino").value = iata_destino;
  document.getElementById("VueloDestinomostrar").value = descripcion;
  document.getElementById("VueloDestino").blur();
  //document.getElementById("VueloDestinomostrar").blur();
  $('#VueloSalida').datepicker("destroy");
  $('#VueloSalida').datepicker("hide");
  document.getElementById("VueloDestino").focus();
}

function limpiarDestino() {
  document.getElementById("VueloDestinomostrar").value = '';
  document.getElementById("VueloSalida").value = '';
  document.getElementById("VueloRegreso").value = '';
  $('#VueloSalida').datepicker("destroy");
  $('#VueloSalida').datepicker("hide");
  $('#VueloRegreso').datepicker("destroy");
  $('#VueloRegreso').datepicker("hide");
}

function limpiarCalendario() {
  document.getElementById("VueloSalida").value = '';
  document.getElementById("VueloRegreso").value = '';
  $('#VueloSalida').datepicker("destroy");
  $('#VueloSalida').datepicker("hide");
  $('#VueloRegreso').datepicker("destroy");
  $('#VueloRegreso').datepicker("hide");
}

function activarCalendario(idioma=null) {
  idioma = 'es';
  local=idioma;
  if(idioma=='en'){
    local="";
  }

  if (document.getElementById("VueloDestino").value != '' && document.getElementById("VueloOrigen").value != '') {
    $(function() {
      $('#VueloSalida').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: '+2d'
      });
    });
    $('#VueloSalida').datepicker( $.datepicker.regional[ local ] );
  } else {
    $('#VueloSalida').datepicker("hide");
    $('#VueloSalida').datepicker("destroy");
    if (idioma == 'en') {
      emitir_mensaje("You must select your route");
    } else {
      emitir_mensaje('Debe seleccionar su ruta');
    }
  }

}

function activarCalendarioVuelta() {

  fecha = document.getElementById("VueloSalida").value;
  $(function() {
    $('#VueloRegreso').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: fecha
    });
  });

}

function restringirFechaInicial() {
  fecha = document.getElementById("VueloSalida").value;
  $("#VueloRegreso").datepicker("option", "minDate", fecha);
  fecha2 = document.getElementById("VueloRegreso").value;
  if (fecha2 != '' && fecha2 < fecha) {
    document.getElementById("VueloRegreso").value = '';
    $("#VueloRegreso").val() = '';
  }

}

function activarDiasIda(fecha,dom, lun, mar, mie, jue, vie, sab, domv, lunv, marv, miev, juev, viev, sabv) {
  $('#VueloSalida').datepicker("destroy");
  $('#VueloRegreso').datepicker("destroy");
  $('#VueloRegreso').datepicker("hide");
  $(function() {
    $('#VueloSalida').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: fecha,
      maxDate: '2019-12-31',
      onClose: function(selectedDate) {
        $("#VueloRegreso").datepicker("option", "defaultDate", "minDate", selectedDate);
      },
      beforeShowDay: function(date) {
        var show = true;

        switch (date.getDay()) {
          case 0: // Domingos
            if (dom == 0) {
              show = false;
            }
            break;
          case 1: // Lunes
            if (lun == 0) {
              show = false;
            }
            break;
          case 2: // Martes
            if (mar == 0) {
              show = false;
            }
            break;
          case 3: // Miercoles
            if (mie == 0) {
              show = false;
            }
            break;
          case 4: // Jueves
            if (jue == 0) {
              show = false;
            }
            break;
          case 5: // Viernes
            if (vie == 0) {
              show = false;
            }
            break;
          case 6: // Sabado
            if (sab == 0) {
              show = false;
            }
            break;
        }

        return [show];

      },
    });
  });
  activarDiasVuelta(domv, lunv, marv, miev, juev, viev, sabv);
}


function activarDiasVuelta(dom, lun, mar, mie, jue, vie, sab) {
  $(function() {
    $('#VueloRegreso').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: '+2d',
      maxDate: '2019-12-31',
      onClose: function(selectedDate) {
        //$( "#VuelosRegreso" ).datepicker( "option", "defaultDate", "minDate", selectedDate );
      },
      beforeShowDay: function(date) {
        var show = true;

        switch (date.getDay()) {
          case 0: // Domingos
            if (dom == 0) {
              show = false;
            }
            break;
          case 1: // Lunes
            if (lun == 0) {
              show = false;
            }
            break;
          case 2: // Martes
            if (mar == 0) {
              show = false;
            }
            break;
          case 3: // Miercoles
            if (mie == 0) {
              show = false;
            }
            break;
          case 4: // Jueves
            if (jue == 0) {
              show = false;
            }
            break;
          case 5: // Viernes
            if (vie == 0) {
              show = false;
            }
            break;
          case 6: // Sabado
            if (sab == 0) {
              show = false;
            }
            break;
        }

        return [show];

      },
    });
  });
}



function soloida(e) {

    if (document.getElementById("solo_ida").checked == true){
      document.getElementById("VueloRegreso").value = "",
      document.getElementById("VueloRegreso").disabled = !0,
      document.getElementById("VueloRegreso").style.display = "none",
      document.getElementById("divregreso").style.display = "none",
      document.getElementById("VueloSalida").value = "",
      e.withReturn.value = "false"
    }else{
        document.getElementById("VueloRegreso").disabled = !1,
        document.getElementById("VueloRegreso").style.display = "block",
        document.getElementById("VueloRegreso").value = "",
        document.getElementById("divregreso").style.display = "block",
        document.getElementById("VueloSalida").value = "",
        e.withReturn.value = "true"
    }

}

function idaVuelta(e) {

  document.getElementById("VueloRegreso").disabled = !1,
    document.getElementById("VueloRegreso").style.visibility = "visible",
    document.getElementById("VueloRegreso").value = "",
    document.getElementById("divregreso").style.visibility = "visible",
    document.getElementById("VueloSalida").value = "",
    e.withReturn.value = "true"
}


function enviar(e, a) {
  //console.log(e.withReturn.value)
  //e ES MI FORMULARIO DECLARADO CON ESE NOMBRE DE VARIABLE
  var dia_ida = 0,
    mes_ida = 0,
    anio_ida = 0,
    dia_vuelta = 0,
    mes_vuela = 0,
    anio_vuelta = 0,

    //SUBSTRING PARA SEPARAR LA FECHA IDA
    dia_ida = e.VueloSalida.value.substring(8, 10),
    mes_ida = e.VueloSalida.value.substring(5, 7),
    anio_ida = e.VueloSalida.value.substring(0, 4),
    //ASIGNO FORMATO A LA FECHA IDA 00-00-0000
    fecha_ida = dia_ida + '-' + mes_ida + '-' + anio_ida;

  if (e.VueloRegreso.value != '') {
    //SUBSTRING PARA SEPARAR LA FECHA VUELTA
    dia_vuelta = e.VueloRegreso.value.substring(8, 10),
      mes_vuelta = e.VueloRegreso.value.substring(5, 7),
      anio_vuelta = e.VueloRegreso.value.substring(0, 4),
      //ASIGNO FORMATO A LA FECHA VUELTA 00-00-0000
      fecha_vuelta = dia_vuelta + '-' + mes_vuelta + '-' + anio_vuelta;
  } else {
    //SI EL VUELO EL SOLO IDA LA FECHA VUELTA LA DECLARO EN BLANCO
    fecha_vuelta = "";
  }

  if (
    e.passengers_ADT.value = "",
    e.passengers_INF.value = "",
    e.passengers_CNN.value = "",
    //e.passengers_MAY.value = "",
    padres = parseFloat(e.adultos.value),
    ninos = parseFloat(e.ninos.value),
    mayores = parseFloat(e.mayores.value),
    bebes = parseFloat(e.bebes.value),
    adultos = padres + mayores, //SUMA DE PASAJEROS ADULTOS Y MAYORES 3ERA EDAD
    total_pasajeros = padres + ninos + bebes + mayores, // SUMA TOTAL DE TODOS LOS PASAJEROS

    "" == e.VueloOrigen.value)
    return "en" == a ? emitir_mensaje("You must select a origin") : emitir_mensaje("Debe seleccionar un origen"), !1;

  if (
    "false" == e.withReturn &&
    ("MAD" == e.VueloDestino.value ||
      "BOG" == e.VueloDestino.value ||
      "PTY" == e.VueloDestino.value ||
      "HAV" == e.VueloDestino.value ||
      "EZE" == e.VueloDestino.value ||
      "MGA" == e.VueloDestino.value))
    return "en" == a ? emitir_mensaje("Not allowed to buy only one way for international flights") : emitir_mensaje("No se permite comprar solo ida para vuelos internacionales"), !1;

  if (
    "" == e.VueloDestino.value)
    return "en" == a ? emitir_mensaje("You must select a destination") : emitir_mensaje("Debe seleccionar un destino"), !1;

  if (e.VueloOrigen.value == e.VueloDestino.value)
    return "en" == a ? emitir_mensaje("The origin and destination match") : emitir_mensaje("El origen y el destino coinciden"), !1;

  if ("" == e.VueloSalida.value)
    return "en" == a ? emitir_mensaje("You must select a departure date") : emitir_mensaje("Debe seleccionar una fecha de salida"), !1;

  if ("true" == e.withReturn.value && "" == e.VueloRegreso.value)
    return "en" == a ? emitir_mensaje("You must select a return date") : emitir_mensaje("Debe seleccionar una fecha de retorno"), !1;

  if (0 == total_pasajeros)
    return "en" == a ? emitir_mensaje("You must select at least one passenger") : emitir_mensaje("Debe seleccionar al menos un pasajero"), !1;

  if (0 == padres && bebes > padres)
    return "en" == a ? emitir_mensaje("You must select at least one adult") : emitir_mensaje("Debe seleccionar al menos un adulto"), !1;

  if (0 == padres && ninos > padres)
    return "en" == a ? emitir_mensaje("You must select at least one adult") : emitir_mensaje("Debe seleccionar al menos un adulto"), !1;

  if (bebes > padres)
    return "en" == a ? emitir_mensaje("Only one infant is accepted by adult") : emitir_mensaje("Sólo se acepta un bebé por adulto"), !1;

  if (total_pasajeros > 4)
    return "en" == a ? emitir_mensaje("You must select a maximum of 4 passengers") : emitir_mensaje("Debe seleccionar un máximo de 4 pasajeros"), !1;

  if (mayores > 0 && padres > 0)
    return "en" == a ? emitir_mensaje("You can not make reservation, adult and higher is not allowed") : emitir_mensaje("No puede realizar la reserva, un adulto y un mayor no esta permitido"), !1;


  //DESDE ESTE PUNTO SE EMPIEZAN A RECOGER LAS VARIABLES QUE SE ENVIARAN A LA URL POR POST
    e.passengers_ADT.value = e.adultos.value, //CANTIDAD DE PASAJEROS ADULTOS
    e.passengers_INF.value = e.bebes.value, //CANTIDAD DE PASAJEROS BEBES
    e.passengers_CNN.value = e.ninos.value, //CANTIDAD DE PASAJEROS NINOS
    e.passengers_MAY.value = e.mayores.value,//CANTIDAD DE PASAJEROS MAYORES

    e.action.value = e.action.value, //VARIABLE FIJA
    e.new.value = e.new.value, //VARIABLE FIJA
    e.sesionId.value = e.sesionId.value, //VARIABLE FIJA

    e.sesionIP.value = e.sesionIP.value, //IP DEL USUARIO QUE SOLICITA BOLETO

    e.withReturn.value = e.withReturn.value, //
    e.departure_airport.value = e.VueloOrigen.value, //ORIGEN DEL VUELO
    e.arrival_airport.value = e.VueloDestino.value, //DESTINO DEL VUELO
    e.departure_date.value = fecha_ida, //FECHA DE IDA DEL VUELO
    e.arrival_date.value = fecha_vuelta; //FECHA DE VUELTA DEL VUELO


  //MANDO LAS VARIABLES POR METODO POST A LA URL ESPECIFICADA
  e.action = "ws3dyn/server/disponibilidad.php", e.method = "post", e.submit()
  //e.action = "http://200.44.156.173/media/seguimiento/estatus_vuelo/test.php", e.method = "post", e.submit()

}

function emitir_mensaje(n) {
  swal({
    title: n,
    showCancelButton: !1,
    confirmButtonColor: "#ee7500",
    confirmButtonText: "OK",
    closeOnConfirm: !1
  })
}









function proximamente(idioma) {

  if (idioma == 'en') {
    emitir_mensaje("Coming soon");
  } else {
    emitir_mensaje('Proximamente');
  }
  return false;

}

function alerta(e, a) {
  return 0 != e ? ("en" == a ? emitir_mensaje("We are working to offer you a better service. Sorry for the inconvenience caused") : emitir_mensaje("Estamos trabajando para ofrecerte un mejor servicio. Disculpe las molestias ocasionadas"), !1) : void 0
}

function alerta_equipaje(idioma) {
	ORIGEN=document.getElementById("VueloOrigen").value
	DESTINO=document.getElementById("VueloDestino").value
	if(idioma=='en' && ORIGEN=="AUA" && DESTINO!="LSP" || idioma=='en' && ORIGEN!="LSP" && DESTINO=="AUA" || idioma=='en' && ORIGEN=="GYE" || idioma=='en' && DESTINO=="GYE" || idioma=='en' && ORIGEN=="HAV" || idioma=='en' && DESTINO=="HAV" || idioma=='en' && ORIGEN=="MGA" || idioma=='en' && DESTINO=="MGA" || idioma=='en' && ORIGEN=="PTY" || idioma=='en' && DESTINO=="PTY" || idioma=='en' && ORIGEN=="SDQ" || idioma=='en' && DESTINO=="SDQ")
		{
			emitir_mensaje('For international flight with Embraer allowed checked baggage is 23kg and hand baggage 5kg');
			return false;
		}else if(ORIGEN=="AUA" && DESTINO!="LSP" ||  ORIGEN!="LSP" && DESTINO=="AUA" || ORIGEN=="GYE" || DESTINO=="GYE" || ORIGEN=="HAV" || DESTINO=="HAV" || ORIGEN=="MGA" || DESTINO=="MGA" || ORIGEN=="PTY" || DESTINO=="PTY" || ORIGEN=="SDQ" || DESTINO=="SDQ"){
			 emitir_mensaje("Para vuelos internacionales con Embraer 190 el equipaje facturado permitido es de una pieza de 23kg y equipaje de mano de una pieza de 5kg");
			 return false;
		}else if(ORIGEN=="AUA" && DESTINO=="LSP" ||  ORIGEN=="LSP" && DESTINO=="AUA"){
			 emitir_mensaje("Para vuelos internacionales con Caravan solo es permitido una pieza de equipaje facturado de 10 kg y equipaje de mano de 5Kg");
			 return false;
		}
}


function ruta_internacional(idioma) {

  ORIGEN = document.getElementById("VueloOrigen").value
  DESTINO = document.getElementById("VueloDestino").value
  if (idioma == 'en' && ORIGEN == "VVI" || idioma == 'en' && DESTINO == "VVI") {
    emitir_mensaje("International flights coming soon");
    document.getElementById("VueloOrigenmostrar").value = "";
    document.getElementById("VueloOrigen").value = "";
    document.getElementById("VueloDestinomostrar").value = "";
    document.getElementById("VueloDestino").value = "";
    return false;
  } else if (ORIGEN == "VVI" || DESTINO == "VVI" ) {
    emitir_mensaje('Vuelos internacionales proximamente');
    document.getElementById("VueloOrigenmostrar").value = "";
    document.getElementById("VueloOrigen").value = "";
    document.getElementById("VueloDestinomostrar").value = "";
    document.getElementById("VueloDestino").value = "";
    return false;
  }
}


function noterceraedad() {

  0 != document.getElementById("adultos").selectedIndex || 0 != document.getElementById("ninos").selectedIndex || 0 != document.getElementById("bebes").selectedIndex ? (document.getElementById("divmayores").style.visibility = "hidden",
    document.getElementById("mayores").selectedIndex = 0,
    document.getElementById("mayores").style.visibility = "hidden",
    document.getElementById("mayores").disabled = !0) : anular_mayores()
}

function anular_mayores() {

  anularmayores = document.getElementById("VueloDestino").value,
    document.getElementById("mayores").value = 0,
    document.getElementById("adultos").value = 0,
    document.getElementById("ninos").value = 0,
    document.getElementById("bebes").value = 0,
    "MAD" == anularmayores || "BOG" == anularmayores || "PTY" == anularmayores || "HAV" == anularmayores || "EZE" == anularmayores || "MGA" == anularmayores ? (document.getElementById("divmayores").style.visibility = "hidden",
      document.getElementById("mayores").style.visibility = "hidden",
      document.getElementById("mayores").disabled = !0,
      document.getElementById("adultos").style.visibility = "visible",
      document.getElementById("adultos").disabled = !1,
      document.getElementById("ninos").style.visibility = "visible",
      document.getElementById("ninos").disabled = !1,
      document.getElementById("bebes").style.visibility = "visible",
      document.getElementById("bebes").disabled = !1) : (document.getElementById("divmayores").style.visibility = "visible",
      document.getElementById("mayores").style.visibility = "visible",
      document.getElementById("mayores").disabled = !1)
}

function terceraedad() {

  0 != document.getElementById("mayores").selectedIndex ? (document.getElementById("divadultos").style.visibility = "hidden",
    document.getElementById("adultos").selectedIndex = 0,
    document.getElementById("adultos").disabled = !0,
    document.getElementById("adultos").style.visibility = "hidden",
    document.getElementById("divninos").style.visibility = "hidden",
    document.getElementById("ninos").selectedIndex = 0,
    document.getElementById("ninos").disabled = !0,
    document.getElementById("ninos").style.visibility = "hidden",
    document.getElementById("divbebes").style.visibility = "hidden",
    document.getElementById("bebes").selectedIndex = 0,
    document.getElementById("bebes").disabled = !0,
    document.getElementById("bebes").style.visibility = "hidden") : (document.getElementById("divadultos").style.visibility = "visible",
    document.getElementById("adultos").disabled = !1,
    document.getElementById("adultos").style.visibility = "visible",
    document.getElementById("divninos").style.visibility = "visible",
    document.getElementById("ninos").disabled = !1,
    document.getElementById("ninos").style.visibility = "visible",
    document.getElementById("divbebes").style.visibility = "visible",
    document.getElementById("bebes").disabled = !1,
    document.getElementById("bebes").style.visibility = "visible")
}



function Cedula(e, a) {
  return 0 != e ? ("en" == a ? emitir_mensaje("Must submit a copy of the identity card at the airport") : emitir_mensaje("Deberá presentar copia de la cédula de identidad en el aeropuerto"), !1) : void 0
}

function CedulaN(e, a) {
  return 0 != e ? ("en" == a ? emitir_mensaje("In case of children under 12 years and 11 months, must register the identification number of (identity card or passport) of the representative when loading data backup") : emitir_mensaje("En caso de niños menores a 12 años y 11 meses, deberá registrar el número de identificación (cédula o pasaporte) del representante cuando cargue los datos de la reserva"), !1) : void 0
}

function CedulaCH(e, a) {
  return 0 != e ? ("en" == a ? emitir_mensaje("If Infants aged between 0-2 years and 11 months, must register the identification number (identity card or passport) representative when loading data backup") : emitir_mensaje("En caso de bebes con edad comprendida entre 0-2 años y 11 meses, deberá registrar el número de identificación (cédula o pasaporte) del representante cuando cargue los datos de la reserva"), !1) : void 0
}


function verificar_origen(idioma) {

  ORIGEN_VISUALIZAR = document.getElementById("VueloOrigen").value;
  if (ORIGEN_VISUALIZAR == '') {

    if (idioma == 'en') {
      emitir_mensaje("You must select your route origin");
    } else {
      emitir_mensaje('Debe seleccionar su ruta origen');
    }

    $('#modalDestinos').modal({
      return: false
    });
    //$('#modalDestinos').modal('hide');
    $('.modal-backdrop').hide();

    return false;
  }
}

function activar_input_calendario() {

  document.getElementById("VueloSalida").disabled = false,
    document.getElementById("VueloRegreso").disabled = false
}


function abrir_modal_destino(){
  if(document.getElementById("VueloOrigen").value != ""){
    $('#modalDestinos').modal();
  }

}