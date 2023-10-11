//* ejemplos */
const fs = require("fs");

/* llamadas asyncronicas con la funcion readfile funciona con common
en estas llamadas esperamos a que lea el primer archivo para que lo muestre 
pero no para la ejecucion*/
console.log('Leyendo el primer archivo');
fs.readFile("texto1.txt", 'utf8', (error, datos)=>{
    if(error) throw error;
    console.log(datos)
})

console.log('Leyendo el segundo archivo')
fs.readFile("texto2.txt", 'utf8', (error, datos)=>{
    if(error) throw error;
    console.log(datos)
})
