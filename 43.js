const fs = require('fs');
const readline = require('readline');
const util = require('util');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const FILE_PATH = 'DATOS.DAT';
const FIELD_SIZE = 30;

async function buscarYModificarRegistro() {
  try {
    const id = await askQuestion('Ingrese el ID del registro a modificar: ');
    const formattedID = id.padEnd(FIELD_SIZE, ' ');

    const data = await readFile(FILE_PATH, 'utf8');
    const registros = data.split('\n');
    let registroEncontrado = false;

    const nuevosRegistros = await Promise.all(
      registros.map(async (registro) => {
        const registroTrimmed = registro.trim();

        if (registroTrimmed.startsWith(formattedID)) {
          registroEncontrado = true;
          console.log('Registro encontrado:', registroTrimmed);

          const nombre = await askQuestion('Ingrese el nuevo valor para NOMBRE: ');
          const apellidos = await askQuestion('Ingrese el nuevo valor para APELLIDOS: ');
          const direccion = await askQuestion('Ingrese el nuevo valor para DIRECCIÓN: ');
          const estado = await askQuestion('Ingrese el nuevo valor para ESTADO: ');

          const formattedNombre = nombre.padEnd(FIELD_SIZE, ' ');
          const formattedApellidos = apellidos.padEnd(FIELD_SIZE, ' ');
          const formattedDireccion = direccion.padEnd(FIELD_SIZE, ' ');
          const formattedEstado = estado.padEnd(FIELD_SIZE, ' ');

          return `${formattedID}${formattedNombre}${formattedApellidos}${formattedDireccion}${formattedEstado}`;
        }
        return registro;
      })
    );

    if (!registroEncontrado) {
      console.log('REGISTRO NO ENCONTRADO.');
    } else {
      const nuevosDatos = nuevosRegistros.join('\n');
      await writeFile(FILE_PATH, nuevosDatos);
      console.log('REGISTRO MODIFICADO.');
    }
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    rl.close();
  }
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

buscarYModificarRegistro();