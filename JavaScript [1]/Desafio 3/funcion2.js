function ejercicio2(){
    var N=parseInt(prompt("Introduzca numero de veces a repetir el algoritmo: "));

if(isNaN(N)){
	alert("Numero Invalido")
	}
else
    for (i=1;i<N;i++){
    var parcial1=parseInt(prompt("Ingrese Nota del parcial 1 entre 0 y 27: "+i+"/"+N));
    var parcial2=parseInt(prompt("Ingrese Nota del parcial 2 entre 0 y 27: "+i+"/"+N));
    var parcial3=parseInt(prompt("Ingrese Nota del parcial 3 entre 0 y 27: "+i+"/"+N));
    var ev_continua=parseInt(prompt("Ingrese Nota de la evaluacion continua entre 0 y 9: "+i+"/"+N));
    var trabajo=parseInt(prompt("Ingrese Nota del trabajo entre 0 y 10: "+i+"/"+N));
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