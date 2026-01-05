var n11 = Math.floor(Math.random() * 10) + 1;

function enviar() {
    var nu = document.getElementById('num');
    var numb = Number(nu.value);
    var resul = document.getElementById('res');
    var di = document.getElementById('dica')

    if (numb.value === '') {
        resul.innerHTML = '⚠️ Digite um número!';
        resul.style.color = 'orange';
        di.style.display = 'none';
        return;
    }

    if (numb === n11) {
        resul.innerHTML = `Você Acertou!! O número correto era ${n11}`;
        resul.style.color = 'green';
        di.style.display = 'none'
    } else if (numb < n11) {
        di.innerHTML = `O número é maior!`
        di.style.display = 'block'
    } else {
        di.innerHTML = `O número é menor!`
        di.style.display = 'block'
    }
}
