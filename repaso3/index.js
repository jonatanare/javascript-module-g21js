const libro = {
    titulo: 'Harry Potter y el misterio de JS',
    autor: 'Victor',
    pagina: 300
};

/**
 * for in para objeto literal (llaves)
 */

for(let nombrePropiedad in libro) {
    console.log(`${nombrePropiedad}:`, libro[nombrePropiedad])
}

/**
 * for of para arreglos que tengan indices
 */

/**
 * los obj
 */
let frutas = ['fresa', 'mango', 'melon'];
frutas[0];
frutas[1];
frutas[2];

for(let fruta of frutas){
    console.log(fruta);
}

for(let fruta of obj['frutas']) {
    console.log(fruta);
}

for(let fruta of obj['personajes']){
    console.log(fruta);
}

// Declaración de la funcion
function imprimirNombre(nombre){
    console.log('Mi nombre es: ' + nombre);
}

imprimirNombre('Jonatan'); //Ejecucion de la funcion

function hacerGelatina(sabor, forma) {
    return `Esta es la gelatina de sabor ${sabor} y con forma ${forma}`;
}

let gelatinaDeIsra = hacerGelatina('jerez', 'gato');
let gelatinaDeJonatan = hacerGelatina('Fresa', 'redonda');

console.log(gelatinaDeJonatan);