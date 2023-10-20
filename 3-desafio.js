const prompt = require('prompt-sync')();
const nome = prompt (`Olá qual é o seu nome?`)
const area = prompt(`Você quer seguir para área de Front-End ou Back-End?`) 

if (area === "Front-End"){
    const area1 = prompt (`Quer aprender React ou Vue?`)
}
else if (area === "Back-End"){
    const area2 = prompt (`Quer aprender C# ou Java?`)
}

console.log(`Ok, você pode seguir se especializando na área!`)

