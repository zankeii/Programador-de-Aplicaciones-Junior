clase cliente
    publico definir nombre como caracter
    privado definir contraseña como alfanumerico
    
    publico metodo setNombre("Miguel")
        nombre="Miguel"
    fin metodo
    publico metodo getNombre() como caracter
        retornar nombre
    fin metodo
    publico metodo setContraseña("1234")
        contraseña="1234"
    fin metodo
    publico metodo getContraseña() como alfanumerico
        retornar contraseña
    fin metodo
fin clase

clase cuenta
    publico definir numero_cta como caracter
    privado definir saldo como numerico
    
fin clase

clase tarjeta
    publico definir numero_tarjeta como caracter
    privado definir saldo_disp, saldo_deudor como numerico
    
fin clase


algoritmo banco
    definir clt como cliente
    definir cta como cuenta
    definir td como tarjeta
    clt=nuevo cliente()
    cta=nuevo cuenta()
    td=nuevo tarjeta()
    
    
fin algoritmo