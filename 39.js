const numPaginas = 3;
const filasPorPagina = 4;
const columnas = 5;
let valor = 1;

for (let pagina = 1; pagina <= numPaginas; pagina++) {
  console.log(`Página ${pagina}:`);
  for (let fila = 1; fila <= filasPorPagina; fila++) {
    const filaActual = [];
    for (let columna = 1; columna <= columnas; columna++) {
      filaActual.push(valor);
      valor++;
    }
    console.log(filaActual.join('\t'));
  }
  console.log('\n');
}