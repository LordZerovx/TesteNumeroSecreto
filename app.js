let texto = document.getElementById("textoPrincipal");
let texto2 = document.getElementById("textoSecundario");
let corpo = document.getElementById("container");
let enviar = document.getElementById("enviar");
let botaoReiniciar = document.getElementById("reiniciar");
let numeroAleatorio = gerarNumeroAleatorio();
let textoTeste = document.getElementById("textoTeste");

botaoReiniciar.disabled = true;

corpo.style.backgroundColor = "white";

texto.innerHTML = numeroAleatorio;

let tentativas = 0;

function limparCampo(){
    resposta.value = "";
}

function verificarResposta(){
    let resposta = document.getElementById("resposta").value;

    if(tentativas < 5){
        if(resposta == numeroAleatorio){
           //resposta.style.backgroundColor = "#7FFFD4";
            textoTeste.innerHTML = "Parabéns";
            botaoReiniciar.disabled = false;
        } else if(resposta == ""){
            //resposta.style.backgroundColor = "#C71585";
            alert("Erro, campo vazio")
        } else {
            //resposta.style.backgroundColor = "#C71585";
            textoTeste.innerHTML = "Errou! Tente novamente";
            tentativas++;
            limparCampo()
        }
    } else{
        corpo.style.backgroundColor = "#C71585";
        textoTeste.innerHTML = "Que pena";
        botaoReiniciar.disabled = false;
    }
}

function gerarNumeroAleatorio(){
    let numeroGerado = parseInt(Math.random() * 10);
    return numeroGerado;
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 0;

    texto.innerHTML = numeroAleatorio;

    textoTeste.innerHTML = "Descubra o número secreto em 5 tentativas";

    resposta.value = "";
    botaoReiniciar.disabled = true;
}