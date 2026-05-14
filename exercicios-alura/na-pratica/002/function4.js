const calcularArea = (largura, altura) => largura * altura;

const area = calcularArea(10, 5);
console.log(area);

//const verificarMaioridade = (idade) => {
//    console.log('A pessoa tem', idade, 'anos');
//}

const verificarMaioridade = idade => console.log('A pessoa tem', idade, 'anos');

const idade = verificarMaioridade(18);

const somar = (a, b) => a + b;

const soma = somar(5, 7);
console.log(soma);

const numeroElevado = numero => numero**2;
const elevado = numeroElevado(3);
console.log(elevado);