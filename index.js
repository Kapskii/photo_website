new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 1000,
});


$(document).ready(function () {
    $('.headerBurger, .aLink').click(function (event) {
        $('.headerBurger, .navWrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
