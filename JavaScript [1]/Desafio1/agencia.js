    var base=500000;
    var comision=200000;
    var numeroautos=Math.random()*100+1;
    var valor_ventas=Math.random()*1000000+1;
    var salario_neto;
    var porcentaje;

    comision=200000*numeroautos;
    porcentaje=valor_ventas*0.10;
    salario_neto=base+comision+porcentaje;

    console.log(" ");

    console.log("Nombre: Miguel Yustiz");
    console.log("Numero de autos vendidos: ", numeroautos.toFixed());
    console.log("Comision: ", comision.toFixed(2));
    console.log("Porcentaje del 10%: ", porcentaje.toFixed(2));
    console.log("Salario Neto: ", salario_neto.toFixed(2));
