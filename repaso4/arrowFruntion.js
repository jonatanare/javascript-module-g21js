function correr() {
  /**
   * Aquí es necesario agregar el return
   */
  return "";
}

let correr = () => {
  /**
   * Un arrowFuntion tiene el return implicito cuando no tienen llaves
   */
  return "";
};

/**
 * ? Ejemplo funcion normal
 */

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

let suma = sumar(25, 35);
console.log(suma);

/**
 * ? Ejemplo arrow function
 */

let sumar = (numero1, numero2) => numero1 + numero2;
let suma2 = sumar(60, 70);
console.log(suma2);

/**
 * ? Ejercicio concatenar 2 string
 */

let concatenar = (string1, string2) => string1 + " " + string2;
let imprimirCadena = concatenar("Jonatan", "Arevalo");
console.log(imprimirCadena);

/**
 * ? Ejemplo de arrow function con return explicito
 */

let sumar = (numero1, numero2) => {
  const PI = 3.1416;
  let resultado = numero1 + numero2 + PI;
  return resultado;
};

let resultado = sumar(40, 60);
console.log(resultado);

// Ejercicios

/**
 * TODO: 8.- generar una función que me retorne un string que diga 'hola koders y después imprimir ese valor en la consola con ayuda de console.log()
 */

let saludo = () => "Hola koders";
console.log(saludo());

/**
 * TODO: 9.- generar una función que me retorne el resultado de una         operación matemática, el nombre de la operación y los valores con los que se ejecutara la operación serán los parámetros de dicha funcion, por ejemplo:
 * ?let resultadoSuma = operacionMatematica('suma', 10,10);
 * ?let resultadoResta = operacionMatematica('resta', 10,10);
 * ?let resultadoMultiplicacion = operacionMatematica('multiplicación', 10,10);
 */

let operacionMatematica = (nameOperation, numero1, numero2) => {
  switch (nameOperation) {
    case "suma":
      return numero1 + numero2;
      break;
    case "resta":
      return numero1 - numero2;
      break;
    case "multiplicacion":
      return numero1 * numero2;
      break;
    default:
      return "Operación no válida";
  }
};

let resultadoSuma = operacionMatematica("suma", 10, 10);
let resultadoResta = operacionMatematica("resta", 10, 10);
let resultadoMultiplicacion = operacionMatematica("multiplicacion", 10, 10);

console.log(resultadoSuma, resultadoResta, resultadoMultiplicacion);

/**
 * TODO: 10.- generar una función que me retorne un objeto literal con las siguientes propiedades(nombre, edad, genero, dirección), la propiedad nombre debe ser un objeto que tenga las siguientes propiedades(nombre, apellidoPaterno y apellidoMaterno)
 */

const generarObjetoLiteral = () => {
    let persona = {
        nombre: {
            nombre: 'Jonatan',
            apellidoPaterno: 'Arevalo',
            apellidoMaterno: 'Hernandez'
        },
        edad: 26,
        genero: 'Masculino',
        direccion: 'Cancún, Quintan Roo.'
    }

    return persona;
}

let resultadoObjeto = generarObjetoLiteral();
console.log(resultadoObjeto);

/**
 * TODO: 11.- generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 
 */

let retornarKoder = () => {
    const nombreKoders = ['Jonatan', 'Cintia', 'Hector', 'Sina', 'Victor', 'Manu', 'Fanny', 'Annie', 'Fernando', 'Benja', 'Mariana'];

    return nombreKoders;
}

let nombres = retornarKoder();
console.log(nombres);
/**
 * TODO: 12.- generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'
 */







let carro = {
    puertas: 4,
    color: 'gris',
    marca: 'Aveo',
    llantas: 4,
    duenio: undefined
}

carro.duenio = 'Jonatan';

if(carro.duenio !== undefined) {
    console.log('La propiedad si existe');
} else {
    console.log('La propiedad no existe');
}

console.log(carro['puertas']);

for(let caracteristica in carro) {
    console.log(caracteristica);
}

// Eso dijo isrra
// Function
/**
 * Recibe un valor de entrada, brinda una salida
 * Tener claro que queremos lograr para declarar una funcion
 * Tener claro que necesito para lograr obtener los argumentos
 */