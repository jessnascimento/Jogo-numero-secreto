let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoTela('p', mensagemTentativas);
    }else{
        if (chute > numeroSecreto){
            exibirTextoTela('h1', 'Tente novamente!');
            exibirTextoTela('p', 'Chute maior que numero secreto.');
        }else{
            exibirTextoTela('h1', 'Tente novamente!');
            exibirTextoTela('p', 'Chute menor que numero secreto.');
        }
        tentativas++
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}