let dia  = "domingo"


// a variável let resultado irá armazenar o resultado do if ternário.
// em sua sintaxe o ponto de interrogação é inserido e em seguida as informações a serem retornadas caso a condição seja true ou false respectivamente.
let resultado = dia == "domingo"? "Vou à praia.": "Fico em casa."

console.log(resultado)

let dia2  = "segunda"
// a variável let resultado irá armazenar o resultado do if ternário.
// em sua sintaxe o ponto de interrogação é inserido e em seguida as informações a serem retornadas caso a condição seja true ou false respectivamente.
let resultado2 = dia2 == "domingo"? "Vou à praia.": "Fico em casa."

console.log(resultado2)

// OBS: o if ternário se aplica a condições simples. Para mais complexidade se aplica o if/if else.

// a função switch nos permite trazer outros casos que atendam condições estipuladas.
// no caso do dia ser segunda eu Vou tomar café. No caso do dia ser quarta eu Vou ao cinema. E os casos são infinitos.
// a função break serve para que a função switch pare no case que atenda à condição.
// case nenhum case seja executado a função default é executada.
let dia3 = "sexta"
switch(dia3){
    case "segunda":
        console.log("Vou tomar café.")
        break
    case "quarta":
        console.log("Vou ao cinema.")
        break
    default:
        console.log("Não irei fazer nada.")
}

// abaixo a condição if else no dia4 é alterada para if ternário no dia5.

let dia4 = "segunda-feira"
function fimDeSemana(dia4) {
    if (dia4 == "sexta-feira") {
        console.log("Bom fim de semana!");
    } else if (dia4 == "segunda-feira") {
        console.log("Boa semana!");
    } else {
        console.log("Bom dia!");
    }
}

let dia5 = "segunda-feira"
function fimDeSemana(dia5){
    switch(dia5){
        case "sexta-feira":
            console.log("Bom fim de semana!")
            break
        case "segunda-feira":
            console.log("Boa semana!")
            break
        default:
        console.log("Bom dia!")

    }
}