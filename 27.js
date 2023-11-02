const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número (0-10): ', (numero) => {
  numero = parseInt(numero);

  if (numero >= 0 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  } else {
    console.log('Debe estar entre 0 y 10.');
  }
  rl.close();
});
