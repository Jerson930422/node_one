//* ejemplos */
const fs = require("fs/promises");

/*asyncronia de forma paralela*/ 
Promise.all([
    fs.readFile("texto1.txt", 'utf8'),
    fs.readFile("texto2.txt", 'utf8')
]).then(([primerTexto, segundoTexto]) =>{
    console.log('llamada en paralelo primer texto', primerTexto);
    console.log('llamada en paralelo segundo texto', segundoTexto);
});
    
