
var desayuno=Math.random()*100000+1;
var almuerzo=Math.random()*200000+1;
var cena=Math.random()*200000+1;
var cant_desa=Math.random()*100+1;
var cant_almu=Math.random()*100+1;
var cant_cena=Math.random()*100+1;
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

