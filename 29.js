function tirarDado() {
    return Math.floor(Math.random() * 6) + 1; 
  }
  let contador = 0;
  
  for (let i = 0; i < 100; i++) {
    const dado1 = tirarDado();
    const dado2 = tirarDado();
    const suma = dado1 + dado2;
    if (suma === 10) {
      contador++;
    }
  }
  console.log(`Veces que la suma de los dados fue 10: ${contador}`);