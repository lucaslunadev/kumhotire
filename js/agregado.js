document.addEventListener("DOMContentLoaded", function() {
  // Función para verificar si estamos en modo móvil
  function isMobile() {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
  }

  // Función para manejar el 'tap' (tacto) en las cajas
  function toggleExpand(event) {
    if (isMobile()) {
      var targetItem = event.currentTarget;
      var galleryItems = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
      
      galleryItems.forEach(function(item) {
        if (item !== targetItem) {
          // Contrae las otras cajas y restablece el texto
          item.classList.remove('expanded');
          item.querySelector('h1').classList.remove('hide-text'); // Asegura que el texto sea visible
        }
      });

      // Expande la caja tocada y esconde su texto si no estaba ya expandido
      if (!targetItem.classList.contains('expanded')) {
        targetItem.classList.add('expanded');
        targetItem.querySelector('h1').classList.add('hide-text');
      } else {
        // Si la caja ya estaba expandida, este clic la contrae, así que restablecemos el texto también
        targetItem.querySelector('h1').classList.remove('hide-text');
      }
    }
  }

  // Añade el evento 'click' a cada elemento de la galería
  var galleryItems = document.querySelectorAll('.tecnologia, .rendimiento, .seguridad');
  galleryItems.forEach(function(item) {
    item.addEventListener('click', toggleExpand);
  });
});


  
document.addEventListener("DOMContentLoaded", function() {
  const contenedores = document.querySelectorAll('.horizontal-gallery > div');

  contenedores.forEach(function(contenedor) {
    contenedor.addEventListener('mouseenter', function() {
      // Añade la clase para reducir el tamaño del texto a todos los otros contenedores
      contenedores.forEach(function(otroContenedor) {
        if (otroContenedor !== contenedor) {
          otroContenedor.classList.add('texto-pequeno');
        }
      });
    });

    contenedor.addEventListener('mouseleave', function() {
      // Quita la clase de reducción de tamaño de texto de todos los contenedores
      contenedores.forEach(function(otroContenedor) {
        otroContenedor.classList.remove('texto-pequeno');
      });
    });
  });
});
