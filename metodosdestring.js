// o método length, em string, conta todos os caracteres desta.
    console.log("Oi eu sou o Vinicius".length)

// usando o método length através de uma variável.
let pessoa = ("   Oi    eu sou o Vinicius")
    console.log(pessoa.length)

// o método indexOf informa a posição do caractere desejado.
    console.log(pessoa.indexOf("s"))

// o método indexOf também informa a posição inicial de um conjunto de caracteres. Não necessariamente precisa ser a palavra inteira.
    console.log(pessoa.indexOf("Vinicius"))
    console.log(pessoa.indexOf("Vini"))

// o método indexOf retorna a posição -1 caso um caractere ou um conjunto de caracteres não exista dentro da string.
    console.log(pessoa.indexOf("Joao"))

// o método slice divide e imprime a string conforme desejado, basta informar as posições de início e término.
    console.log(pessoa.slice(0,3))

// o método trim retira caracteres espaços desnecessários da string. OBS: mas não tira espaços entre as palavras.
    console.log(pessoa.trim())

// o método split transforma uma string em um array. Abaixo nenhum parâmetro foi dado, logo imprime somente uma posição.
    console.log(pessoa.split())

// Abaixo o parâmetro abaixo é o caractere espaço " ". Logo, tudo separado por um espaço será dividido com posição no array.
    console.log(pessoa.split(" "))

// o método replace altera parte da string, conforme desejado.
    console.log(pessoa.replace("Vinicius","Joao"))