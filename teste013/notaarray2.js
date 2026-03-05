let notas = [7, 4, 10, 6, 4, 8];

console.log(`Essa são as notas dos ${notas.length} alunos ${notas}`);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log(`A média de notas dos ${notas.length} alunos foram ${media} pontos`)

let acimaMedia = 0;

for (let n = 0; n < notas.length; n++) {
    if (notas[n] > media) {
        acimaMedia++
    }
}

console.log(`${acimaMedia} alunos Ficaram acima da média`);

let abaixoMedia = 0;

for (let a = 0; a < notas.length; a++) {
    if (notas[a] < media) {
        abaixoMedia++
    }
}

console.log(`${abaixoMedia} alunos Ficaram abaixo da média`);