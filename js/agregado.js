document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar si estamos en modo móvil
    function isMobile() {
      return window.matchMedia("only screen and (max-width: 760px)").matches;
    }
  
    // Función para manejar el 'tap' (tacto)
    function toggleExpand(event) {
      // Solo aplica si estamos en modo móvil
      if (isMobile()) {
        var galleryItems = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
        // Remueve la clase 'expanded' de todos los elementos
        galleryItems.forEach(function(item) {
          item.classList.remove('expanded');
        });
  
        // Agrega la clase 'expanded' al elemento tocado
        event.currentTarget.classList.add('expanded');
      }
    }
  
    // Añade el evento 'click' a cada elemento de la galería
    var galleryItems = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
    galleryItems.forEach(function(item) {
      item.addEventListener('click', toggleExpand);
    });
  });
  




  document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar el 'click' en modo móvil
    function toggleHideText(event) {
      // Solo aplica si estamos en modo móvil
      if (isMobile()) {
        // Agrega o quita la clase 'hide-text' al texto dentro del elemento tocado
        event.currentTarget.querySelector('h1').classList.toggle('hide-text');
      }
    }
  
    // Añade el evento 'click' a cada elemento de la galería en modo móvil
    var galleryItems = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
    galleryItems.forEach(function(item) {
      item.addEventListener('click', toggleHideText);
    });
  
    // Función para verificar si estamos en modo móvil
    function isMobile() {
      return window.matchMedia("only screen and (max-width: 760px)").matches;
    }
  });
  