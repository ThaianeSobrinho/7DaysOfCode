const prompt = require('prompt-sync')();

const nome = prompt('Qual é seu nome?');
const idade = prompt(`Quantos anos você tem?`);
const linguagem = prompt(`Qual linguagem de programação você está estudando?`);

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)

const resposta = prompt(`Você gosta de Estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÂO`);

if (resposta == 1) {
    console.log(`Muito bom! Continue estudando e você terá muito sucesso.`)
}

if (resposta == 2){
    console.log(`Ahh que pena... Já tentou aprender outras linguagens?`)
}

