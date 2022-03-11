// o que caracteriza um objeto literal é a variável que recebe suas propriedades que recebem seus valores entre {}, sempre separados por ,. Cada propriedade em uma linha como boa prática.
let carro = {
    nome: "Fox",
    ano: 2012
}

console.log(carro)

// outro exempre de impressão
let carro2 = {
    nome: "Fox",
    ano: 2012
}

console.log(carro2.nome)

// cocatenação entre imprimir a variável e informação adicional.
let carro3 = {
    nome: "Fox",
    ano: 2012
}

console.log(carro3.nome + " e seu ano é: " + carro3.ano)

// implementando um método para o objeto executar uma função.
let carro4 = {
    nome: "Fox",
    ano: 2012,
    ligar: function(){
        console.log("O carro fox está ligado.")
    }
}
// abaixo a função é executada
carro4.ligar()

// usando a sintaxe this que nos permite acessar informação dos atributos sem precisar repetir palavras, assim como a palavra  fox no exemplo acima.
let carro5 = {
    nome: "Fox",
    ano: 2012,
    ligar: function(){
        console.log("O carro " + this.nome + " está ligado.")
    }
}
// abaixo a função é executada
carro5.ligar()

// a função construtora serve como molde para criar vários objetos literais com a mesma estrutura sem precisar digitar várias vezes a mesma coisa.
// a função construtora sempre começa com letra Maiúscula.
function Carro6(nomeCarro6, anoCarro6){
    this.nomeCarro6 = nomeCarro6
    this.anoCarro6 = anoCarro6
}
// a partir daqui a função construtora nos permite criar vários outros objetos literais apenas através de variáveis utilizando a sintaxe new.
let civic = new Carro6("Civic", "2019")
let gol = new Carro6("Gol", "2017")

console.log(civic, gol)