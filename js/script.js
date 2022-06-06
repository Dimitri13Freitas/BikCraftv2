// Ativar os links menu navegação
const links = document.querySelectorAll(".header-menu a");

function verificaLink(link) {
  const url = location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add('ativo');
  };
};

links.forEach(verificaLink);


// Ativar itens do Orçamento
const parameters = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parameters.forEach(ativarProdutos);


// Perguntas frequntes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);


}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
};

perguntas.forEach(eventosPerguntas);


// Galeria interativa
const img = document.querySelectorAll(".bicicleta-imagens img")

function troca(event) {
  const principal = document.getElementById("imgAtivo")
  const clique = event.currentTarget;
  principal.src = clique.src
  principal.alt = clique.alt
}


function galeria(imagem) {
  imagem.addEventListener("click", troca);
};

img.forEach(galeria);
