const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
    if (numero < 0) {
        console.log("Es negativo");
    } else if (numero == 0){
        console.log("Es cero");
    } else (console.log("Es positivo"));
    rl.close();
  });