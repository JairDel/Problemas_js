const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const FILE_PATH = 'DATOS.DAT';
const FIELD_SIZE = 30;

function darDeBajaPorID() {
  rl.question('Ingrese el ID del registro a dar de baja: ', (id) => {
    const formattedID = id.padEnd(FIELD_SIZE, ' ');

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('ERROR', err);
        rl.close();
      } else {
        const registros = data.split('\n');
        let registroEncontrado = false;

        const nuevosRegistros = registros
          .map((registro) => registro.trim())
          .filter((registro) => {
            if (registro.startsWith(formattedID)) {
              registroEncontrado = true;
              return false;
            }
            return true;
          });

        if (!registroEncontrado) {
          console.log('REGISTRO NO ENCONTRADO.');
          rl.close(); 
          return; 
        } else {
          const nuevosDatos = nuevosRegistros.join('\n');
          fs.writeFile(FILE_PATH, nuevosDatos, (err) => {
            if (err) {
              console.error('ERROR:', err);
            } else {
              console.log('REGISTRO DADO DE BAJA.');
            }
            rl.close();
          });
        }
      }
    });
  });
}

darDeBajaPorID();
