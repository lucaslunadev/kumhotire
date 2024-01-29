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
        // Obtiene el elemento tocado
        var clickedItem = event.currentTarget;
  
        // Obtiene todos los elementos de la galería
        var galleryItems = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
  
        // Itera sobre los elementos
        galleryItems.forEach(function(item) {
          var textElement = item.querySelector('h1');
          if (item !== clickedItem) {
            textElement.classList.remove('hide-text');
            textElement.style.transform = 'translateX(0)';
          }
        });
  
        // Agrega o quita la clase 'hide-text' al texto dentro del elemento tocado
        var textElement = clickedItem.querySelector('h1');
        textElement.classList.toggle('hide-text');
  
        // Si el texto está oculto, traslada el elemento hacia arriba, de lo contrario, vuelve a su posición original
        if (textElement.classList.contains('hide-text')) {
          textElement.style.transform = 'translateX(200%)';
        } else {
          textElement.style.transform = 'translateX(0)';
        }
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
  