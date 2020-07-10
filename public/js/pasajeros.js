$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function() {
    inicializar_popover();
});

function inicializar_popover() {
    $('#pasajeros').popover({
        content: asignar_popover,
        html: true,
        placement: "bottom",
        container: 'body'
    });
};

function menos(tp) {
    maximo_pax = 4
    switch (tp) {
        case 1:
            actual = document.getElementById("adultos").value;
            actual--;
            cantidad_adultos = document.getElementById("adultos").value = actual
            mayores = document.getElementById("mayores").value
            if (cantidad_adultos <= 1 && mayores == 0) {
                actual = 1
            }
            if (cantidad_adultos <= maximo_pax) {
                document.getElementById("add_adult").classList.remove("disabled-add-remove-icon")
            }
            if (cantidad_adultos == 1) {
                document.getElementById("remove_adult").classList.add("disabled-add-remove-icon")
            }
            if (cantidad_adultos < document.getElementById("bebes").value) {
                document.getElementById("infant").value = cantidad_adultos
                document.getElementById("bebes").value = cantidad_adultos
                document.getElementById("add_infant").classList.add("disabled-add-remove-icon")
            }
            document.getElementById("adultos").value = actual;
            break;
        case 2:
            actual = document.getElementById("ninos").value;
            actual--;
            cantidad_ninos = document.getElementById("ninos").value = actual
            if (cantidad_ninos <= 0) {
                actual = 0
            }
            if (cantidad_ninos <= maximo_pax) {
                document.getElementById("add_child").classList.remove("disabled-add-remove-icon")
            }
            if (cantidad_ninos == 0) {
                document.getElementById("remove_child").classList.add("disabled-add-remove-icon")
            }
            document.getElementById("ninos").value = actual;
            break;
        case 3:
            actual = document.getElementById("bebes").value;
            actual--;
            cantidad_bebes = document.getElementById("bebes").value = actual
            if (cantidad_bebes <= 0) {
                document.getElementById("add_infant").classList.remove("disabled-add-remove-icon")
                actual = 0
            }
            if (cantidad_bebes == 0) {
                document.getElementById("remove_infant").classList.add("disabled-add-remove-icon")
            }
            if (document.getElementById("adultos").value > cantidad_bebes) {
                document.getElementById("add_infant").classList.remove("disabled-add-remove-icon")
            }
            document.getElementById("bebes").value = actual;
            break;
        case 4:
            actual = document.getElementById("mayores").value;
            actual--;
            if (document.getElementById("mayores").value = actual <= 0) {
                document.getElementById("add_oldman").classList.remove("disabled-add-remove-icon")
                document.getElementById("add_adult").classList.add("disabled-add-remove-icon")
                actual = 0
            }
            if (document.getElementById("mayores").value == 0) {
                document.getElementById("adult").value = 1
                document.getElementById("child").value = 0
                document.getElementById("infant").value = 0
                document.getElementById("adultos").value = 1
                document.getElementById("ninos").value = 0
                document.getElementById("bebes").value = 0
                document.getElementById("add_adult").classList.remove("disabled-add-remove-icon")
                document.getElementById("add_child").classList.remove("disabled-add-remove-icon")
                document.getElementById("add_infant").classList.remove("disabled-add-remove-icon")
                document.getElementById("remove_oldman").classList.add("disabled-add-remove-icon")
            }
            document.getElementById("mayores").value = actual;
            break;
    }
}

function mas(tp) {
    maximo_pax = 4
    switch (tp) {
        case 1:
            actual = document.getElementById("adultos").value;
            actual++;
            cantidad_adultos = document.getElementById("adultos").value = actual
            if (cantidad_adultos >= maximo_pax) {
                document.getElementById("add_adult").classList.add("disabled-add-remove-icon")
                actual = maximo_pax
            }
            if (cantidad_adultos > 1) {
                document.getElementById("remove_adult").classList.remove("disabled-add-remove-icon")
            }
            if (cantidad_adultos > document.getElementById("bebes").value) {
                document.getElementById("add_infant").classList.remove("disabled-add-remove-icon")
            }
            document.getElementById("adultos").value = actual;
            break;
        case 2:
            actual = document.getElementById("ninos").value;
            actual++;
            cantidad_ninos = document.getElementById("ninos").value = actual
            if (cantidad_ninos >= maximo_pax) {
                document.getElementById("add_child").classList.add("disabled-add-remove-icon")
                actual = maximo_pax
            }
            if (cantidad_ninos > 0) {
                document.getElementById("remove_child").classList.remove("disabled-add-remove-icon")
            }
            document.getElementById("ninos").value = actual;
            break;
        case 3:
            actual = document.getElementById("bebes").value;
            actual++;
            cantidad_bebes = document.getElementById("bebes").value = actual
            if (cantidad_bebes >= maximo_pax) {
                document.getElementById("add_infant").classList.add("disabled-add-remove-icon")
                actual = maximo_pax
            }
            if (cantidad_bebes > 0) {
                document.getElementById("remove_infant").classList.remove("disabled-add-remove-icon")
            }
            if (document.getElementById("adultos").value == cantidad_bebes) {
                document.getElementById("add_infant").classList.add("disabled-add-remove-icon")
            }
            document.getElementById("bebes").value = actual;
            break;
        case 4:
            actual = document.getElementById("mayores").value;
            actual++;
            cantidad_mayores = document.getElementById("mayores").value = actual
            if (cantidad_mayores >= maximo_pax) {
                document.getElementById("add_oldman").classList.add("disabled-add-remove-icon")
                actual = maximo_pax
            }
            if (cantidad_mayores > 0) {
                document.getElementById("adult").value = 0
                document.getElementById("child").value = 0
                document.getElementById("infant").value = 0
                document.getElementById("adultos").value = 0
                document.getElementById("ninos").value = 0
                document.getElementById("bebes").value = 0
                document.getElementById("add_adult").classList.add("disabled-add-remove-icon")
                document.getElementById("remove_adult").classList.add("disabled-add-remove-icon")
                document.getElementById("add_child").classList.add("disabled-add-remove-icon")
                document.getElementById("remove_child").classList.add("disabled-add-remove-icon")
                document.getElementById("add_infant").classList.add("disabled-add-remove-icon")
                document.getElementById("remove_infant").classList.add("disabled-add-remove-icon")
                document.getElementById("remove_oldman").classList.remove("disabled-add-remove-icon")
            }
            document.getElementById("mayores").value = actual;
            break;
    }
}

function total_pax() {
    adultos = document.getElementById("adultos").value
    ninos = document.getElementById("ninos").value
    bebes = document.getElementById("bebes").value
    mayores = document.getElementById("mayores").value
    total_pasajeros = parseInt(adultos) + parseInt(ninos) + parseInt(bebes);
    input_pasajeros = '';
    if (total_pasajeros == 8) {
        document.getElementById("add_adult").classList.add("disabled-add-remove-icon")
        document.getElementById("add_child").classList.add("disabled-add-remove-icon")
        document.getElementById("add_infant").classList.add("disabled-add-remove-icon")
    } else {
        if (adultos == 4 && mayores == 0) {
            document.getElementById("add_adult").classList.remove("disabled-add-remove-icon")
        }
        if (ninos == 4 && mayores == 0) {
            document.getElementById("add_child").classList.remove("disabled-add-remove-icon")
        }
        if (bebes < 4 && adultos != bebes && mayores == 0) {
            document.getElementById("add_infant").classList.remove("disabled-add-remove-icon")
        }
    }
    if (adultos == 4 && mayores == 0) {
        document.getElementById("mensaje_adulto").className = "mensaje-visible";
    } else {
        document.getElementById("mensaje_adulto").className = "mensaje-oculto";
    }
    if (ninos == 4 && mayores == 0) {
        document.getElementById("mensaje_nino").className = "mensaje-visible";
    } else {
        document.getElementById("mensaje_nino").className = "mensaje-oculto";
    }
    if (bebes == adultos && adultos > 0 && mayores == 0) {
        document.getElementById("mensaje_bebe").className = "mensaje-visible";
    } else {
        document.getElementById("mensaje_bebe").className = "mensaje-oculto";
    }
    if (mayores == 4) {
        document.getElementById("mensaje_mayores").className = "mensaje-visible";
    } else {
        document.getElementById("mensaje_mayores").className = "mensaje-oculto";
    }
    if (total_pasajeros == 8 && mayores == 0) {
        document.getElementById("mensaje_total_pax").className = "mensaje-visible";
    } else {
        document.getElementById("mensaje_total_pax").className = "mensaje-oculto";
    }
    passangerInfoText = [];
    if (adultos > 0) {
        if (adultos > 1) {
            passangerInfoText.push('Adultos: ' + adultos);
        } else {
            passangerInfoText.push('Adulto: ' + adultos);
        }
    }
    if (ninos > 0) {
        if (adultos > 1) {
            passangerInfoText.push('Ni\u00f1os: ' + ninos);
        } else {
            passangerInfoText.push('Ni\u00f1o ' + ninos);
        }
    }
    if (bebes > 0) {
        if (bebes > 1) {
            passangerInfoText.push('Bebes: ' + bebes);
        } else {
            passangerInfoText.push('Bebe: ' + bebes);
        }
    }
    if (mayores > 0) {
        if (mayores > 1) {
            passangerInfoText.push('Adultos Mayores: ' + mayores);
        } else {
            passangerInfoText.push('Adulto mayor: ' + mayores);
        }
    }
    //$('#pasajeros').val(passangerInfoText.join(', '));
    document.getElementById("pasajeros").value = passangerInfoText.join(', ');
}

function cerrarPopover() {
    $('#pasajeros').popover('hide');
}