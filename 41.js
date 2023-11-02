const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const FILE_PATH = 'DATOS.DAT';
const FIELD_SIZE = 30; 

function agregarRegistro() {
  rl.question('Ingrese el ID: ', (id) => {
    rl.question('Ingrese el NOMBRE: ', (nombre) => {
      rl.question('Ingrese los APELLIDOS: ', (apellidos) => {
        rl.question('Ingrese la DIRECCIÓN: ', (direccion) => {
          rl.question('Ingrese el ESTADO: ', (estado) => {
            
            const formattedID = id.padEnd(FIELD_SIZE, ' ');
            const formattedNombre = nombre.padEnd(FIELD_SIZE, ' ');
            const formattedApellidos = apellidos.padEnd(FIELD_SIZE, ' ');
            const formattedDireccion = direccion.padEnd(FIELD_SIZE, ' ');
            const formattedEstado = estado.padEnd(FIELD_SIZE, ' ');

            
            const registro = `${formattedID}${formattedNombre}${formattedApellidos}${formattedDireccion}${formattedEstado}`;

            
            fs.appendFile(FILE_PATH, registro, (err) => {
              if (err) {
                console.error('ERROR:', err);
              } else {
                console.log('REGISTRO AGREGADO.');
              }
              rl.close();
            });
          });
        });
      });
    });
  });
}

agregarRegistro();
