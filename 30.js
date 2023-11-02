const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (numero1) => {
  rl.question('Introduce el segundo número: ', (numero2) => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

      console.log('1. Suma');
      console.log('2. Resta');
      console.log('3. Multiplicación');
      console.log('4. División');

      rl.question('Opción: ', (opcion) => {
        switch (opcion) {
          case '1':
            console.log(`La suma de ${n1} y ${n2} es ${n1 + n2}`);
            break;
          case '2':
            console.log(`La resta de ${n1} y ${n2} es ${n1 - n2}`);
            break;
          case '3':
            console.log(`La multiplicación de ${n1} y ${n2} es ${n1 * n2}`);
            break;
          case '4':
            if (n2 !== 0) {
              console.log(`La división de ${n1} entre ${n2} es ${n1 / n2}`);
            } else {
              console.log('No se puede dividir por cero.');
            }
            break;
          default:
            console.log('Opción no válida.');
        }
        rl.close();
      });
  });
});
