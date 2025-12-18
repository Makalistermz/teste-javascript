var semana = new Date()
var diasem = semana.getDay()
console.log('Hoje o dia é...')
switch (diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Não existe esse dia!')
        break
}

function enviar() {
    var  idade = document.getElementById('idade')
    var ida = Number(idade.value)
    var r = document.getElementById('res')

    if (ida < 16) {
        r.innerHTML = 'Não vota!'
        r.style.color = 'red'
    } else if (ida >= 16 && ida < 18 || ida > 65){
        r.innerHTML = 'Voto opcional!'
        r.style.color = 'purple'
    } else if (ida > 18) {
        r.innerHTML = 'Voto obrigatório!'
        r.style.color = 'green'
    }
}

