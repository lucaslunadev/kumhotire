document.querySelector('.caja5').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('clicked');

    var href = this.querySelector('a').getAttribute('href');
    setTimeout(function() {
        window.location.href = href;
    }, 900); // Ajusta este tiempo según la duración total de las animaciones
});

// video agregado

document.querySelector('.caja3').addEventListener('mouseenter', function() {
    document.getElementById('video-background').play();
});

document.querySelector('.caja3').addEventListener('mouseleave', function() {
    document.getElementById('video-background').pause();
});
