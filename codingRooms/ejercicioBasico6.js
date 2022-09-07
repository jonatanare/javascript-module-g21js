/**
 * TODO: Generar una función que me ayude a convertir de grados centigrados a farenheit // ctof(0) return 32
 */

let ctof = function(grados){
    let resp = grados * (9/5) + 32;

    return resp;
}

console.log(ctof(1));
/**
 * 0 = 32F
 * 1 = 33.8F
 * 
 * 1F = -17.22 C
 */