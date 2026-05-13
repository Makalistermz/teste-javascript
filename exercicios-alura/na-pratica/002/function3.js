function calcularDesconto(preco, percentualDesconto) {
    return preco - (preco * percentualDesconto);
}

const resultado = calcularDesconto(200, .30);
console.log(resultado);
