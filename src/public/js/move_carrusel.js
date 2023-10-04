

window.onload = (event) => {
    $('.carousel-item .items-carrusel').addClass('zoom-onload')
};
function avanzarCarrusel() {
    $('.carousel-item .items-carrusel').addClass('zoom-onload')
    $('#carouselExampleCaptions').carousel('next')
}

setInterval(avanzarCarrusel, 5000)