//* ejemplos */
import { readFile } from "node:fs/promises";

console.log('Leyendo el primer archivo');
let firsText1 = await readFile("texto1.txt", 'utf8')
console.log(firsText1)

console.log('Leyendo el segundo archivo')
let seconTex2 = await readFile("texto2.txt", 'utf8')
console.log(seconTex2);    
