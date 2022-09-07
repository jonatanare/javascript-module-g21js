function calculadora(num1, num2, callback ) {
    return callback(num1, num2);
}


function mandarMensajeAlaEx(hacerAlgoRespuesta) {
    //mandar mensaje a nuestra ex
    let respuesta = 'Yo tambien te extraño';
    if(respuesta !== undefined){
        hacerAlgoRespuesta(respuesta)
    }
}

function hacerAlgoRespuesta(){
    console.log('Bloqueadas ALV')
}


mandarMensajeAlaEx(hacerAlgoRespuesta);

let personas = [{
    nombre: 'Jonatan',
    edad: 26
}, {
    nombre: 'Jose',
    edad: 23
}, {
    nombre: 'Alberto',
    edad: 45
}];


function parsearPersonas(personas) {
    let personasTransformadas = [];
    let count = 0;

    for (const persona of personas) {
        personasTransformadas[count] = {nombre: persona.nombre, sexo: 'masculino'}
        count++;
    }

    return personasTransformadas;
}

console.log(parsearPersonas(personas));