// Formule un algoritmo modular considerando el siguiente enunciado: ENUNCIADO: Procesar números enteros en el rango de 100 a 1000 
//hasta que el usuario decida interrumpir el procesamiento cumpliendo con los objetivos indicados:

//1-Implementar un menú con 3 opciones: Procesar números, Mostrar resultados y Salir, recuerde usar la opción "De otro modo"
//2-Usando ciclo Repetir-Hasta implementar la lectura validada de los números a ser procesados, mediante una función.
//3-Controlar la finalización del procesamiento de los números (opción uno del menú) hasta que el usuario decida interrumpirlo mediante una respuesta.
//4-Calcular y mostrar la Cantidad de números procesados y la Cantidad de números en el rango de 200 y 400
//5-Calcular y mostrar el Acumulado de todos los números ingresados y el Acumulado de los números pares


Algoritmo sin_titulo
	definir opc_menu Como Entero
	Definir num como entero
	Definir cont_num_proce, cont_200_400,acum_num_total,acum_num_pares como entero
	Definir respuesta Como Caracter
	
	Repetir
		Limpiar Pantalla
		Mostrar "MENU DE OPCIONES"
		Mostrar "1. Procesar Numeros"
		Mostrar "2. Mostrar Resultados"
		Mostrar "3. Salir"
		Mostrar "Ingrese la opción... " Sin Saltar
		Leer opc_menu
		Segun opc_menu Hacer
			1: procesar_num(num,cont_num_proce,cont_200_400,acum_num_total,acum_num_pares,respuesta)
			2: mostrar_result(cont_num_proce,cont_200_400,acum_num_total,acum_num_pares)
			3: Mostrar "Usted escogió salir del sistema."
			De Otro Modo:
				Mostrar "Debe ingresar una opción entre 1 y 3"
		FinSegun
		Si opc_menu=1
			entonces 
			Limpiar Pantalla
			Mostrar "Ultima opción seleccionada: " opc_menu
			mostrar " "
		FinSi
	Hasta Que opc_menu=3
	
FinAlgoritmo

Funcion lectura_valida(num Por Referencia)
	Repetir
		Limpiar Pantalla
		Mostrar "Ingrese un numero entre 100 y 1000: "Sin Saltar
		leer num
		
		si(num<100 || num>1000)
			Limpiar Pantalla
			Mostrar "Debe ingresar un numero entre 100 y 1000"
			esperar 2 segundos
		FinSi
	Hasta Que (num>=100 && num<=1000)
FinFuncion

SubProceso procesar_num(num,cont_num_proce por referencia,cont_200_400 Por Referencia,acum_num_total Por Referencia,acum_num_pares Por Referencia, respuesta Por Referencia)
	
	cont_num_proce=0
	cont_200_400=0
	acum_num_total=0
	acum_num_pares=0
	
	Repetir
		lectura_valida(num)
		cont_num_proce=cont_num_proce+1
		acum_num_total=acum_num_total+num
		
		si num>=200 && num<=400
			cont_200_400=cont_200_400+1
			
		FinSi
		si (num mod 2)=0
			acum_num_pares=acum_num_pares+num
		FinSi
		Mostrar "Quiere ingresar otro numero (S/N)?: "Sin Saltar
		leer respuesta
		respuesta=Mayusculas(respuesta)
	Hasta Que respuesta="N"	
FinSubProceso

SubProceso mostrar_result(cont_num_proce,cont_200_400,acum_num_total,acum_num_pares)
	
	Limpiar Pantalla
	mostrar "Contador de numeros procesados: " cont_num_proce
	mostrar "Contador de numeros entre 200 y 400: " cont_200_400
	mostrar "Acumulador de numeros ingresados: " acum_num_total
	mostrar "Acumulador de numeros pares: " acum_num_pares
	esperar tecla
	
FinSubProceso


