document.querySelector('.caja5').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('clicked');

    var href = this.querySelector('a').getAttribute('href');
    setTimeout(function() {
        window.location.href = href;
    }, 900); // Ajusta este tiempo según la duración total de las animaciones
});



  