$(document).ready(function() {
    var currentIndex = 0;
    var images = []; // Aquí puedes almacenar las URLs de tus imágenes

    // Función para cargar imágenes utilizando AJAX
    function loadImages() {
        $.ajax({
            url: 'https://api.example.com/images', 
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                
                images = response.urls;
                showImage(currentIndex); // Mostrar la primera imagen al cargar
            },
            error: function(xhr, status, error) {
                console.error('Error al cargar las imágenes:', error);
            }
        });
    }

    // Función para mostrar una imagen en el carrusel
    function showImage(index) {
        $('#image-container img').hide(); // Ocultar todas las imágenes
        $('#image-container img').attr('src', images[index]).fadeIn(); // Mostrar la imagen actual
    }

    // Cargar imágenes al cargar la página
    loadImages();

    // Manejadores de eventos para los botones de anterior y siguiente
    $('#prev-btn').click(function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    $('#next-btn').click(function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });
});
