console.log (`Removendo itens da lista`)

let frutas = ['banana', 'maçã', 'manga']
let doces = ['chocolate', 'bala']
let legumes = ['cenoura', 'mandioquinha']
let laticinios = ['leite', 'iogurte']

const listaMercado = new Array (frutas, doces, legumes, laticinios)

const prompt = require('prompt-sync')();
const retirar = prompt('Quer retirar algum item na lista de compras?');

while (retirar != "nao" ){

const categoria = prompt('O que deseja retirar da lista de compras?');

if (categoria === "frutas"){
    listaMercado.splice(0,1)
} else if (categoria === "doces"){
    listaMercado.splice(1,1)
} else if (categoria === "legumes"){
    listaMercado.splice(2,1)
} else if (categoria === "laticinios"){
    listaMercado.splice(3,1)
}
const continuar = prompt (`Deseja continuar?`)
if (continuar === "nao"){
    break
}
}

console.log(listaMercado)


