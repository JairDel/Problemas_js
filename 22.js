const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introducir frase: ', (frase) => {
  for (let i = 1; i <= 5; i++) {
    const columnas = '    '.repeat(i - 1); 
    console.log(columnas + frase);
  }
  rl.close();
});
