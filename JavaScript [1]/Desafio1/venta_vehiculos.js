
var costo_carro=Math.random()*50000000+1;
var inicial;
var resto;

inicial=costo_carro*0.30;
resto=(costo_carro-inicial)/24;

console.log("Nombre del cliente: Miguel Yustiz");
console.log("Precio del vehiculo. ", costo_carro.toFixed(2));
console.log("Incial del 30%: ", inicial.toFixed(2));
console.log("Cuotas a pagar mensualmente por 2 años: ", resto.toFixed(2));
