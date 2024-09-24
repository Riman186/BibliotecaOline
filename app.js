// Funcionalidad para buscar libros
document.getElementById('buscar-libro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let query = document.getElementById('buscar-libro').value.toLowerCase();
    let libros = document.querySelectorAll('.libro');
    
    libros.forEach(function(libro) {
        let titulo = libro.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(query)) {
            libro.style.display = 'block';
        } else {
            libro.style.display = 'none';
        }
    });
});

// Funcionalidad para enviar el formulario de contacto
document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje.`);
        // Limpiar formulario
        document.getElementById('contacto-form').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
