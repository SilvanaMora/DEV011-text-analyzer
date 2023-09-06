const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`. 
  const words = text.split(" ");
   return words.length;
    
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
    return totalCharacters / words.length;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // const regex = /\d+/g;
    // console.log (text.match(regex))
    // return text.match(regex).length;

    const newArr = text.trim().split(' ')
    console.log(newArr)
    let cant = 0;
    for (let i = 0; i < newArr.length; i++) {
      if(!isNaN(newArr[i])){
        cant ++
      }
    }
    return cant
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  //  const numbers = text.split(" ").map((number) => Number(number));
    //console.log (numbers)
    //const sum = numbers.reduce((sum, number) => sum + number, 0);
    //return sum;
  //},


const numbers = text.split(" ").map((number) => Number(number));
  console.log (numbers)
  let sum = 0;
  for (const number of numbers) {
    if (!isNaN(number)) {
      sum += number;
    }
  }
  return sum;
},}
export default analyzer;
