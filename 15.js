const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Primer número: ', (numero1) => {
  rl.question('Segundo número: ', (numero2) => {
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);

    let contadorNaturales = 0;
    let contadorPares = 0;
    let sumaImpares = 0;

    const numMenor = Math.min(num1, num2);
    const numMayor = Math.max(num1, num2);

    for (let i = numMenor; i <= numMayor; i++) {
        contadorNaturales++;

        if (i % 2 === 0) {
            contadorPares++;
            } else {
            sumaImpares += i;
        }
    }

    console.log(`Números naturales entre ${numMenor} y ${numMayor}:`);
      for (let i = numMenor; i <= numMayor; i++) {
        console.log(i);
      }

    console.log(`Números naturales = ${contadorNaturales}`);
    console.log(`Números pares = ${contadorPares}`);
    console.log(`Suma de los impares = ${sumaImpares}`);
    rl.close();
  });
});
