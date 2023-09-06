import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//const elementTextArea = document.querySelector("[name='user-input']");
//elementTextArea.addEventListener('keyup', ()=> {
  //  console.log(elementTextArea.value)
    //console.log(analyzer.getWordCount(elementTextArea.value))
//})

const texTarea = document.querySelector("[name='user-input']");

texTarea.addEventListener("input",cuentaPalabras);

function cuentaPalabras (e) {
  const text = document.querySelector("[name='user-input']").value;
  if(e.data===" ")return
  const wordCount  = analyzer.getWordCount(text);
  document.querySelector("#conteo1").innerHTML=wordCount;
}

texTarea.addEventListener("input",cuentaCaracteres);

function cuentaCaracteres () {
  const text = document.querySelector("[name='user-input']").value;
  const characterCount  = analyzer.getCharacterCount(text);
  document.querySelector("#conteo2").innerHTML=characterCount;
}

texTarea.addEventListener("input",cuentaCaracteresSinEspacios);

function cuentaCaracteresSinEspacios () {
  const text = document.querySelector("[name='user-input']").value;
  const characterCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector("#conteo3").innerHTML=characterCountNoSpaces;
}

texTarea.addEventListener("input",cuentaNumeros);

function cuentaNumeros () {
  const text = document.querySelector("[name='user-input']").value;
  const cuentaNumeros = analyzer.getNumberCount(text);
  document.querySelector("#conteo4").innerHTML=cuentaNumeros;
}

texTarea.addEventListener("input",sumaNumeros);

function sumaNumeros () {
  const text = document.querySelector("[name='user-input']").value;
  const sumaNumeros = analyzer.getNumberSum(text);
  document.querySelector("#conteo5").innerHTML=sumaNumeros;
}

texTarea.addEventListener("input",promedioLongitud);

function promedioLongitud () {
  const text = document.querySelector("[name='user-input']").value;
  const promedioLongitud = analyzer.getAverageWordLength(text);
  document.querySelector("#conteo6").innerHTML=promedioLongitud;
}

const borrar = document.querySelector("#reset-button");
const caja = document.querySelector("[name='user-input']");
borrar.addEventListener("click", function() {
  document.querySelector("#conteo1").innerHTML="0";
  document.querySelector("#conteo2").innerHTML="0";
  document.querySelector("#conteo3").innerHTML="0";
  document.querySelector("#conteo4").innerHTML="0";
  document.querySelector("#conteo5").innerHTML="0";
  document.querySelector("#conteo6").innerHTML="0";
  caja.value = "";
});