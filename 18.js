const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introducir frase: ', (frase) => {
  let letra = 'a'; 
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    const caracter = frase[i].toLowerCase();
    if (caracter === letra) {
      contador++;
    }
  }
  console.log(`La letra "${letra}" aparece ${contador} veces`);
  rl.close();
});
