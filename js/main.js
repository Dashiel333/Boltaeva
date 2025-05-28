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
    toggleBtn.classList.toggle('light');
    toggleBtn.classList.toggle('dark');

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
if (document.querySelector(".mySwiper")) {
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
}
if (document.querySelector(".mySwiper2")) {

    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        // direction: 'vertical',
        spaceBetween: 20,
        slidesPerView: 5,
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
}

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
if (document.querySelector(".gallery-thumbs")) {
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
}



// Выпадающее меню на странице Order

const chooseButtons = document.querySelectorAll(".choose-btn");

chooseButtons.forEach(button => {
    const dropdownMenu = button.nextElementSibling; // локальное меню
    const options = dropdownMenu.querySelectorAll(".option");

    button.addEventListener("click", (e) => {
        e.stopPropagation(); // чтобы клик не дошёл до document
        // Закрываем все открытые меню
        document.querySelectorAll(".choose-menu").forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.add("hidden");
            }
        });
        // Переключаем текущее меню
        dropdownMenu.classList.toggle("hidden");
    });
    options.forEach(option => {
        option.addEventListener("click", () => {
            button.textContent = option.textContent;
            dropdownMenu.classList.add("hidden");
        });
    });
});
// Скрытие всех меню по клику вне кнопок/меню
document.addEventListener("click", () => {
    document.querySelectorAll(".choose-menu").forEach(menu => {
        menu.classList.add("hidden");
    });
});


// Выпадающее меню на странице Order





// Слайдер Wecare
// new Swiper(".mySwiper2", {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: ".second-next2",
//       prevEl: ".second-prev2"
//     },
//     breakpoints: {
//       768: { slidesPerView: 2 },
//       1024: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 }
//     }
//   });

// Слайдер Wecare