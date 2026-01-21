function clique() {
    var r = document.getElementById('res');
    r.innerHTML = "";
    for (var com = 1; com <= 10; com++) {
        r.innerHTML += `${com}<br>`;
    }
}