const botaoMenu = document.querySelector('.menu-btn');
const listaMenu = document.querySelector('nav ul');
const linksMenu = document.querySelectorAll('nav a');

botaoMenu.addEventListener('click', function() {
  listaMenu.classList.toggle('aberto');
});

linksMenu.forEach(function(link) {
  link.addEventListener('click', function() {
    listaMenu.classList.remove('aberto');
  });
});