const categoria = 'livro';

switch (categoria) {
    case 'eletrônico':
        console.log('Você vai comprar um eletrônico!');
        break;
    case 'alimento':
        console.log('Você vai comprar um alimento!');
        break;
    case 'roupa':
        console.log('Você vai comprar uma roupa!');
        break;
    case 'livro':
        console.log('Você vai comprar um livro!');
        break;
    default:
        console.log('Este item não existe nessa loja!');
        break;
}