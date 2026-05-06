const tipoCliente = 'prata';
const valorCompra = 200;
let desconto = '';

switch (tipoCliente) {
    case 'bronze':
        desconto = 5;
        break;
    case 'prata':
        desconto = 10;
        break;
    case 'ouro':
        desconto = 15;
        break;
    default:
        console.log('não existe este tipo de cliente!');
        break;
}

const verificar = (valorCompra > 100) && (desconto !== '')
? `Seu desconto é de ${desconto}%`
: `Não à desconto para você`;

console.log(verificar);