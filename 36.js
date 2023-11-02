function generarMatriz() {
    const matriz = [];
  
    for (let i = 0; i < 4; i++) {
      const fila = [];
      for (let j = 0; j < 5; j++) {
        fila.push(Math.floor(Math.random() * 100) + 1);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  
  function generarMatrizTranspuesta(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
  
    const matrizTranspuesta = [];
    for (let j = 0; j < columnas; j++) {
      const fila = [];
      for (let i = 0; i < filas; i++) {
        fila.push(matriz[i][j]);
      }
      matrizTranspuesta.push(fila);
    }
  
    return matrizTranspuesta;
  }
  
  function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join('\t'));
    }
  }
  
  const matrizAleatoria = generarMatriz();
  console.log('Matriz Original:');
  imprimirMatriz(matrizAleatoria);
  
  const matrizTranspuesta = generarMatrizTranspuesta(matrizAleatoria);
  console.log('\nMatriz Transpuesta:');
  imprimirMatriz(matrizTranspuesta);
  