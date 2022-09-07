// Imprimir cada valor dentro de un arreglo con while
// Generar una funcion que imprima cada valor dentro de un arreglo con while

/*function imprimirFrutas(){
    let frutas = ['manzana','platano', 'fresa', 'melon'];
    let indice = 0;
    
    while(indice <= frutas.length - 1){
        console.log(frutas[indice])
        indice++
    }
}

imprimirFrutas()*/


/*let indice = 0;

function imprimirFrutas(frutas) {
    while(frutas[indice] !== undefined ){
        console.log(frutas[indice])
        indice++;
    }
}

imprimirFrutas(['manzana','platano', 'fresa', 'melon']);*/


function imprimirFrutas(frutas) {
    for(let i = 0; i <= frutas.length - 1; i++){
        console.log(frutas[i]);
    }
}

imprimirFrutas(['manzana','platano', 'fresa', 'melon']);