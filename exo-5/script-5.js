// you can write js here

console.log('exo-5');

var input = "Bonjour"
var voyelles = ["a","e","i","o","u","y"]
var resultArray = []

for (var i=0 ; i < voyelles.length ; i++){
    for (var j=0; j < voyelles.length ; j++){
        if (input [i] == voyelles[j]){
            resultArray.push(voyelles[j])
        }
    }
}
console.log (resultArray.join(" ").toUpperCase())