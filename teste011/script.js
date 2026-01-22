function contar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let pu = document.getElementById('pulo');
    const res = document.getElementById('res')

    let inicio = Number(ini.value);
    let fi = Number(fim.value);
    let pulo = Number(pu.value);

    if (pulo <= 0) {
        window.alert(`[ERROR] Não é possivel usar 0 outro número menor!!`);
    }

    res.innerHTML = 'Contando:<br>';

    if (inicio > fi) {
        for (var n = inicio; n >= fi; n -= pulo) {
            res.innerHTML += `${n} 👉`;
        }
    }
}

