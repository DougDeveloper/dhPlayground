let numerosPares = [2,4,6,8,10]

// o método map() percorre por cada item do array e altera da forma como vc deseja.
// a proposta abaixo é dobrar os números do array numerosPares.

// dentro de map() é passado o callback, ou seja, a função da função, que será executada para cada um dos itens do array
numerosPares.map(function(valor){
    console.log(valor *2)
})

// para retornar como array o código fica:
let numerosImpares = [1,3,5,7,9]
let numerosImparesDobro = numerosImpares.map(function(valor){
    return valor *2
})

console.log(numerosImparesDobro)

// o método filter() filtra, retira elementos do array.
let numerosFilter = numerosPares.filter(function(valor){
// neste return filtramos os números menores que 6.
    return valor <6
})

console.log(numerosFilter)

// o método reduce() reduz o array a um único valor especificado através de qualquer operação.
// este método possui dois parâmetros no callback pois o acum (acumulativo) é o resultado do
//elemento inicial com o próximo. Este resultado é acumulado novamente, é gerada a nova operação:
//o valor acumulado com o próximo e assim por diante.
let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor
})

console.log(somaPares)

// o método foreach() permite passarmos pelos elementos do array e assim podemos fazer o que quiser.
// abaixo podemos aferir a posição de cada elemento do array.
numerosPares.forEach(function(valor, indice){
    console.log("O índice "+indice+" tem o valor "+valor)
})