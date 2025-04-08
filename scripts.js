let circulo = document.querySelector(".circulo");
let imagem = document.querySelector(".ima");
let trocarcorbotao = document.querySelector(".mudar");

function trocarCor(cor) {
  circulo.style.background = cor;
}

function trocarImagem(img) {
  imagem.src = img;
}

function mudarcor(corr) {
  trocarcorbotao.style.background = corr;
}
