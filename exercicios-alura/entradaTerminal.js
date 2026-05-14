const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o sseu nome?', (nome) => {
    console.log('Olá,', nome)
    console.log('Boas vindas ao nosso sistema!')

    leitor.question('Qual é a sua idade?', (idade) => {
        if (idade >= 18) {
            console.log('Uau! você ja pde tirar sua CNH');
        } else {
            console.log('Você ainda não pode tirar sua CNH!');
        }

        leitor.close()
    })
})