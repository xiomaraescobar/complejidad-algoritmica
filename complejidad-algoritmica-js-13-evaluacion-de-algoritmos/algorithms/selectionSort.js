/**
 * Complejidad Temporal -> O(n^2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
function selectionSort(arreglo) { //O(n commit )
  let longitud = arreglo.length; //O(1)

  for (let i = 0; i < longitud; i++) { //O(1)
    let minimo = i; //(1)
    for (let j = i + 1; j < longitud; j++) { //O(1)
      if (arreglo[j] < arreglo[minimo]) { 
        minimo = j; 
      }
    }
    if (minimo != i) { 
      let temporal = arreglo[i]; //O(1)
      arreglo[i] = arreglo[minimo]; 
      arreglo[minimo] = temporal; 
    }
  }
  return arreglo; 
}
