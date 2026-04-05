const senha = document.querySelector('#senha');
const confirm = document.querySelector('#confirmsenha');
const btn = document.querySelector('#btn');

function confirmarsenha(valor) {
    
    if (valor.length < 8) {
        alert('No minimo 8 caracteres');
    }
}

function confirmarsenha() {

    if (senha.value === confirm.value) {
        alert('tudo certo!');
    } else {
        alert('Senha diferente!');
    }
}