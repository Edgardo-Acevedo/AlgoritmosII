var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3; 
   console.log(i);
}

/* PASO1: Ver la variable; var x = [1,2,3,4,5,10] */
/* PASO2: Ver el bucle; for(var i=0; i<5; i++){
                            i = i + 3;
                            console.log(i);
                            }
*/
/* PASO3: Desarrollar el bucle; i = 0 -> 1 -> 2 -> 3 -> 4 -> 5 (no cumple con la condición i<5)
                                (0) = (0) + 3 = 3
                                console.log(3) Por ser el inicio de la iteración
                                (4) = (4) + 3 = 7
                                console.log(7) Por ser el final de la iteración
                                */ 

// EL OUTPUT ES [3,7]                                