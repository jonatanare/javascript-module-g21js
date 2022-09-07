/**
 * TODO: crear una funcion que retorne la palabra(parametro1) repetida el numero de veces que se indique(parametro2) repeatString('hey', 3) // returns 'heyheyhey'
 */

let palabraRepetida = function(palabra, veces){
    let palabras = ''
    for(let i = 1; i <= veces; i++){
        palabras += palabra
    }

    return palabras;
}

console.log(palabraRepetida('Jonatan', 3));