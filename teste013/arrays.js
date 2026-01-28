let nomes = ['Maria', 'João', 'Pedro', 'Fernanda']
nomes[4] = ('Marcos')
nomes.push('Thales')
nomes.sort()


for (let sala = 0; sala < nomes.length; sala++) {
    console.log(`Nessa sala tem o aluno numero ${sala +1}, e o respectivo nome dele(a) é ${nomes[sala]}`)
}

let organizado = nomes.indexOf('Maria')

if (organizado == -1) {
    console.log('Aluno não encontrado')
} else {
    console.log(`Maria é o numero ${organizado +1} da sua chamada`)
}
