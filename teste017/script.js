const img = document.getElementById('imagem');
const p = document.getElementById('texto')

img.addEventListener("mouseenter", function(){
    img.style.width = '500px';
    img.style.height = '500px';
    p.innerText = 'Você passou o mouse aqui!'
});

img.addEventListener("mouseout", function(){
    img.style.width = '400px';
    img.style.height = '400px';
    p.innerHTML = 'Passe o mouse aqui na foto de novo!'
})

