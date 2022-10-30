let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
    toggle.onclick = function(){
        menu.classList.toggle('active')  // Esto es para que se active la clase active
    }