$('#form').submit(function (event){
    event.preventDefault();
    let sitio = 'https://kumhotire.mercadoshops.com.ar/';
    let url = site + $('#llanta').val();
    window.location.replace(url);
});

 
function crearURL(slug) {
 
    // Reemplaza los carácteres especiales | simbolos con un espacio 
    slug = slug.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
 
    // Corta los espacios al inicio y al final del sluging 
    slug = slug.replace(/^\s+|\s+$/gm, '');
 
    // Reemplaza el espacio con guión  
    slug = slug.replace(/\s+/g, '-');
 
    // Creo la URL en el campo de texto 'url' 
    var input = document.getElementById('url');
    input.value = slug;
 
    // Creo la URL en el elemento span 'texto-url' 
    document.getElementById("texto-url").innerHTML = slug;
 
}





