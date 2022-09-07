/**
 * TODO: Generar una funcion que nos ayude a retornar la suma de todos los numeros que hay dentro de los parametros sumAll(1, 4) // 1 + 2 + 3 + 4 = 10
 */
let sumAll = function(valorInicial, valorFinal){
    if(typeof valorInicial == 'number' && typeof valorFinal == 'number'){
        let suma = 0;
        for (let i = valorInicial; i <= valorFinal; i++) {
            suma += i;
        }
        return suma
    }
}

console.log(sumAll(1,4));