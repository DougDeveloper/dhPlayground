// o método for in trabalha em objetos literais.
let carro = {
    nome: "fox",
    ano: "2011"
}

// para executarmos o for in utilizamos uma variável que passará por cada propriedade do objeto literal.
// abaixo imprime a propriedade do objeto literal
for(let propriedade in carro){
    console.log(propriedade)
}

//abaixo é a sintaxe completa deste método com o objeto, neste caso: carro, seguido da variável, entre [].
// abaixo imprime os valores do objeto literal.
for(let propriedade in carro){
    console.log(carro[propriedade])
}