function somar() {
    //ligando httml ao js
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    //transformando para número
    n1 = Number(n1);
    n2 = Number(n2);

    let soma = n1 + n2;

    //mostrando resultado na tag <p>
    document.getElementById("resultado1").innerText = "resultado: " + soma;
}

function subtracao() {
    let n3 = document.getElementById("num3").value;
    let n4 = document.getElementById("num4").value;

    n3 = Number(n3);
    n4 = Number(n4);

    let subtracao = n3 - n4;

    document.getElementById("resultado2").innerText = "resultado: " + subtracao
}

//pega o botão 1 pelo ID 
let botao1 = document.getElementById("numero1");

let botao2 = document.getElementById("numero2");

let botaosoma = document.getElementById("somar")

// quando clicar nele, executa uma função 
botao1.addEventListener("click", function() {
    let display = document.getElementById("display");

    //coloca o numero 1 no display (acresentando)
    display.value += "1"
});

botao2.addEventListener("click", function() {
    display.value += "2"
})

botaosoma.addEventListener("click", function() {
    diplay.value += "+"
})



