
var parcial1=Math.random()*27+1;
var parcial2=Math.random()*27+1;
var parcial3=Math.random()*27+1;
var ev_continua=Math.random()*9+1;
var trabajo=Math.random()*10+1;
var escala100, escala20, escala4;

console.log("Nota parcial 1: ", parcial1.toFixed(1));
console.log("Nota parcial 2: ", parcial2.toFixed(1));
console.log("Nota parcial 3: ", parcial3.toFixed(1));
console.log("Nota evaluacion continua: ", ev_continua.toFixed(1));
console.log("Nota trabajo continuo: ", trabajo.toFixed(1));

escala100=parcial1+parcial2+parcial3+ev_continua+trabajo;
escala20=escala100/5;
escala4=escala20/5;

console.log(" ");
console.log("Nota final a escala de 100pts: ", escala100.toFixed());
console.log("Nota final a escala de 20pts: ", escala20.toFixed());
console.log("Nota final a escala de 4pts: ", escala4.toFixed());