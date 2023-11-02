const numero = 7; 

function factorial(numero){
    if(numero === 0 || numero === 1){
      return 1; 
    } else {
      return numero * factorial(numero - 1);
    }
  }
const resultado = factorial(numero);
console.log(`Factorial de ${numero} = ${resultado}`);