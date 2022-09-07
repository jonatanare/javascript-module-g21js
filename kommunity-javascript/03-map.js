/* Crear una función map que acepte un array y un callback y que:

    1. por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

    2. obtenga el resultado

    3. lo agregue a un nuevo array

    4. devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

// ['Jonatan', 'Manu', 'Annie', 'Cin'] -> ['J', 'M', 'A', 'C']
// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']

function mapArray(myArray, callback){
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        const elementCurrent = myArray[i];
        const newElement = callback(elementCurrent);
        newArray.push(newElement);
    }

    return newArray;
}

// let | const 
// {} -> bloque

const numbersArray = [2,5,8,8];
const nameArray = ['Jonatan', 'Manu', 'Annie', 'Cin'];


const numberDuplicated = (number) => {
    return number * 2;
}

const numberMenosUno = (number) => {
    return number - 1;
}

const primerCaracter = (nombre) => {
    return nombre[0]
}

const numbersDuplicated = mapArray(numbersArray, numberDuplicated);
const numbersMenosUno = mapArray(numbersArray, numberMenosUno);
const firstCharacter = mapArray(nameArray, primerCaracter);


const fullNameArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'];
// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']

const letraInicial = (fullname) => {
    let newNameArray = []
    const initialLetter = fullname.split(" ");

    for(let item of initialLetter){
        let itemName = item[0]+'.'
        console.log(itemName)
        newNameArray.push(itemName)
    }
    return newNameArray;
}

const letrasIniciales = mapArray(fullNameArray, letraInicial);