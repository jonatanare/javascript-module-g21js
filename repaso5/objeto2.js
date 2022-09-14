function Animal(tieneOjos, ojos, corazon, color ) {
    this.tieneOjos = tieneOjos;
    this.ojos = ojos;
    this.corazon = corazon;
    this.color = color;
    this.comer = (tipoComida) => {
        console.log(`Este animal come esto: ${tipoComida}`);
    }
}

const serpiente = new Animal(true, 2, true, 'Verde');
console.log(serpiente.corazon);
serpiente.comer('Ratones');

/**
 * ? Clases
 */
class Animal {
    constructor(tieneOjos, ojos, corazon) {
        this.tieneOjos = tieneOjos;
        this.ojos = ojos;
        this.corazon = corazon;
    }

    comer(comida) {
        console.log(`Este animal come esto: ${comida}`);
    }
}

const perro = new Animal(true, 2, true);
console.log(perro.corazon);
perro.comer('DogChow');

class Oviparo extends Animal {
    constructor(naceDeHuevo) {
        super(true, 2, true); // es obligatorio mandar llamar a la funcion super
        this.naceDeHuevo = naceDeHuevo;
    }
}