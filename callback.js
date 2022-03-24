// calback é uma função que passa como parâmetro outra função.
const somar = (numeroA, numeroB) => numeroA+numeroB

// aqui o callback é aplicado como o terceiro parâmetro da const calculadora.
const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA,numeroB)

console.log(calculadora(10,20, somar))