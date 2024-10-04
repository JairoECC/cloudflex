document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.content-services-four > div');

    divs.forEach(div => {
        const img = div.querySelector('img');
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        div.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });

        div.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });
});
// Seleccionar todas las imágenes dentro de la clase 'cs-options'
const images = document.querySelectorAll('.cs-options img');

images.forEach(img => {
    // Guardar la fuente original de la imagen
    const originalSrc = img.src;

    // Verificar si la imagen tiene el atributo 'data-hover'
    const hoverSrc = img.getAttribute('data-hover');

    if (hoverSrc) {
        // Evento de 'mouseover' para cambiar a la imagen hover
        img.addEventListener('mouseover', () => {
            img.src = hoverSrc;
        });

        // Evento de 'mouseout' para regresar a la imagen original
        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    }
});
