// as => funcionam em funções declaradas de forma expressiva, ou seja, por meio de variáveis.
const somar = function(){
    console.log("Estou em uma function.")
}
// função deve sempre ser chamada na última linha do seu "pedaço" do código pela variável seguida de ().
somar()

// no exemplo abaixo a => substitui a palavra function
const somar2 = ()=>{
    console.log("Estou em uma arrow function.")
}
somar2()

// caso a => tenha somente uma linha pode ser expressada assim:
const somar3 = () => console.log("Estou em uma arrow function de uma linha só.")

somar3()

// para receber um número até os () se fazem desnecessários.
const somar4 = numero => console.log("Estou em uma arrow function com número: " + numero)
// adicionamos o número à função para ser retornada.
somar4(10)

const somar5 = numero => console.log("Estou em uma arrow function com expressão numérica: " + numero)

somar5(10+10)

// para dois parâmetros ou mais se faz necessário o uso dos ().
const somar6 = (numeroA, numeroB) => console.log("Estou em uma arrow function com número: " + numeroA)

somar6(10, 20)

// para a implementação da função e seu retorno, teremos q adicionar mais uma linha, logo, voltaremos com a estrutura original de função.
const somar7 = (numeroA, numeroB) => {
    console.log("Estou em uma arrow function de estrutura original e expressão numérica. ")
    return numeroA + numeroB
}

console.log(somar7(10, 20))

// transformando functions em arrow functions.

// functions
function cincoNumeros() {
    return [1,2,3,4,5];
}

function multiplicarPorDois() {
  return 123 * 2 ;
}

function mostrarNome() {
  return "Meu nome é Ryan Dahl";
}

// arrow functions
let cincoNumeros = () => {
    return [1,2,3,4,5];
}

let multiplicarPorDois = () => {
  return 123 * 2 ;
}

let mostrarNome = () => {
  return "Meu nome é Ryan Dahl";
}