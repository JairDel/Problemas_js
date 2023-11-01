const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

function ingresarFrase() {
  rl.question('Introduce una frase (o escribe "fin" para detenerse): ', (frase) => {
    if (frase.toLowerCase() === 'fin') {
      console.log(`NUmero de frases introducidas: ${contador}`);
      rl.close();
    } else {
      contador++;
      ingresarFrase();
    }
  });
}

ingresarFrase();

  