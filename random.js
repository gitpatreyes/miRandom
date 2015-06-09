// Mi version de este ejemplo 
// autor : Patricio Barahona
// fecha : Martes, 9 de junio del 2015



// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('Este es tu numero escogido\n' + numero + str + '\nEn hora buena!!!');
