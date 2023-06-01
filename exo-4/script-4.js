// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//secretMessage.push("easily")
let removedItem = secretMessage.splice(5,5,"know")

let firste = secretMessage.indexOf('right')
// remplace easily par right

console.log(secretMessage.leight)

let last =  secretMessage.pop
//sup le dernier

let newLength = secretMessage.push("to", "program")
//add a la fin du tab

let first = secretMessage.shift()
//sup le premier

let neewLength = secretMessage.unshift('programming')
//add debut de tab



console.log(secretMessage.join('-'))
