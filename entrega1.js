opc = 1;
while(opc != 0){
    let usuario = prompt("Ingrese su nombre").toUpperCase();
    alert("Bienvenido/a " + usuario + " Tiene una promo del 20 % de descuento por pago contado");
    let afirmativo = "si";
    let negativo = "no";
    let servicio = prompt("Ingrese numero de servicio a contratar\n1_sap\n2_tango\n3_bind");
    if(servicio == 1){
        precio = 100;
    } else if(servicio == 2){
        precio = 150;
    } else if(servicio == 3){
        precio = 120;
    } else if(servicio != 1 && servicio != 2 && servicio != 3){
        alert("El numero de servicio ingresado es incorrecto");
        continue;
    } else{
        continue;
    }
    let promocion = prompt("¿ Desea adquirir promo ? si / no").toLowerCase();
    if(promocion == negativo){
        let precio_final = precio + (precio * 0.21);
    alert("El monto a pagar con IVA incluido es : " + precio_final);
    } else if(promocion == afirmativo){
        let precio_final = precio * 0.8;
        alert("El monto a pagar con descuento es : " + precio_final);
    } else if(promocion != afirmativo && promocion != negativo){
        alert("Por favor ingrese Si o No");
        continue;
    }
    opc = Number(prompt("Para continuar presione 1, para terminar presione 0"));
}
