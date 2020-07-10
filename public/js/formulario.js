function pasajeroReembolso(){
  if (pasajero.tipo_pasajero == 'ADT' || pasajero.tipo_pasajero == 'MAY' ) {
    document.getElementById('nombre_reembolso').value=pasajero.nombre_pasajero;
    document.getElementById('apellido_reembolso').value=pasajero.apellido_pasajero;

    val=pasajero.pais_emisor;
    var sel=document.getElementById('pais_emisor_reembolso');   
    var opts = sel.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
      if (opt.value == val) {
        sel.selectedIndex = j;
        break;
      }
    }

    val=pasajero.tipo_documento;
    var sel=document.getElementById('tipo_documento_reembolso');    
    var opts = sel.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
      if (opt.value == val) {
        sel.selectedIndex = j;
        break;
      }
    }
    document.getElementById('numero_documento_reembolso').value=pasajero.numero_documento;
    document.getElementById('numero_documento_reembolso').style.visibility='hidden';
    }
  

}