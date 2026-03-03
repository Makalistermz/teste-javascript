let notas = [];

notas = [5, 9, 6, 2, 8];
notas.sort();

let notamax = Math.max(...notas);
let notamin = Math.min(...notas);

console.log(`Todas as notas da sala foram ${notas}`);

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log(`A nota media da sala foi de ${media} pontos!`)

console.log(`A nota máxima da sala foi ${notamax} pontos!`);

console.log(`A nota mínima da sala foi ${notamin} pontos!`);