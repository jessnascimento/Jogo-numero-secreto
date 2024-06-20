alert('Boas vindas ao jogo do número secreto');
let numeroMax = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMax}`);
    if(chute == numeroSecreto){
        break;
    } else{
        if(numeroSecreto > chute){
            alert(`O numero secreto é maior que o ${chute}`);
        }else{
            alert(`O numero secreto é menor que o ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
console.log(`Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
