
$(document).ready(function () {
    const elements = document.querySelectorAll('[style="opacity:0"]');
    const firstElement = document.querySelector('[style="opacity:0"]');
    if (firstElement) {
        firstElement.style.opacity = 1;
    }       
    window.addEventListener('scroll', () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.opacity = 1;
            }
        });
    });
    AOS.init({
        startEvent: 'load',
        easing: 'ease-out-back',
        duration: 1800,
        once: false,
        disable: 'mobile'
     });
     if($('.cube-swiper').length){
        const mySwiper = new Swiper('.cube-swiper', {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    if($('.carousel-swiper').length){
        const carousel_swiper = new Swiper('.carousel-swiper', {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
});