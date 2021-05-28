function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

/* PASO1: Verificar si la función multiply(x,y) es llamada; Esto sucede tanto en la línea 4 "console.log(b)"
   y en la línea 6 "console.log(multiply(5,2))"  */

/* PASO2: Desarrollar la función; x = 2, y = 3
    return x*y ---> return 2*3 ---> return 6
 */

/* PASO3: Ejecutar el console.log de la línea 4;
   el return es 6, por lo tanto, console.log(b) será 6
    El OUTPUT = [6] de momento
*/

/* PASO4: Hacemos lo mismo con el console.log de la línea 6;
   return (5,2) ---> return 5*2 ---> return 10 
*/ 

/* como returna 10 el console.log(multiply(5,2)) es 10, por lo tanto:
   se añade 10 al output */

// EL OUTPUT ES [6,10] 