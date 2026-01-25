function gerar() {
    let num = document.getElementById('numero');
    let tabu = document.getElementById('tabuada');
    
    if (num.value.lenght == 0) {
        window.alert('[ERROR] Digite um número!')
    } else {
        let nu = Number(num.value);
        tabu.innerHTML = ''
        for(let t = 1; t <= 10; t++){
            let item = document.createElement('option')
            item.text = `${nu} x ${t} = ${nu*t}`
            tabu.appendChild(item)
        }
    }
}