function ordenarMatrizPorPrimeraColumna(matriz) {
    const filas = matriz.length;
    for (let gap = Math.floor(filas / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < filas; i++) {
        const temp = matriz[i];
        let j = i;
        while (j >= gap && matriz[j - gap][0] > temp[0]) {
          matriz[j] = matriz[j - gap];
          j -= gap;
        }
  
        matriz[j] = temp;
      }
    }
  }
  
  const matriz = [
    [3, "A", "X"],
    [1, "B", "Y"],
    [5, "C", "Z"],
    [2, "D", "W"],
    [4, "E", "V"],
  ];
  
  ordenarMatrizPorPrimeraColumna(matriz);
  matriz.forEach((fila) => {
    console.log(fila.join("\t"));
  });
  