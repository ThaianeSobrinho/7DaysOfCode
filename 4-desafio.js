
console.log(`Adivinhe o número de 0 a 10?`)

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

let variavelAleatoria = random(0,10) 
console.log(variavelAleatoria)

if (variavelAleatoria == 7){
    console.log(`Parabéns, você acertou.`)
    
}else if (variavelAleatoria !== 7){
    console.log(`Que pena, você errou.`)
    
}