//* ejemplos */
const fs = require("fs/promises");

(
    async () => {
        console.log('Leyendo el primer archivo');
        let firsText1 = await fs.readFile("texto1.txt", 'utf8')
        console.log(firsText1)

        console.log('Leyendo el segundo archivo')
        let seconTex2 = await fs.readFile("texto2.txt", 'utf8')
        console.log(seconTex2);    
    }
)();


