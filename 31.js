const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
  const n = parseInt(numero);
    console.log('1. Es primo?');
    console.log('2. Factorial');
    console.log('3. Tabla de multiplicar');

    rl.question('Opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          if (esPrimo(n)) {
            console.log(`${n} es un número primo.`);
          } else {
            console.log(`${n} no es un número primo.`);
          }
          break;
        case '2':
          const factorial = calcularFactorial(n);
          console.log(`El factorial de ${n} es ${factorial}`);
          break;
        case '3':
          tabla(n);
          break;
        default:
          console.log('Opción no válida.');
      }

      rl.close();
    });
});

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero <= 3) {
    return true;
  }
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

function calcularFactorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

function tabla(numero) {
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
