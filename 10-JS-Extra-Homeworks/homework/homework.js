// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz=[];
  let keys;
  keys = Object.keys(objeto);
  for (let i = 0; i < keys.length; i++) {
    
    matriz.push([keys[i], objeto[keys[i]]])
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj={};
  for (let i = 0; i < string.length; i++) {
    let letra = string[i];
    if (obj[letra] === undefined) {
      obj[letra] = 1;
    }
    else{
      obj[letra] += 1;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas="";
  let minusculas="";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toLowerCase()) {
      minusculas+=s[i];
    }
    else{
      mayusculas+= s[i];
    }
  }
  return mayusculas+minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrPalabras= str.split(' ');
  let strMirror="";
  let palabra;
    for (let i = 0; i < arrPalabras.length; i++) {
      palabra= arrPalabras[i];
      
      for (let i = palabra.length-1; i > -1  ; i--) {
        strMirror+= palabra[i];
      }
      strMirror+=" ";
    }
  return strMirror.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let strNumeroMirror="";
  let strNumero = numero.toString();
  for (let i = strNumero.length-1; i > -1  ; i--) {
    strNumeroMirror+= strNumero[i];
  }
  if (numero === parseInt(strNumeroMirror)) {
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena=cadena.toLowerCase();
  let arrCadena = cadena.split('');
  let strNuevo="";
  for (let i = 0; i < arrCadena.length; i++) {
    if (arrCadena[i] === "a" || arrCadena[i]=== "b" || arrCadena[i]=== "c") {
    continue;
    }
    else{
      strNuevo+= arrCadena[i];
    }
  }
  return strNuevo;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let longitudes = [];
  let indices = [];
  let arrFinal=[];
  let enOrden=[];
  let indice;
  function comparar ( a, b ){ return a - b; }
  
  for (let i = 0; i < arr.length; i++) {
    longitudes.push(arr[i].length)
    indices.push(i)
    enOrden.push(arr[i].length);
  }
  enOrden.sort(comparar);
  
  for (let i = 0; i < enOrden.length; i++) {
    
    for (let j = 0; j < longitudes.length; j++) {
      
      if (longitudes[j] != "") {
        
        indice = longitudes.indexOf(enOrden[i]);
        
      if (indice != -1) {
        
        arrFinal.push(arr[indices[indice]]);
        longitudes[indice] = "";
        indices[indice] = "";  
      }
      }
    }
  }
  return arrFinal;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let coincidencias=[];

  for (let i = 0; i < arreglo1.length; i++) {
    
    for (let j = 0; j < arreglo2.length; j++) {
      
      if (arreglo1[i] == arreglo2[j]) {
        coincidencias.push(arreglo1[i]);
      }      
    }
  }
  return coincidencias;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

