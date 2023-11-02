function lanzarMoneda() {
    const resultado = Math.random(); 
    if (resultado < 0.5) {
      return "cara";
    } else {
      return "cruz";
    }
  }
  const lanzar = lanzarMoneda();
  console.log(lanzar);
  