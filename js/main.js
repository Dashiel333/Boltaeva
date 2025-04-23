document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExampleIndicators"), {
        interval: 3000, // Автопрокрутка каждые 3 сек (можно убрать)
        wrap: true // Бесконечная прокрутка
    });
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

// Dark and light theme
const toggleBtn = document.querySelector("#theme-toggle");
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
console.log(toggleBtn);
// Dark and light theme

// Slider
// $(document).ready(function(){
//     $('.vertical-class').slick({
//       setting-name: setting-value
//     });
//   });

// Slider
