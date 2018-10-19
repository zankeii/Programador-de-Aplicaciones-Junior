    function ejercicio1(){
     var N=parseInt(prompt("Introduzca numero de veces a repetir el algoritmo: "));

    if(isNaN(N)){
	alert("Numero Invalido")
	}
else
        for (i=1;i<N;i++){
            var base=500000;
            var comision=200000;
            var nombre=prompt("Introduzca nombre: "+i+"/"+N);
            var numeroautos=parseInt(prompt("Introduzca numero de autos: "+i+"/"+N));
            var valor_ventas=parseFloat(prompt("Introduzca valor de ventas: "+i+"/"+N));
            var salario_neto;
            var porcentaje; 
            
            if ((nombre==="")||(nombre===null)||(!isNaN(nombre)))
                alert("Nombre no valido");
            else
                if (isNaN(numeroautos)||isNaN(valor_ventas))
                    alert("Numero no valido");
            else
                
            comision=200000*numeroautos;
            porcentaje=valor_ventas*0.10;
            salario_neto=base+comision+porcentaje;
            
            alert("Algoritmo "+i+"/"+N+"\n"+
                  "Nombre: "+nombre+"\n"+
                "Numero de autos vendidos: "+numeroautos+"\n"+
                 "Comision: "+comision.toFixed(2)+"\n"+
                 "Porcentaje del 10%: "+porcentaje.toFixed(2)+"\n"+
                 "Salario Neto: "+salario_neto.toFixed(2));
    }}

function ejercicio2(){
    var N=parseInt(prompt("Introduzca numero de veces a repetir el algoritmo: "));

if(isNaN(N)){
	alert("Numero Invalido")
	}
else
    for (p=1;p<N;p++){
    var parcial1=parseInt(prompt("Ingrese Nota del parcial 1 entre 0 y 27: "+p+"/"+N));
    var parcial2=parseInt(prompt("Ingrese Nota del parcial 2 entre 0 y 27: "+p+"/"+N));
    var parcial3=parseInt(prompt("Ingrese Nota del parcial 3 entre 0 y 27: "+p+"/"+N));
    var ev_continua=parseInt(prompt("Ingrese Nota de la evaluacion continua entre 0 y 9: "+p+"/"+N));
    var trabajo=parseInt(prompt("Ingrese Nota del trabajo entre 0 y 10: "+p+"/"+N));
    var escala100, escala20, escala4;
    
    if(isNaN(parcial1)||isNaN(parcial2)||isNaN(parcial3)||isNaN(ev_continua)||isNaN(trabajo))
            alert("Nota no valida");
        else
            if (parcial1<0 || parcial1>27|| parcial2<0||parcial2>27||parcial3<0||parcial3>27)
                alert("Nota no valida, tiene que ser entre 0 y 27");
        else
            if(ev_continua<0 || ev_continua>9)
                alert("Nota no valida, tiene que ser entre 0 y 9");
        else
            if(trabajo<0 || trabajo>10)
                alert("Nota no valida, tiene que ser entre 0 y 10");
        else 

    escala100=parcial1+parcial2+parcial3+ev_continua+trabajo;
    escala20=escala100/5;
    escala4=escala20/5;


        alert("Nota parcial 1: "+parcial1+"\n"+
            "Nota parcial 2: "+parcial2+"\n"+
             "Nota parcial 3: "+parcial3+"\n"+
             "Nota evaluacion continua: "+ev_continua+"\n"+
             "Nota trabajo continuo: "+trabajo+"\n"+
             "Nota final a escala de 100pts: "+escala100+"\n"+
             "Nota final a escala de 20pts: "+escala20+"\n"+
             "Nota final a escala de 4pts: "+escala4+"\n");
}}

function ejercicio3(){
    var N=parseInt(prompt("Introduzca numero de veces a repetir el algoritmo: "));

if(isNaN(N)){
	alert("Numero Invalido")
	}
else
	for (k=0;k<N;k++){
    var desayuno=parseFloat(prompt("Ingrese precio del desayuno: ");
    var almuerzo=parseFloat(prompt("Ingrese precio del almuerzo: ");
    var cena=parseFloat(prompt("Ingrese precio");
    var cant_desa=parseInt(prompt("Ingrese ");
    var cant_almu=parseInt(prompt("Ingrese ");
    var cant_cena=parseInt(prompt("Ingrese ");
    var ingreso_desay;
    var ingreso_almu;
    var ingre_cenax
    var total_ingreso;
    var promedio_precios;

    ingreso_desay=desayuno*cant_desa;
    ingreso_almu=almuerzo*cant_almu;
    ingre_cena=cena*cant_cena;
    total_ingreso=ingreso_desay+ingreso_almu+ingre_cena;
    promedio_precios=(desayuno+almuerzo+cena)/3;

    console.log("----------------------------------------------")
    console.log("Precio del desayuno: ", desayuno.toFixed(2));
    console.log("Precio del almuerzo: ", almuerzo.toFixed(2));
    console.log("Precio de la cena: ", cena.toFixed(2));
    console.log(" ");
    console.log("Cantidad de desayunos: ", cant_desa.toFixed());
    console.log("Cantidad de almuerzos: ", cant_almu.toFixed());
    console.log("Cantidad de cenas: ", cant_cena.toFixed());
    console.log(" ");
    console.log("Ingreso de desayunos: ", ingreso_desay.toFixed(2));
    console.log("Ingreso de almuerzos: ", ingreso_almu.toFixed(2));
    console.log("Ingreso de cenas: ", ingre_cena.toFixed(2));
    console.log(" ");
    console.log("Total ingreso del dia: ", total_ingreso.toFixed(2)),
    console.log("Promedio de precios de las comidas: ", promedio_precios.toFixed(2));
}}

function ejercicio4(){
      var N=parseInt(prompt("Introduzca numero de veces a repetir el algoritmo: "));

if(isNaN(N)){
	alert("Numero Invalido")
	}
else
    console.log(" ");
    console.log("EJERCICIO 4");
    console.log("Cantidad de veces que se repetira el algoritmo: "+N+" Veces");
    console.log(" ");
	for (x=0;x<N;x++){
    var costo_carro=Math.random()*50000000+1;
    var inicial;
    var resto;

    inicial=costo_carro*0.30;
    resto=(costo_carro-inicial)/24;
    console.log("------------------------------------------------")
    console.log("Nombre del cliente: Miguel Yustiz");
    console.log("Precio del vehiculo. ", costo_carro.toFixed(2));
    console.log("Incial del 30%: ", inicial.toFixed(2));
    console.log("Cuotas a pagar mensualmente por 2 años: ", resto.toFixed(2));
}}