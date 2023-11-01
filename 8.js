const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ingresarLetra() {
  rl.question('Introduce "S" o "N": ', (respuesta) => {
    const respuestaValida = respuesta.trim().toUpperCase();

    if (respuestaValida === 'S' || respuestaValida === 'N') {
      console.log(`Has introducido: ${respuestaValida}`);
      rl.close();
    } else {
        ingresarLetra();
    }
  });
}

ingresarLetra();
