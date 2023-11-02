const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const FILE_PATH = 'DATOS.DAT';
const FIELD_SIZE = 30;

function consultarRegistroPorID() {
  rl.question('Ingrese el ID del registro a consultar: ', (id) => {
    const formattedID = id.padEnd(FIELD_SIZE, ' ');

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('ERROR:', err);
        rl.close();
      } else {
        const registros = data.split('\n');
        let registroEncontrado = false;

        registros.forEach((registro) => {
          const registroTrimmed = registro.trim();

          if (registroTrimmed.startsWith(formattedID)) {
            registroEncontrado = true;
            console.log('REGISTRO ENCONTRADO:', registroTrimmed);
          }
        });

        if (!registroEncontrado) {
          console.log('REGISTRO NO ENCONTRADO.');
        }

        rl.close();
      }
    });
  });
}

consultarRegistroPorID();
