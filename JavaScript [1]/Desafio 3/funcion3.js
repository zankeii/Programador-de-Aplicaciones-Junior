function ejercicio3(){
    var N=parseInt(prompt("Introduzca numero de veces a repetir el algoritmo: "));

if(isNaN(N)){
	alert("Numero Invalido")
	}
else
	for (i=0;i<N;i++){
    var desayuno=parseFloat(prompt("Ingrese precio del desayuno: ";
    var almuerzo=parseFloat(prompt("Ingrese precio del almuerzo: ";
    var cena=parseFloat(prompt("Ingrese precio";
    var cant_desa=parseInt(prompt("Ingrese ";
    var cant_almu=parseInt(prompt("Ingrese ";
    var cant_cena=parseInt(prompt("Ingrese ";
    var ingreso_desay;
    var ingreso_almu;
    var ingre_cena;
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