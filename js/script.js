var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    // direction: getDirection(),
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});
let a = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        document.querySelector("header").style.background = "#f0ece9";
        document.querySelector('.logo-icon').src = './img/sololearn.png'
        document.documentElement.style.setProperty('--color', "black")
        document.querySelector('.logo').style.color = 'black'
        document.querySelector('.login').style.color = '#2493df'
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = 'black'
        }
    } else if (window.scrollY < 500) {
        document.querySelector("header").style.background = "#1f1e28";
        document.documentElement.style.setProperty('--color', "#fff")

        document.querySelector('.logo-icon').src = './img/WnyXWTp.png'
        document.querySelector('.logo').style.color = '#fff'
        document.querySelector('.login').style.color = '#fff'

        for (let i = 0; i < a.length; i++) {
            a[i].style.color = '#c8d2db'
        }
    }
});

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

function toggleMenu(e) {
    e.classList.toggle("active");
    document.querySelector('.nav-menu').classList.toggle('fixed')
}