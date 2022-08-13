let frutas = [];
let indice = 0;

function comprarFrutas(nombreFruta) {
    frutas[indice] = nombreFruta;
    indice++;
}

comprarFrutas('manzana');
comprarFrutas('pera');
comprarFrutas('durazno');
comprarFrutas('platano');

console.log(frutas)