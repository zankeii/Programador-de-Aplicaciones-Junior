clase empleado
    publico definir nombre, cedula, cargo como caracter
    privado definir salario como suelo
    publico definir trabajador2 como empleado
    
    metodo leerDatos()
        mostrar "Ingrese Nombre: ";
        leer nombre 
        mostrar "Ingrese cedula: ";
        leer cedula
        mostrar "Ingrese cargo: "
        leer cargo
    fin metodo
    
    metodo mostrarDatos()
        mostrar "Nombre: " nombre
        mostrar "Cedula: " cedula
        mostrar "Cargo: " cargo
        mostrar "Salario Mensual: " sueldo.mostrarSalario()
        
    fin metodo
fin clase
clase sueldo
    privado definir sueldo_base, monto_ventas, bono_ventas, bono_horaextra, salario_neto como real
    privado definir horas_extras como entero
    
    publico metodo getSalario_base() como real
        retornar sueldo_base
    fin metodo
    publico metodo setSalario_base(3000000)
        sueldo_base=3000000
    fin metodo
    publico metodo getMonto_vent() como real
        retornar monto_ventas
    fin metodo
    publico metodo setMonto_vent(10000000)
        monto_ventas=10000000
    fin metodo
    publico metodo getHoras() como entero
        retornar horas_extras
    fin metodo
    publico metodo setHoras(20)
        horas_extras=20
    fin metodo
    
    metodo calcularBono_ventas()
        bono_ventas=getMonto_vent()*0.15
    fin metodo
    metodo calcularBono_extra()
        bono_horaextra=getHoras()*0.001
    fin metodo
    metodo calcularNeto()
        salario_neto=getSalario_base()+calcularBono_ventas()+calcularBono_extra()
    fin metodo
    
    metodo mostrarSalario()
        mostrar "Salario Base: " getSalario_base() " Bs."
        mostrar "Total percibido por bono de ventas: " calcularBono_ventas() " Bs."
        mostrar "Total percibido por horas extras: " calcularBono_extra() " Bs."
        mostrar "Salario Neto: " calcularNeto() " Bs."
    fin metodo    
    
fin clase

algoritmo tienda
    definir salario como sueldo
    salario=nuevo sueldo()
    definir trabajador1 como empleado
    trabajador1=nuevo empleado()
    definir trabajador2 como empleado
    trabajador2=nuevo empleado()
    
    //entradas
    trabajador1.leerDatos()
    trabajador2.leerDatos()
     
    mostrar "Ingrese salario base: "
    leer salario.setSalario_base(3000000) 
    mostrar "Ingrese monto de ventas: "
    leer salario.setMonto_vent(10000000)
    mostrar "Ingrese horas extras: "
    leer salario.setHoras(20)
            
    //salidas
    trabajador1.mostrarDatos()
    trabajador2.mostrarDatos()
            
            
fin algoritmo