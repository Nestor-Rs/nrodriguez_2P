function calcularPuntaje(arreglo) {
    let puntaje = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      const numero = arreglo[i];
  
      if (numero === 5) {
        puntaje += 3;
      } else if (numero % 2 === 0) {
        puntaje += 2;
      } else if (numero !== 7) {
        puntaje += 1;
      }
    }
  
    return puntaje;
  }
  console.log(calcularPuntaje([1,2,3,4,5]));
  console.log(calcularPuntaje([17,19,21]));
  console.log(calcularPuntaje([5,5,5]));