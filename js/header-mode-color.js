let link = document.querySelectorAll("nav ul li a")
window.addEventListener("scroll", function () {
    if (window.scrollY < 10000) {
        // document.querySelector("header").style.background = "rgb(240, 236, 233)";
        // document.querySelector(' .logo-icon').src = '../img/sololearn.png'
        // document.documentElement.style.setProperty('--color', "black")
        document.querySelector('.logo-light-header').style.color = 'black'
        // document.querySelector('.header-light .login').style.color = '#2493df'
        document.querySelector('.header-light .login-mobile').style.color = '#2493df'
        document.querySelector('.header-light .nav-menu').style.background = "#fff"
        document.querySelector('.header-light .nav-menu').style.borderColor = "transparent"
        document.querySelector('.header-light .nav-menu ul').style.borderColor = "#bcd0e9"
        // document.querySelector('header-light .nav-menu ul li a').style.color = "#1f1e28"
        document.querySelector('.header-light .toggle-wrap').style.color = 'black'

        for (let i = 0; i < link.length; i++) {
            link[i].style.color = 'black'
        }
    } else if (window.scrollY > 10000) {
        // document.querySelector("header").style.background = "#1f1e28";
        // document.documentElement.style.setProperty('--color', "#fff")
        document.querySelector('.header-light .nav-menu').style.background = "#1f1e28"

        // document.querySelector('.logo-icon').src = '../img/WnyXWTp.png'
        document.querySelector('.logo-light-header').style.color = '#fff'
        document.querySelector('.header-light .login').style.color = '#fff'
        document.querySelector('.header-light .login-mobile').style.color = '#fff'
        document.querySelector('.header-light.toggle-wrap').style.color = '#fff'
        document.querySelector('.header-light .nav-menu').style.borderColor = "#2d3846"

        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '#c8d2db'
        }
    }
});

function toggleMenu(e) {
    e.classList.toggle("active");
    document.querySelector('.nav-menu').classList.toggle('fixed')
}