const arregloNum1 = [1, 2, 3];
const arregloNum2 = [1, 2, 3];

let sonIguales = function(arreglo1, arreglo2) {
    for (let i = 0; i < arreglo1.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            
            if(arreglo1[i] === arreglo2[j]){
                return true
            } else {
                return false
            }
        }
    }
}
console.log(sonIguales([{nombre: 'aldo'}, 2, 2],[{nombre: 'aldo'}, 2, 3]));
// sonIguales([1, 2, 3], [1, 2, 3]); // return true
// sonIguales([{nombre: 'aldo'}, 2, 3], [{nombre: 'aldo'}, 2, 3]); // return true


