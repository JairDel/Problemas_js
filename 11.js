const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
  let contador = 0;

  if (numero >= 1) {
    for (let i = 1; i <= numero; i++) {
      if (i % 3 === 0) {
        contador++;
        console.log(`Multiplo de 3: ${i}`);
      }
    }
    console.log(`Total de múltiplos de 3 encontrados: ${contador}`);
  } 
  rl.close();
});
