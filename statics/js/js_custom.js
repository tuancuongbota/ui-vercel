
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
            effect: "creative",
            pagination: {
               clickable: !0
            },
            creativeEffect: {
               prev: {
                  shadow: !0,
                  translate: ["-120%", 0, -500]
               },
               next: {
                  shadow: !0,
                  translate: ["120%", 0, -500]
               }
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
            initialSlide: 0,
            slidesPerView: 1.5,
            grabCursor: !0,
            centeredSlides: !0,
            effect: "coverflow",
            pagination: {
               clickable: !0
            },
            coverflowEffect: {
               rotate: 40,
               depth: 50,
               modifier: 1,
               slideShadows: !0
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    if($('.card-swiper').length){
        const card_swiper = new Swiper('.card-swiper', {
            grabCursor: !0,
            effect: "cards",
            initialSlide: 2,
            pagination: {
               clickable: !0
            },
            cardsEffect: {
               slideShadows: !1,
               perSlideRotate: 10
            },
        });
    }
});