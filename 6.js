const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numeroLimite) => {
  numeroLimite = parseInt(numeroLimite);
  if (!isNaN(numeroLimite) && numeroLimite > 0) {
    for (let i = 1; i <= numeroLimite; i++) {
      console.log(i);
    }
  } 
  rl.close();
});
