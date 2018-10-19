//modulo
Subproceso Saludar_Estudiante()
	definir nombre como caracter//variable local
	Mostrar "Ingrese el nombre del estudiante: " Sin Saltar
	Leer nombre
	Limpiar Pantalla
	Mostrar "Bienvenido al programa " nombre
FinSubProceso
//modulo
Subproceso Leer_Notas(nota1 Por Referencia,nota2 Por Referencia,nota3 Por Referencia, trabajo Por Referencia, evaluacion Por Referencia)//parametros
	Mostrar "Ingrese las 3 notas de los examenes parciales /25 pts: " Sin Saltar
	Leer nota1,nota2,nota3
	mostrar "Ingrese la nota del trabajo practico /15 pts: " sin saltar
	leer trabajo
	mostrar "Ingrese la nota de la evaluacion continua 10 pts: " sin saltar
	leer  evaluacion
FinSubproceso
//modulo
SubProceso calcular_prom(nota1,nota2,nota3,trabajo,evaluacion, prom100 por referencia, prom20 por referencia, prom4 por referencia, mensaje1 Por Referencia)//parametros
	si (nota1>=0 y nota1<=25) y (nota2>=0 y nota2<=25) y (nota3>=0 y nota3<=25) y (trabajo>=0 y trabajo<=15) y (evaluacion>=0 y evaluacion<=10) //condicional doble
		entonces
			prom100=nota1+nota2+nota3+trabajo+evaluacion
			prom20=prom100/5
			prom4=prom20/5
		SiNo
			mensaje1="No se puede calcular el promedio, alguna nota está fuera del rango"
		FinSi
FinSubProceso
//modulo
SubProceso criterio(prom100, mensaje2 Por Referencia)//parametros
	si(prom100>=0 y prom100<=49)//condicional dobles
		Entonces
		mensaje2="INSUFICIENTE!!!"
	SiNo
		si(prom100>=50 y prom100<=69) 
			entonces
			mensaje2="ACEPTABLE!!!"
		SiNo
			si(prom>=70 y prom100<=95) 
				Entonces
				mensaje2="SOBRESALIENTE!!!"
			SiNo
				si(prom100>=95 y prom100<=100)
					Entonces
					mensaje2="EXCELENTE!!!"
				FinSi
			FinSi
		FinSi
	FinSi
	Limpiar Pantalla
	mostrar "Procesando notas...."
	esperar 2 segundos
	Limpiar Pantalla
FinSubProceso

//modulo
Subproceso resultados(prom100,prom20,prom4,mensaje1,mensaje2)//parametros
	mostrar mensaje1
	mostrar "Su promedio en escala de 100pts fue de: " prom100 "Pts." " " mensaje2
	mostrar "Su promedio en escala de 20pts fue de: " prom20 "Pts." 
	mostrar "Su promedio en escala de 4pts fue de: " prom4 "Pts." 
	Mostrar "Gracias por usar este programa" 
FinSubProceso
//cuerpo principal
Algoritmo DESAFIO3
	Definir mensaje2,mensaje1 Como Caracter//variables globales
	definir nota1,nota2,nota3,trabajo,evaluacion,prom100,prom20,prom4 Como Real//variables globales
	//llamado de modulos
	Saludar_Estudiante()
	Leer_Notas(nota1,nota2,nota3,trabajo,evaluacion)
	calcular_prom(nota1,nota2,nota3,trabajo,evaluacion,prom100,prom20,prom4,mensaje1)
	criterio(prom100,mensaje2)
	resultados(prom100,prom20,prom4,mensaje1,mensaje2)
FinAlgoritmo
