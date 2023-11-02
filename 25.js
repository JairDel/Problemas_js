function convertirANumerosRomanos(numero) {
    if (numero <= 0 || numero >= 5000) {
      return "Número fuera de rango";
    }
  
    const numerosRomanos = [
      { valor: 1000, romano: "M" },
      { valor: 900, romano: "CM" },
      { valor: 500, romano: "D" },
      { valor: 400, romano: "CD" },
      { valor: 100, romano: "C" },
      { valor: 90, romano: "XC" },
      { valor: 50, romano: "L" },
      { valor: 40, romano: "XL" },
      { valor: 10, romano: "X" },
      { valor: 9, romano: "IX" },
      { valor: 5, romano: "V" },
      { valor: 4, romano: "IV" },
      { valor: 1, romano: "I" }
    ];
  
    let resultado = "";
  
    for (const par of numerosRomanos) {
      while (numero >= par.valor) {
        resultado += par.romano;
        numero -= par.valor;
      }
    }
  
    return resultado;
  }
  
  const numero = 3492; 
  const numeroRomano = convertirANumerosRomanos(numero);
  
  console.log(`El número ${numero} en números romanos es: ${numeroRomano}`);
  