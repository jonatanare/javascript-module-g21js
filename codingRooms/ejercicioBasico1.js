// Enjoy JavaScript with ES6 features :)
/**
 * TODO: generar una funcion que me ayude a eliminar un elemento del arreglo, el arreglo y el elemento a eliminar seran los parametros de esta funcion 
 */

let removeFromArray = function(arreglo, item){
    if(typeof item == 'number'){
        arreglo.splice(item - 1, 1);
    } else {
        arreglo.splice(item, 1);
    }
    
    return arreglo;
}

//console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]
console.log(removeFromArray(['aldo', 'annie'], 'aldo')); // should remove 'aldo' and return ['annie']