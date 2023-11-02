const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let contador = 0;

function ingresarNumero() {
  rl.question(`Introduce el número ${contador + 1}: `, (numero) => {
    numero = parseFloat(numero);

    if (!isNaN(numero)) {
      numeros.push(numero);
      contador++;

      if (contador < 5) {
        ingresarNumero();
      } else {
        const numeroMayor = Math.max(...numeros);
        const numeroMenor = Math.min(...numeros);

        console.log(`Número mayor: ${numeroMayor}`);
        console.log(`Número menor: ${numeroMenor}`);

        rl.close();
      }
    }
  });
}

ingresarNumero();
