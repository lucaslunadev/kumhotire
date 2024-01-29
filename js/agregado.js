document.querySelector('.caja5').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('clicked');

    var href = this.querySelector('a').getAttribute('href');
    setTimeout(function() {
        window.location.href = href;
    }, 900); // Ajusta este tiempo según la duración total de las animaciones
});



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
  
    function toggleAnimation(event) {
      const section = event.currentTarget;
  
      if (section.classList.contains('mobile-animate')) {
        section.classList.remove('mobile-animate');
      } else {
        sections.forEach(sec => sec.classList.remove('mobile-animate'));
        section.classList.add('mobile-animate');
      }
    }
  
    sections.forEach(section => {
      section.addEventListener('click', toggleAnimation);
    });
  });
  