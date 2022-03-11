// abaixo temos o objeto literal pessoa.
let pessoa = {
    nome: "Vinicius",
    idade: 21,
    altura: 1.80
}

// aqui o json converte o objeto literal acima em string.
let json = JSON.stringify(pessoa)
console.log(json)

// aqui o json converte a string e, objeto literal.
let objetoLiteral = JSON.parse(json)
console.log(objetoLiteral)