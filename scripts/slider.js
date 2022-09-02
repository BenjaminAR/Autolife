$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 2,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left-long"></i>', '<i class="fa fa-arrow-right-long"></i>'],
    margin: 20,
    dots: true,
    responsive: {
        100: {
            items: 1
        },

        1268: {
            items: 2
        }
    }

});