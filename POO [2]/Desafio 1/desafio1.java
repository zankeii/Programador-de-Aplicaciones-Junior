//clase 1
clase accesorio
	definir nombre como caracter
	definir codigo como numerico 
	definir precio como numerico

	//metodo para leer datos del accesorio
	metodo leerDatosAcce()
		mostrar "Ingrese nombre del accesorio: "
		leer nombre
		mostrar "Ingrese codigo de producto: "
		leer codigo
		mostrar "Ingrese precio del producto: "
		leer precio
	fin metodo
	
	//metodo para mostrar datos del accesorio
	metodo mostrarDatosAcce()
		mostrar "Accesorio: " nombre
		mostrar "Codigo: " codigo
		mostrar "Precio: " precio
	fin metodo	
fin clase

//clase 2 
clase cliente
	definir nombre_clt como caracter
	definir direccion como caracter
	definir cedula como numerico
	definir telefono como numerico

	//metodo para leer datos de cliente
	metodo leerDatosClt()
		mostrar "Ingrese nombre del cliente: "
		leer nombre_clt
		mostrar "Ingrese Direccion: "
		leer direccion
		mostrar "Ingrese Cedula: "
		leer cedula
		mostrar "Ingrese Numero telefonico: "
		leer telefono
	fin metodo

	//metodo para mostrar datos del cliente
	metodo mostrarDatosClt()
		mostrar "Nombre cliente: " nombre_clt
		mostrar "Direccion: " direccion
		mostrar "Cedula: " cedula
		mostrar "Telefono: " telefono
	fin metodo
fin clase

//clase 3
clase factura
	definir codigo_factura como numerico
	definir fecha como numerico
	definir monto_iva como numerico
	definir total como numerico
	definir cliente1 como cliente
	definir accesorio1 como accesorio

	//metodo para leer datos de factura
	metodo leerDatosFact()
		mostrar "Ingrese Codigo de factura: "
		leer codigo_factura
		mostrar "Ingrese fecha: "
		leer fecha
	fin metodo

	//metodo para mostrar datos de factura
	metodo mostrarDatosFact()
		mostrar "Codgio de factura: " codigo_factura
		mostrar "Fecha: " fecha
		mostrar "IVA: " monto_iva
		mostrar "Total a pagar: " total
		mostrar "Datos del cliente: " cliente.mostrarDatosClt()
		mostrar "Datos del accesorio: " accesorio.mostrarDatosAcce()
	fin metodo
fin clase


//algoritmo general
algoritmo factura_cliente
	definir accesorio1 como accesorio
	accesorio1= nuevo accesorio()
	definir factura1 como factura
	factura1= nuevo factura()
	definir cliente1 como cliente
	cliente1= nuevo cliente()

	//entradas
	accesorio1.leerDatosAcce()
	factura1.leerDatosFact ()
	cliente1.leerDatosClt ()

	//procesos
	factura1.monto_iva=precio*0.16
	factura1.total=factura1.monto_iva+precio

	//salidas
	factura1.mostrarDatosFact()



fin algoritmo