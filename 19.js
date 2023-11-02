function relojDigital() {
    const horaActual = new Date();
    const horas = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const segundos = horaActual.getSeconds();
    console.clear(); 
    console.log(`Reloj Digital: ${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`);
  }

  function agregarCeros(valor) {
    if (valor < 10) {
      return "0" + valor;
    }
    return valor;
  }
  
  setInterval(relojDigital, 1000);