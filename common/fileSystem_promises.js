//* ejemplos */
const fs = require("fs/promises");

/* llamadas asyncronicas con las promesas solo es cambiar el parametro de la llamada 
por la palabra reservada then que indica que el consolo se ejecuta cuando el evento se complete*/
console.log('Leyendo el primer archivo');
fs.readFile("texto1.txt", 'utf8')
    .then(datos => {
        console.log(datos)
    })

console.log('Leyendo el segundo archivo')
fs.readFile("texto2.txt", 'utf8')
    .then(text =>{
        console.log(text)
    })
    
