for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {       
        console.log(i*j);
    }
 }

 /* PASO1: Desarrollamos los bucles;
            for(var i=0; i<3; i++) {
                for(var j=0; j<2; j++) {      
                console.log(i*j);
                }
            } 
                        i = 0      | 1      | 2
                        j = 0 -> 1 | 0 -> 1 | 0 -> 1
                    (i*j) = 0 -> 0 | 0 -> 1 | 0 -> 2
                    (i*j):[0,0,0,1,0,2]
                    console.log(i*j)

    EL OUTPUT ES [0,0,0,1,0,2]                    
 */

                    