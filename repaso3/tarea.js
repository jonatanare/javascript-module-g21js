/**
 * TODO: Generar una variable con el nombre que prefieras por cada tipo de datos
 */
let miEmpresa = 'MOVEBIKE';
let sucursales = 10;
let isMexicano = true;
let motosElectrico = undefined;
let motosAcuaticas = null;

/**
 * TODO: Generar una variable de tipo objeto que represente un auto (¿Qué propiedades tiene un auto?)
 */
let auto = {
    modelo: 'Versa',
    marca: 'Nissan',
    llantas: 4,
    puertas: 4,
    isAutomatico: false,
    color: 'Amarillo',
    
}

/**
 * TODO: Generar una variable de tipo arreglo con el nombre que prefieras
 */
let movebike = ['Scooter', 'Motos', 'Autos', 'Scooter Electricos', 'Patines', 'Patinetas'];

/**
 * TODO: Generar un script que imprima 10 veces el nombre de tu mascota
 */
let miMascota = function(nombre){
    for (let i = 1; i <= 10; i++) {
        const mascota = `${nombre} - ${i}`;
        console.log(mascota);  
    }
}
miMascota('Terry Alberto')

/**
 * TODO: Generar un programa que imprima el nombre de una persona siempre y cuando la persona sea mayor de edad sino es mayor de edad debe imprimir el mensane "No tengo permitido usar tus datos personales"
 */
let esMayorDeEdad = function(edad, nombre) {
    if(edad >= 18 ){
        let mostrarDatos = `Nombre: ${nombre}`;
        console.log(mostrarDatos);
    } else {
        let mensajeNoMayor = 'No tengo permitido usar tus datos personales';
        console.log(mensajeNoMayor);
    }
}
esMayorDeEdad(17, 'Jonatan');

/**
 * TODO: Generar un programa que me ayude a imprimir en consola el valor de cada una de las propiedades del siguiente objeto
 * let usuario = {
 *      nombre: 'Juan',
 *      edad: 20,
 *      contrasenia: 'payasito*2022'
 * }
 */

let usuario = {
     nombre: 'Juan',
     edad: 20,
     contrasenia: 'payasito*2022'
}
let imprimirDatosUsuario = function(usuario){
    // El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
    for (const dato in usuario) {
        
        // It's also possible to use the hasOwnProperty property from the Object property for this purpose
        if (Object.hasOwnProperty.call(usuario, dato)) {
            const element = usuario[dato];
            console.log(element);
        }
    }
}
imprimirDatosUsuario(usuario)
/**
 * TODO: Generar un programa que me ayude a imprimir el contenido de un arreglo elemento por elemento
 * let frutas = ['fresa','melon','mango','kiwi']
 */
 let frutas = ['fresa','melon','mango','kiwi']

 let imprimirFrutas = function(frutas){
    for (const fruta of frutas) {
        console.log(fruta);
    }
 }
 imprimirFrutas(frutas)