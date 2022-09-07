// En un arrowFunction se puede omitir los parentesis si solo se recibe un solo parametro
// const saludar = (prefijo, nombre) => {
//     console.log(`Hola ${prefijo} ${nombre}`)
//     console.log(arguments)
//     for(const argumento in arguments){
//         console.log(argumento)
//     }
// }

// function saludarDos(prefijo, nombre){
//     console.log(`Hola ${prefijo} ${nombre}`)
//     console.log(arguments)
//     for(const argumento of arguments){
//         console.log(argumento)
//     }
// }
// saludarDos('Sr.', 'Jonatan');


// (function() {
//     // Code here
// }()); //IIFE Inmediatly Invoked Function Expression


(function() {

    this.a = "una cosa";
    this.b = "otra cosa";

    function MiClase(){
        
    }
}());