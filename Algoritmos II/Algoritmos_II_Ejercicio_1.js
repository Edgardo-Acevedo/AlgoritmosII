function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);  
console.log(b);

/* PASO1: Verificar si la función multiply(x,y) es llamada; Esto se hace en la línea 5 */

/* PASO2: Desarrollar la función:
    l2 -> console.log(x) // x = 2 
    l3 -> console.log(y) // y = 3
        Esto pasa al OUTPUT = [2,3]
*/

/* PASO3: Comprobar si hay return; Esto no sucede, por lo que console.log(b) no se ejecuta */

// EL OUTPUT ES [2,3]