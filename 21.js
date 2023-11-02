let pares = 0;
let impares = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    pares += i;
  } else {
    impares += i;
  }
}
console.log("Suma de pares: " + pares);
console.log("Suma de mpares: " + impares);