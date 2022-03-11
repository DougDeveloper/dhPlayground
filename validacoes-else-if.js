// a variável dia, abaixo, determinará o que será impresso de acordo com as condicionais.
let dia = "quarta";

// caso a primeira condicional seja a mesma da variável, será impresso ("Vou para à praia.").
if (dia == "domingo"){
    console.log("Vou para à praia.")

}
// caso a segunda condicional, e não a primeira, seja a mesma da variável, será impresso ("Vou para o cinema.").
else if(dia == "sexta"){
    console.log("Vou para o cinema.")
}

// e finalmente, caso nenhuma das duas condicionais IF ou ELSE IF atenderem ao dia desejado determinado na variável dia, o ELSE entra em ação e imprime ("Fico em casa.").
else {
    console.log("Fico em casa.")
}

// OBS: nem sempre precisaremos de um ELSE, ELSE IF; podemos ter vários ELSE IF; sempre haverá somente 1 ELSE.