Algoritmo sin_titulo
	//definicion de variables
	definir tipo_boleto, nombre_boleto, mensaje Como Caracter
	definir cant_boleto como entero
	definir precio, pre_dcto, dcto, total_pago como real
	
	//entradas
	mostrar "Ingrese tipo de boleto V/P/G: "Sin Saltar
	leer tipo_boleto
	mostrar "Ingrese cantidad de boletos a comprar: "sin saltar
	leer cant_boleto
	
	Limpiar Pantalla
	mostrar "                          PROCESANDO..."
	esperar 1 segundos
	Limpiar Pantalla
	
	//procesos
	tipo_boleto=mayusculas(tipo_boleto)
	precio=0
	si tipo_boleto="V" Entonces
		precio=300
		nombre_boleto="Boleto Vip"
	SiNo
		si tipo_boleto="P" Entonces
			precio=200
			nombre_boleto="Boleto Preferencial"
		SiNo
			si tipo_boleto="G" entonces
				precio=100
				nombre_boleto="Boleto General"
			SiNo
				mensaje="************TIPO DE BOLETO NO VALIDO******************"
			FinSi
		FinSi
	FinSi
	
	pre_dcto=precio*cant_boleto
	
	si pre_dcto<=400 entonces
		dcto=pre_dcto*0.03
	SiNo
		si pre_dcto>=700 y pre_dcto<=900 Entonces
			dcto=pre_dcto*0.05
		SiNo
			si pre_dcto>1200 Entonces
				dcto=pre_dcto*0.07
			SiNo
				dcto=pre_dcto*0.06
			FinSi
		FinSi
	FinSi
	total_pago=pre_dcto-dcto
	
	//salidas
	Mostrar "********* RESULTADOS DEL PROCESAMIENTO *********"
	mostrar "Tipo de boleto: " nombre_boleto
	mostrar "Cantidad de boletos: " cant_boleto
	mostrar "Precio: " precio " Bs."
	mostrar "Monto pre-descuento: " pre_dcto " Bs."
	mostrar "Monto del descuento: " dcto " Bs."
	mostrar "Total a pagar: " total_pago " Bs."
	Mostrar mensaje

FinAlgoritmo
