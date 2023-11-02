const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  const anchoPantalla = process.stdout.columns;
  const espaciosEnBlanco = Math.floor((anchoPantalla - frase.length) / 2);
  const fraseCentrada = ' '.repeat(espaciosEnBlanco) + frase;
  console.log(fraseCentrada);
  rl.close();
});
