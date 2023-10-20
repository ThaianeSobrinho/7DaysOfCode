console.log("Trabalhando com listas");

let frutas = ['banana', 'maçã', 'manga']
let doces = ['chocolate', 'bala']
let legumes = ['cenoura', 'mandioquinha']
let laticinios = ['leite', 'iogurte']

const listaMercado = new Array (frutas, doces, legumes, laticinios)

const prompt = require('prompt-sync')();
const adicionar = prompt('Quer adicionar alguma comida na lista de compras?');

while (adicionar  != "nao" ){

const produto = prompt ("Qual comida quer adicionar?") 
const categoria = prompt(`Em qual categoria essa comida se encaixa: frutas, laticinios, doces ou legumes?`);

if (categoria === "frutas"){
   frutas.push(produto)
} else if (categoria === "doces") {
   doces.push(produto)
} else if (categoria === "laticinios") {
   laticinios.push(produto)
} else if (categoria === "legumes") {
   legumes.push(produto)
}

const continuar = prompt(`Deseja continuar?`)
if (continuar === "nao"){
   break
}
} 

console.log(listaMercado)
console.log(`Boas compras!`)
