Algoritmo Alquiler_vehiculos
	Definir costo_dia, precio_total, reserva, rest Como Real
	Definir dias Como Entero
	
	Limpiar Pantalla
	Mostrar "Costo del tipo de vehiculo por dia: "Sin Saltar
	Leer costo_dia
	Mostrar "Cantidad de dias a alquilar el vehiculo: "Sin Saltar
	Leer dias
	
	Esperar Tecla
	Limpiar Pantalla
	
	precio_total=costo_dia*dias
	mostrar "Precio total a pagar es de: " precio_total "Bs."
	reserva=precio_total*0.35
	Mostrar "El monto a cancelar por concepto de reserva es de: " reserva "Bs."
	rest=(precio_total-reserva)/dias
	Mostrar "El monto a de la cuota diaria es de: " rest "Bs."
	

	
	
	
	
FinAlgoritmo
