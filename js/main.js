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

const searchContainer = document.querySelector(".search-container");
const openBtn = document.querySelector(".icon-logo");
const closeMenu = document.querySelector(".dark-color");
const closeBtn = document.querySelector(".search-container .close")

openBtn.addEventListener("click", function () {
    searchContainer.classList.toggle('active');
});
console.log(searchContainer, openBtn); 

closeMenu.addEventListener("click", function(){
    searchContainer.classList.remove('active');
    closeMenu.classList.remove('active');
})
closeBtn.addEventListener("click", function(){
    searchContainer.classList.remove('active');
    closeMenu.classList.remove('active');
})
console.log(closeBtn);