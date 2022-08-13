// Imprimir cada valor dentro de un arreglo con while
// Generar una funcion que imprima cada valor dentro de un arreglo con while

function imprimirFrutas(){
    let frutas = ['manzana','platano', 'fresa', 'melon'];
    let indice = 0;
    
    while(indice <= frutas.length - 1){
        console.log(frutas[indice])
        indice++
    }
}

imprimirFrutas()