console.log(`Criando uma calculadora`);

const prompt = require('prompt-sync')();
const pergunta = prompt('Quer realizar alguma operação, sim ou sair?');

while (pergunta != "sair"){

const operação = prompt ('Qual operação deseja realizar: soma, subtração, multiplicação ou divisão?')        

if (operação === "sair"){
        break;
}

let valorUm = parseInt (prompt ('Digite o primeiro número da operação.'));
let valorDois = parseInt (prompt ('Digite o segundo número da operação.'));

if (operação === "soma") {
        console.log ('Resultado='+ (valorUm += valorDois))

} else if (operação === "subtracao") {
        console.log ('Resultado='+ (valorUm -= valorDois))

}else if (operação === "multiplicacao") {
        console.log ('Resultado='+ (valorUm *= valorDois))

}else if (operação === "divisao") {
        console.log ('Resultado='+ (valorUm /= valorDois))
}
}

console.log ('Até a próxima')