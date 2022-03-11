let pessoa = ["Vinicius", 1.80, "Vinicius"]
console.log(pessoa)

// o método push ADICIONA informação no FINAL do array.
    pessoa.push(22)
    console.log(pessoa)

// o método pop RETIRA O ÚLTIMO ELEMENTO do array.
    pessoa.pop()
    console.log(pessoa)

// o método unshitft ADICIONA o elemento no COMEÇO do array.
    pessoa.unshift(22)
    console.log(pessoa)

// o método shitft RETIRA o elemento no COMEÇO do array.
    pessoa.shift(22)
    console.log(pessoa)

// o método indexOf imprime a posição do elemento do array. No caso de "Vinicius" imprime 0.
    console.log(pessoa.indexOf("Vinicius"))
// caso não encontre o elemento desejado imprime a posição -1.
    console.log(pessoa.indexOf("vinicius"))

// o método lastIndexOf imprime a posição do elemento do array DO FINAL PARA O COMEÇO. No caso de "Vinicius" imprime 2.
    console.log(pessoa.lastIndexOf("Vinicius"))

// o método join transforma o array em string. Dentro dos () podemos determinar o caractere que separa das strings.
    console.log(pessoa.join("-"))