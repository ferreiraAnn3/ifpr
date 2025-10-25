/// 1.SELECIONANDO ELEMENTOS

//Seleciona o elemento <h1> pelo id
const titulo = document.getElementById("titulo");

//Seleciona o elemento <p> pelo id
const descricao = document.getElementById("descricao");

//Seleciona o elemento <button> pelo id
const btn = document.getElementById("btn");

//Seleciona o elemento <div> pelo id
const area = document.getElementById("area");

//Exibe elementos no console
console.log(titulo, descricao, btn, area);

/// 2.ALTERANDO CONTEUDO E ESTILO

//Altera o texto do elemento <h1>
titulo.textContent = "Alterando texto do elemento usando DOM";

//Muda a cor e o tamanho da fonte do paragrafo
descricao.style.color = "#cc518cff";
descricao.style.fontSize = "18pt";
descricao.style.fontFamily= "sans-serif";

//Altera o funo da pagina
document.body.style.backgroundColor = "#72d198ff";

/// 3. EVENTOS: REAGINDO A ACOES DO USUARIO

//Exibir frase qaundo o usuuario clicar no botao (evento)
btn.addEventListener("click", () => {
    //Altera o texto do titulo
    titulo.textContent = "Coçorro";

    //Altera acor do paragrafo
    descricao.style.color = "#b9276eff";

    //Exibir prompt para solicitar nome ao usuario
    let nomeUsuario = prompt("Qual o seu nome?"); //interacao com usuario

    //Exibir saudacoes ao usuario em um alerta
    alert("Seja bem vindo(a), " + nomeUsuario + ".");
});

/// 4. INPUTS E RESPOSTAS DINAMICAS

//Selecionar os elementos da secao de saudacao
const nomeUsuario = document.getElementById("nomeUsuario");
const saudar      = document.getElementById("saudar");
const mensagem    = document.getElementById("mensagem");

//QWuandob botao for clicado, dispara o evento
saudar.addEventListener("click", () => {
    //Altera o texto dop paragrafo com o valor informado no input
    mensagem.textContent = "Seja bem vindo(a), " + nomeUsuario.value + "!";

    //Limpa o campo apos o clique
    nomeUsuario.value = "";

});

///5. CRIANDO E REMOVENDO ELEMENTOS DINAMICAMENTE

//Seleciona a area e onde os elementos serao adicionados
//Cria novo paragrafo
const novoParagrafo = document.createElement("p");
//Adiciona o paragrafo da div #area
novoParagrafo.textContent = "Sou um paragrafo criado com JavaScript";
area.appendChild(novoParagrafo);

//Remover o paragrafo
novoParagrafo.remove();

/// 6. CLASSES E ESTILOS DINAMICOS

// Seelecionar otexto e o botao
const texto = document.getElementById("texto");
const btnClasse = document.getElementById("btnClasse");

btnClasse.addEventListener("click", () => {
    //Adiciona ou remove classe css "destque" (se ela existir, remove, se nao existir, cria)
    texto.classList.toggle("destaque");
});

/// 7. MINI PROJETO: ALTERNADOR DE COR
const inputCor = document.getElementById("corEscolhida");
const botaoCor = document.getElementById("mudarCor");
const atual = document.getElementById("atual");

//Criar evento
botaoCor.addEventListener("click", () => {
    //Aplica a cor escolhida ao fundo da página
    document.body.style.backgroundColor = inputCor.value;

    //Exibir a cor atual do texto
    atual.textContent= "Cor atual " + inputCor.value;
});