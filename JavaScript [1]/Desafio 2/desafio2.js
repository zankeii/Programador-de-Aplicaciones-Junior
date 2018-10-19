var nombre=prompt("Ingrese Nombre cliente:");
var tipo_franela=prompt("Ingrese tipo de franela a/b/c:");
var cantidad=prompt("Ingrese cantidad de franelas:");
var procedencia = confirm("Introduzca la procedencia de la franela\n(precione aceptar si el producto es de procedencia Nacional o cancelar si la procedencia es extrangera):")
var recargo;
var precio_pagar;
var subtotal;
var descuento;
var impuesto;
var monto_pagar;
const A=25000;
const B=50000;
const C=68900;
const nacional=0.25;
const importado=0.45;
const iva=0.12;

tipo_franela=tipo_franela.toUpperCase();
nombre=nombre.toUpperCase();

if ((nombre=="")||(cantidad=="")||(tipo_franela=="")||(procedencia=="")||(nombre==null)||(cantidad==null)||(tipo_franela==null)||(procedencia==null))
alert("Debes introducir todos los datos que son requeridos");
else
if (isNaN(cantidad)){
    alert("Cantidad Invalida");
    console.log("El usuario introdujo datos no numericos en el campo de canidad de unidades");}
else
    	console.log("El nombre del cliente es: ",nombre);
		console.log("Cantidad de franelas: ",cantidad);
		console.log("La procedencia de la franela es: ",procedencia);
		console.log("El tipo de franela es: ",tipo_franela);
if (procedencia==true){
	if (tipo_franela == 'A'){
		recargo = A*nacional;
		precio_pagar= A+recargo;
	}}
    else
		if (tipo_franela == 'B'){
		recargo = B*nacional;
		precio_pagar= B+recargo;
		}
    else
		if (tipo_franela == 'C'){
		recargo = C*nacional;
		precio_pagar= C+recargo;
		}
else
if (procedencia==false){
	if (tipo_franela == 'A'){
		recargo = A*importado;
		precio_pagar=A+recargo;
	}}else
		if (tipo_franela == 'B'){
		  recargo = B*importado;
		  precio_pagar=B+recargo;
		}else
			if (tipo_franela == 'C'){
		      recargo = C*importado;
		      precio_pagar=C+recargo;}

if ((!isNaN(cantidad))||(cantidad=="")||(cantidad==null)||(tipo_franela=="")||(tipo_franela==null)){
    subtotal=precio_pagar*cantidad;
    console.log("EL subTotal por las franelas es: ",subtotal);
}
else{
	alert("El sub total no pudo ser calculado");
	console.log("El sub total no pudo ser calculado");
}

if ((!isNaN(cantidad))||(cantidad=="")||(cantidad==null)||(subtotal==="El sub total no pudo ser calculado")){
    if (cantidad>24){
            descuento=subtotal*0.15
        }
    else{
        if(cantidad>=6 && cantidad<=11){
            descuento=subtotal*0.05;
        }
        else{
           descuento=0
        }
    }
}

if (!(subtotal==="El sub total no pudo ser calculado")||(!(descuento==="EL descuento no pudo ser cancelado"))){
    if(descuento=0){
        impuesto=iva*subtotal;
    }
    else
        impuesto=descuento-(iva*subtotal);}
    else{
        alert("El impuesto no pudo se calculado");
        console.log("El impuesto no pudo ser calculado");}
    
if (!(subtotal==="El sub total no pudo ser calculado")||(!(impuesto==="El impuesto no pudo ser calculado"))){
    monto_pagar=subtotal+impuesto;}
else{
    alert("Monto a pagar no pudo ser calculado");
    console.log("Monto a pagar no pudo ser calculado");
}

alert("Nombre: ",nombre + "" + "Cantidad de franelas: ",cantidad + "\n" +
     "Precio a pagar por la franela: ",precio_pagar + "\n" +
     "Sub total a pagar: ",subtotal + "\n" + "Descuento: ",descuento + "\n" +
     "Impuesto: ",impuesto + "\n" + "Monto a pagar total: ",monto_pagar);


console.log("precio a pagar: ", precio_pagar);
console.log("Subtotal :",subtotal);
console.log("descuento: ",descuento);
console.log("Impuesto: ",impuesto);
console.log("Monto a pagar: ",monto_pagar);