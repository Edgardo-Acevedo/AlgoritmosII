var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

/* PASO1: Ver las variables y las funciones;
        1   var x = 15;
        [...]
        3   function awesome(){
                var x=10;
                console.log(x);
            }
        La función es llamada en la línea 8
*/

/* PASO2: Desarrollar el ejercicio; var x = 15;
                                    console.log(x); ---> console.log(15); esto va al output(1)
                                    function awesome(){
                                        var x=10;
                                        console.log(x) ---> console.log(10) esto va al output(3);
                                    }
                                    console.log(x); ---> console.log(15); esto va al output(2)
                                    awesome(); se llama la función entonces a desarrollarla
                                    console.log(x) ---> console.log(15); esto va al output(4), no es 10
                                    porque na función no tiene return
*/

// EL OUTPUT ES [15,15,10,15]