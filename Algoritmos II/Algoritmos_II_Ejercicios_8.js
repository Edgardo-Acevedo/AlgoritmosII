function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<y; j++) {        
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);
 /* - */

 // PASO1: Ver si se llama a la función; línea 9 "z = loopi(ng(3,5);"
 /* PASO2: Desarrollar la función; x = 3 e y = 5
    function looping(x,y) {
        for(var i=0; i<3; i++) {
            for(var j=0; j<5; j++) {        
                console.log(i*j);
        } 
    }
    return x*y;
 }
        i = 0             | 1             | 2
        j = 0->1->2->3->4 | 0->1->2->3->4 | 0->1->2->3->4
    (i*j) = 0->0->0->0->0 | 0->1->2->3->4 | 0->2->4->6->8
    console.log(i*j): [0,0,0,0,0,0,1,2,3,4,0,2,4,6,8] esto va al output

*/
/* PASO3: comprovar si hay return; línea 7 return x*y ; x = 3 e y = 5 ; return 3*5 ---> return 15
   esto reemplaza a loooping(3,5) en la línea 9, por ende esto queda 
   línea 9  | z = 15
   línea 10 | console.log(z) ---> console.log(15) esto va al output
*/ 

// EL OUTPUT ES [0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15]

 