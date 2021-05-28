function printUpTo(x) {
    if (x < 1){
        console.log("Es un número negativo")
        console.log(false)
    }
    if (x >= 1){
        for(let i=1 ; i <= x ; i++){
            y = i;

        }
        return y;
    }
  }
  printUpTo(1000); 
  y = printUpTo(-10); 
  console.log(y); 


  // debería imprimir todos los enteros de 1 to 1000
  // debería imprimir false
  // debería imprimir false