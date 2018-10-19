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