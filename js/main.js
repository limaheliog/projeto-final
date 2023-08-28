var texto = "Helio Gaspar Meneghini de Lima";
var atraso = 50;
var textoElemento = document.querySelector(".titulo-destaque");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();


