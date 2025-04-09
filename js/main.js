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
