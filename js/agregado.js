document.querySelector('.caja5').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('clicked');

    var href = this.querySelector('a').getAttribute('href');
    setTimeout(function() {
        window.location.href = href;
    }, 900); // Ajusta este tiempo según la duración total de las animaciones
});


// video agregado
document.addEventListener("DOMContentLoaded", function() {
    var videoElement = document.getElementById('video-background-patrocinadores');
    var videoCover = document.getElementById('video-cover'); // Obtener la portada del video

    videoElement.addEventListener('mouseover', function() {
        videoElement.play();
        videoCover.style.display = 'none'; // Ocultar la portada al reproducir el video
    });

    videoElement.addEventListener('mouseout', function() {
        videoElement.pause();
         // Mostrar la portada cuando el video se pausa//  videoCover.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
  
    function toggleSection(event) {
      const section = event.currentTarget;
  
      if (section.classList.contains('open')) {
        section.classList.remove('open');
      } else {
        sections.forEach(sec => sec.classList.remove('open'));
        section.classList.add('open');
      }
    }
  
    sections.forEach(section => {
      section.addEventListener('touchstart', toggleSection, { passive: true });
    });
  });
  


    