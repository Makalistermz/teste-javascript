function verificar() {
    let ida = (document.getElementById('idade').value);
    let res = document.getElementById('res');

        if (ida.length == 0) {
        window.alert("Não há numero!");
        return;
    }

    res.innerHTML = ''

    if (ida >= 0 && ida < 12) {
        res.innerHTML = 'Você é criança 👶'
    } else if (ida >= 12 && ida <= 18) {
        res.innerHTML = 'Você é adolescente 🙂'
    } else if (ida >= 18 && ida < 60) {
        res.innerHTML = 'Você é adulto 👨‍💼'
    } else {
        res.innerHTML = 'Você é idoso 👴'
    }
    }
