function calcularDesconto(preco, percentualDesconto) {
    return preco - (preco * percentualDesconto);
}

const resultado = calcularDesconto(200, .30);
console.log(resultado);

function processarCompra(precoProduto, quantidade, temDesconto, desconto) {

    if (precoProduto && quantidade > 0) {

        if (temDesconto === true) {
            return (precoProduto * quantidade) - (desconto * (precoProduto * quantidade))
        } else {
            return precoProduto * quantidade;
        }

    } else {
        return "Valores inválidos";
    }
}

const Precos = processarCompra(100, 3, true, .15);

console.log(Precos);