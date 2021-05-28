function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<x; j++) {        
           console.log(i*j);
       } 
    }
}
z = looping(3,3);
console.log(z);
//  . 
/* PASO1: Verificar si se llama la función;
        en la  línea 8 "z = looping(3,3);" 
*/
/* PASO2: Desarrollar la función; si x = 3 e y = 3, 
    function looping(3,3) {
    for(var i=0; i<3; i++) {
       for(var j=0; j<3; j++) {        
           console.log(i*j);
       } 
    }
}
   i = 0           | 1           | 2
   j = 0 -> 1 -> 2 | 0 -> 1 -> 2 | 0 -> 1 -> 2
(i*j)= 0 -> 0 -> 0 | 0 -> 1 -> 2 | 0 -> 2 -> 4
(i*j):[0,0,0,0,1,2,0,2,4]
*/ 

// EL OUTPUT ES [0,0,0,0,1,2,0,2,4]

