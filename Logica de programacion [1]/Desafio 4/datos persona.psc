Algoritmo datos_persona
	//declaracion de variables
	definir cedula, nombre, apellido, nacionalidad, lugar, completo, nacimiento Como Caracter
	Definir long como entero
	
	//entradas
	Mostrar "Ingrese numero de cedula: "sin saltar
	leer cedula
	mostrar "Ingrese Primer nombre y Primer apellido: "Sin Saltar
	leer nombre,apellido
	Mostrar "Ingrese nacionalidad: "sin saltar
	leer nacionalidad
	Mostrar "Ingrese Lugar de nacimiento: "Sin Saltar
	leer lugar
	
	//procesos
	//letra de cedula y rif
	long4=Longitud(nacionalidad)
	naccomp=subcadena(nacionalidad,1,long4)
	naccomp=mayusculas(naccomp)
	
	
	//mayusculas y minusculas de nombre y apellido
	long=Longitud(nombre)
	inicialnomb=SubCadena(nombre,1,1)
	inicialnomb=Mayusculas(inicialnomb)
	resto=subcadena(nombre, 2, long)
	resto=Minusculas(resto)
	long2=Longitud(apellido)
	inicialape=SubCadena(apellido,1,1)
	inicialape=Mayusculas(inicialape)
	resto2=subcadena(apellido, 2, long)
	resto2=Minusculas(resto2)
	completo=concatenar (inicialnomb+resto+" ", inicialape+resto2)
	
	//mayusculas nacimiento
	long3=Longitud(lugar)
	lugarcomp=subcadena(lugar,1,long3)
	lugarcomp=mayusculas(lugarcomp)
	
	//salidas
	Limpiar Pantalla
	Esperar 1 Segundos
	mostrar "Cedula: " naccomp "-" cedula " --- " " Rif personal: " naccomp "-" cedula "-" aleatorio(0,9) 
	mostrar "Nombre completo: " completo
	mostrar "Lugar de nacimiento: " lugarcomp
	
	
	
	
	
	
	
	
	
FinAlgoritmo
