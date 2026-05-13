//function saudacao(nome) { // nome é um parametro da função
//    console.log('Olá, ', nome)
//}

//const saudacao = (nome) => {
//    console.log('Vida longa e próspera,', nome)
//}

const saudacao = nome => console.log('Olá,', nome); //Quando tiver um parametro e função

//chamar a função para ela retornar algo
saudacao('Makalister') // argumento, "Makalister" é o argumento
saudacao('Agnaldo')

//function calcularDobro(numero) {
//    return numero * 2;
//}     

//const calcularDobroDeUm = (numero) => {
//    return numero * 2
//}

const calcularDobroDeUm = numero => numero * 2; //quando escreve desse jeito o js ja retorna para nós

const numeroDobrado = calcularDobroDeUm(4);
console.log('O dobro de 4 é', numeroDobrado);