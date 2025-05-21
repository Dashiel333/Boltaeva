document.addEventListener("DOMContentLoaded", function () {
    const sliderBlock = document.querySelector("#carouselExampleIndicators");

    if (sliderBlock) {
        new bootstrap.Carousel(sliderBlock, {
            interval: 3000, // Автопрокрутка каждые 3 сек (можно убрать)
            wrap: true // Бесконечная прокрутка
        });
    }

});

document.querySelector(".bourger").addEventListener("click", function () {
    document.getElementById("menu").classList.add("active");
    console.log("active");
});

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("menu").classList.remove("active");
});

// Modal window
const searchContainer = document.querySelector(".search-container");
const openBtn = document.querySelector(".burger-close");
const closeMenu = document.querySelector(".dark-color");
const closeBtn = document.querySelector(".search-container .close")

openBtn.addEventListener("click", function () {
    searchContainer.classList.toggle('active');
});

closeMenu.addEventListener("click", function () {
    searchContainer.classList.remove('active');
    closeMenu.classList.remove('active');
})
closeBtn.addEventListener("click", function () {
    searchContainer.classList.remove('active');
    closeMenu.classList.remove('active');
})
// Modal window


// Dark and light theme
const toggleBtn = document.querySelector("#theme-toggle");

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.classList.remove('light');
    toggleBtn.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    toggleBtn.classList.toggle('light', 'islight');
    toggleBtn.classList.toggle('dark', 'isDark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
console.log(toggleBtn);
// Dark and light theme

// counter(счётчик)
const priceCalc = document.querySelectorAll('[data-priceCalc]');

if (priceCalc.length > 0) {
    priceCalc.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.counter-button')) {
                const wrapper = target.closest('.price-calc');
                if (!wrapper) return;

                let btnValue = wrapper.querySelector('.input');
                let value = parseInt(btnValue.textContent);

                if (target.classList.contains('btn-minus')) {
                    if (value > 0) value--;
                } else if (target.classList.contains('btn-plus')) {
                    value++;
                }

                btnValue.textContent = value;
            }
        });
    });
}


// counter(счётчик)



// Swiperjs
var swiper = new Swiper(".mySwiper", {
    loop: true,
    direction: 'vertical',
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    direction: 'vertical',
    spaceBetween: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
    },
});
// Swiperjs

// // Slider line
// var swiper = new Swiper(".mySwiper3", {
//     direction: 'horizontal',

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });


// Slider line

var galleryThumbs = new Swiper(".gallery-thumbs", {
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    slidesPerView: 4,
    // watchOverflow: true,
    watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
        768: {
            direction: "vertical",
        }
    }
});

var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});