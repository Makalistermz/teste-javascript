function enviar() {
    var r = document.getElementById('res');
    var sen = document.getElementById('senha');
    var correta = 'correta';
    
    if (sen.value === correta) {
        r.innerHTML = `A senha está correta!!`
        r.style.color = 'green'
    } else {
        r.innerHTML = `A senha está errada!`
        r.style.color = 'red'
    }
}