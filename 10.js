const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
    if (numero% 2 == 0){
        console.log("Es par");
    } else (console.log("Es impar"));
    rl.close();
  });