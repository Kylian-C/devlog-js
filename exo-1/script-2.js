// you can write js here
console.log('hello from file');

let kelvins = prompt ("Quel est la temperature aujourd'hui ?");

let celsius = kelvins - 273;
// on declare une variable nommée celsius et on lui dis quel est egal a kelvins - 273 (pour faire la convertion)

let Fahrenheits = celsius * (9/5) + 32;
// on declare une variable nommée fahrenheits , on lui dis quel est egal a celsius * 9/5 + 32

console.log(celsius);
// Affiche la valeur celsius
console.log(Math.floor(Fahrenheits));
//Affiche la valeur Fahrenheits arrondie au entier