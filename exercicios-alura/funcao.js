function saudacao(nome) { // nome é um parametro da função
    console.log('Olá, ', nome)
}

//chamar a função para ela retornar algo
saudacao('Makalister') // argumento, "Makalister" é o argumento
saudacao('Agnaldo')

function calcularDobro(numero) {
    return numero * 2;
}

const numeroDobrado = calcularDobro(4);
console.log('O dobro de 4 é', numeroDobrado);