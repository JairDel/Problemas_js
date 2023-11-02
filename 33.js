const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calificaciones = [];

const leerCalificacion = (indice) => {
  rl.question(`Introduce la calificación para la asignatura ${indice + 1}: `, (calificacion) => {
    calificaciones.push(parseFloat(calificacion));
    if (calificaciones.length < 10) {
      leerCalificacion(calificaciones.length);
    } else {
      const sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      const media = sumaCalificaciones / calificaciones.length;
      console.log(`La media es: ${media.toFixed(2)}`);
      rl.close();
    }
  });
};

leerCalificacion(0);
