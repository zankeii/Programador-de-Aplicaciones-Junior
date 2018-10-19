//modulo para leer datos
subproceso leer_datos(nombre por referencia,nacionalidad por referencia,edad por referencia, trabaja Por Referencia)
	mostrar "Ingrese Nombre: "sin saltar
	leer nombre
	mostrar "Ingrese Nacionalidad: "sin saltar
	leer nacionalidad
	mostrar "Ingrese Edad: " sin saltar
	leer edad
	Mostrar "¿Esta trabajando? S/N: "Sin Saltar
	leer trabaja
	nacionalidad=Mayusculas(nacionalidad)
	trabaja=mayusculas(trabaja)
FinSubProceso
//modulo como funcion para determinar elegibilidad de la persona
Funcion elegibilidad<-Fun_elegible(nacionalidad,edad)
	si ((nacionalidad="VENEZOLANO" o nacionalidad="VENEZOLANA") y edad>=18) entonces
		elegibilidad="Es elegible"
	SiNo
		si (nacionalidad<>"VENEZOLANO" o nacionalidad<>"VENEZOLANA" O edad<18) Entonces
			elegibilidad="No califica"
		FinSi
		
	FinSi
FinFuncion
//modulo para leer y calcular el nuevo sueldo
SubProceso leer_sueldo(trabaja, sueldo por referencia, pago Por Referencia, mensaje Por Referencia)
	si (trabaja="SI") entonces
		mostrar "Ingrese sueldo: " sin saltar
		leer sueldo
		pago=sueldo*0.10
	SiNo
		si (trabaja="NO") entonces
			sueldo=0
			pago=180
		SiNo
			si (trabaja<>"SI" o trabaja<>"NO") Entonces
				mensaje="ERROR!!! INTRODUZCA CORRECTAMENTE SI TRABAJA O NO..."
			FinSi
		FinSi
	FinSi
FinSubProceso
//modulo para mostrar las salidas
SubProceso mostrar_salidas(nombre,nacionalidad,edad,trabaja,sueldo,pago,mensaje)
	Limpiar Pantalla
	mostrar "Nombre: " nombre
	mostrar "Nacionalidad: " nacionalidad
	mostrar "Edad: " edad
	mostrar "¿Trabaja?: " trabaja 
	mostrar "Sueldo: " sueldo " Bs."
	mostrar "Nuevo pago: " pago " Bs."
	mostrar mensaje
FinSubProceso
//algoritmo principal
Algoritmo Consejo_nacional
	//ejecucion de modulos
	leer_datos(nombre,nacionalidad,edad,trabaja)
	elegibilidad=Fun_elegible(nacionalidad,edad)
	
	//condicion evaluativa para seguir ejecutando los siguientes modulos
	si elegibilidad="Es elegible" entonces 
		leer_sueldo(trabaja,sueldo,pago,mensaje)
		mostrar_salidas(nombre,nacionalidad,edad,trabaja,sueldo,pago,mensaje)
	SiNo
		si elegibilidad="No califica" Entonces
			Limpiar Pantalla
			mostrar "NO CALIFICA PARA EL GRUPO DE TRABAJO DE OBSERVADORES!!!"
		FinSi
		
	FinSi
FinAlgoritmo
