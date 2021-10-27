// swiper scripts***
var swiper = new Swiper('.swiper', {
    slidesPerView:3,
    // direction: getDirection(),
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // on: {
    //     resize: function () {
    //         swiper.changeDirection(getDirection());
    //     },
    // },
});


// change style of elemnts when scroll
let links = document.querySelectorAll("nav ul li a")
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        document.querySelector("header").style.background = "rgb(240, 236, 233)";
        // document.querySelector('.logo-icon').src = '../img/sololearn.png'
        document.documentElement.style.setProperty('--color', "black")
        document.querySelector('.logo').style.color = 'black'
        document.querySelector('.login').style.color = '#2493df'
        document.querySelector('.login-mobile').style.color = '#2493df'
        document.querySelector('.nav-menu').style.background = "#fff"
        document.querySelector('.nav-menu').style.borderColor = "transparent"
        document.querySelector('.nav-menu ul').style.borderColor = "#bcd0e9"
        document.querySelector('.nav-menu ul li a').style.color = "#1f1e28"
        document.querySelector('nav ul li a').style.color = "#1f1e28"

        document.querySelector('.toggle-wrap').style.color = 'black'

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = 'black'
        }
    } else if (window.scrollY < 500) {
        document.querySelector("header").style.background = "#1f1e28";
        document.documentElement.style.setProperty('--color', "#fff")
        document.querySelector('.nav-menu').style.background = "#1f1e28"

        // document.querySelector('.logo-icon').src = '../img/WnyXWTp.png'
        document.querySelector('.logo').style.color = '#fff'
        document.querySelector('.login').style.color = '#fff'
        document.querySelector('.login-mobile').style.color = '#fff'
        document.querySelector('.toggle-wrap').style.color = '#fff'
        document.querySelector('.nav-menu').style.borderColor = "#2d3846"

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = '#c8d2db'
        }
    }
});


// replace and change span inner html //
function changes() {
    let count = 0
    let arr = ['Accountants', 'Baristas', 'Designers', 'Construction Workers']

    setInterval(() => {
        count++
        for (let i = 0; i < arr.length; i++) {
            document.querySelector('.change').innerHTML = arr[count % arr.length]
        }
    }, 2000);
}
changes();


// menu function
function toggleMenu(e) {
    e.classList.toggle("active");
    document.querySelector('.nav-menu').classList.toggle('fixed')
}