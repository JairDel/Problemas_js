for (let fila = 0; fila <= 10; fila++) {
    let filaNumeros = '';
    for (let columna = 0; columna <= 10; columna++) {
      const numero = fila * 11 + columna;
      if (numero <= 100) {
        filaNumeros += numero.toString().padStart(4) + ' ';
      }
    }
    console.log(filaNumeros);
  }
  