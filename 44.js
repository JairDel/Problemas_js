const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const FILE_PATH = 'DATOS.DAT';
const FIELD_SIZE = 30;

function buscarRegistrosPorCoincidencia() {
  rl.question('Ingrese estado a buscar: ', (valorBuscado) => {
    const formattedValorBuscado = valorBuscado.padEnd(FIELD_SIZE, ' ');

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('ERROR', err);
        rl.close();
      } else {
        const registros = data.split('\n');
        let coincidenciasEncontradas = false;

        registros.forEach((registro) => {
          const registroTrimmed = registro.trim();

          if (registroTrimmed.includes(formattedValorBuscado)) {
            coincidenciasEncontradas = true;
            console.log('Registro encontrado:', registroTrimmed);
          }
        });

        if (!coincidenciasEncontradas) {
          console.log('NO SE ENCONTRO.');
        }

        rl.close();
      }
    });
  });
}

buscarRegistrosPorCoincidencia();
