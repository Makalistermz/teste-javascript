const calcular = (num1, num2, operacao) => {
    return operacao(num1, num2);
}

const subtracao = (num1, num2) => {
    return num1 - num2;
}

const multiplicacao = (num1, num2) => {
    return num1 * num2;
}

const resultadoSubtracao = calcular(8, 2, subtracao);
console.log(resultadoSubtracao);

const resultadoMultiplicacao = calcular(4, 2, multiplicacao);
console.log(resultadoMultiplicacao);