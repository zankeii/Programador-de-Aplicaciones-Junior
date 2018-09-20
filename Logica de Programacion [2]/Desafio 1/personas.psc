Algoritmo personas
	definir nombre, genero Como Caracter
	definir n como entero
	
	mostrar "Cuanto nombres y generos se van a introducir? "Sin Saltar
	leer n
	para i=n hasta 1 Con Paso -1 hacer
		Mostrar "Ingrese nombre: " Sin Saltar
		leer nombre
		mostrar "Ingrese Genero M/F: "sin saltar
		leer genero
		si n<>1
			mostrar "Nombre: " nombre " | " "Genero: " genero
		FinSi
	FinPara
	
	
FinAlgoritmo
