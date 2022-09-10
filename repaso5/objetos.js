let lapiz = {
    tamanio: 'Pequeño',
    forma: 'hexagonal',
    color: 'Amarillo',
    escribir: (texto) => {
        return 'Use mi lápiz para escribir el texto ' + texto
    }
}

console.log(lapiz.color);
console.log(lapiz.forma);
console.log(lapiz.color);
console.log(lapiz.escribir('Jonatan Arevalo Hernandez'));


/**
 * ?Función constructora
 */

function Lapiz(tamanio, forma, color){
    this.tamanio = tamanio;
    this.forma = forma;
    this.color = color;
    this.escribir = ( texto ) => {
        return 'Use mi lápiz para escribir el texto ' + texto;
    }
}
let lapizRojo = new Lapiz('Pequeño', 'redondo', 'rojo');
console.log(lapizRojo);

let textoRojo = lapizRojo.escribir('color rojo')
console.log(textoRojo);


/**
 * TODO: Crear función constructora de dinosaurio y crear a nuestro dinosaurio favorito
 */

function Dinosario(nombre, alimentacion, tamanio, habitat){
    this.nombre = nombre;
    this.alimentacion = alimentacion;
    this.tamanio = tamanio;
    this.habitat = habitat;
    this.rugir = (sonido) => {
        return `Mi Dino hace ${sonido}`
    }
}

let dinoFav = new Dinosario('Pie pequeño', 'Vegetariano','Enorme','Bosque')

console.log(dinoFav);

let rugeDino = dinoFav.rugir('aaarrrhhh')
console.log(rugeDino);