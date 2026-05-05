const tempertura = 50;
const ehFimDeSemana = true;

const verificar = (tempertura > 30) && (ehFimDeSemana === true)
? ('dia perfeito')
: ('dia para ficar em casa');

console.log(verificar);