const numero1 = 1; 
const numero2 = 20;

if (numero2 >= numero1) {
  let contador = 0;
  let suma = 0;

  console.log(`Múltiplos de 2 entre ${numero1} y ${numero2}:`);
  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 === 0) {
      console.log(i);
      contador++;
      suma += i;
    }
  }
  console.log(`Total de múltiplos: ${contador}`);
  console.log(`Suma de los múltiplos: ${suma}`);
} 