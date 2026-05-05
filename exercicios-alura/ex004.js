const nome = "Roberta";
const nota = 8; 
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2) 
  ? `${nome} recebe bônus` 
  : `${nome} Não recebe bônus`

console.log(recebeBonus);

const user = 'premium';

switch (user) {
    case 'free':
        console.log('acesso limitado');
        break;
    case 'premium':
        console.log('acesso total ao app');
        break;
    case 'super premium':
        console.log('acesso total ao app e bônus');
        break;
    default:
        console.log('tipo de user desconhecido');
        break;
}