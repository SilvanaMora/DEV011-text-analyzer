const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`. 
    const frase=text; 
    let words=1;
    console.log(frase);
    for(let i=0;i<frase.length-1;i++){
      if((frase.charAt(i)===" "&&(frase.charAt(i+1)!==" "))){
        words++
      }
    } if(frase.charAt(0)===" "){
      words--
    }
    return words

  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recueento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /[ ,.!?;:]/g;
    return text.trim().replace(regex, "").length;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    const totalCharacters = words.reduce((a, b) => a + b.length, 0);
    return Math.round(totalCharacters / words.length * 100) / 100;

  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const newArr = text.trim().split(' ')
    let cant = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (!isNaN(newArr[i])) {
        cant++
      }
    }
    return cant
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.split(" ").map((number) => Number(number));
    let sum = 0;
    for (const number of numbers) {
      if (!isNaN(number)) {
        sum += number;
      }
    }
    return sum;
  },
}
export default analyzer;
