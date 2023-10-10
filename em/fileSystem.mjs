//* ejemplos */
import { readFile } from "fs";

readFile("texto1.txt", 'utf8', (error, datos)=>{
    if(error) throw error;
    console.log('El contenido es', datos)
})
