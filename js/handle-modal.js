let profile = document.querySelector('.profile-handle')
let profilebox = document.querySelector('.profile-option')
let setting = document.querySelector('.setting')
let closemodal = document.querySelector('.close-modal')
let profilemodal = document.querySelector('.profile-modal-parent')
let settingbox = document.querySelector('.profile-option')
let closemodalmobile = document.querySelector('.close-modal-mobile')
let mobilemodal = document.querySelector('.mobile-modal')
let openmodalmobile = document.querySelector('.open-modal-mobile')
let mobileboxhandle = document.querySelector('.profile-handle-responsive')
let mobilebox = document.querySelector('.seting-mobile-box')
let navmenu = document.querySelector('.nav-menu')
let togglewrap = document.querySelector('.toggle-wrap')
let proresize = document.querySelector('.pro-resize')
let cube = document.querySelector('.cube')
let mobile_cube = document.querySelector('.mobile-cube')
let cub_modal = document.querySelector('.cube-modal')
let back = document.querySelector('#back')
let tab_link_section = document.querySelector('.profile-links ul')
let tab_link = document.querySelectorAll('.profile-links ul li a')
let tab_content = document.querySelectorAll('.moda-content')

tab_link_section.addEventListener('click', (e) => {
    e.preventDefault()
    for (let i = 0; i < tab_link.length; i++) {
        tab_link[i].classList.remove('active-tab-btn')
    }
    e.target.classList.toggle('active-tab-btn')

    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].classList.remove('active-tab-content');
    }

    var tabId = '#' + e.target.dataset.tab;
    document.querySelector(tabId).classList.toggle('active-tab-content');
})

// let cub_modal_dectop = document.querySelector('.cube-modal-desctop')


profile.addEventListener('click', (e) => {
    e.preventDefault()
    profilebox.classList.toggle('block-profile-box')
})

setting.addEventListener('click', (e) => {
    e.preventDefault()
    profilemodal.style.display = 'flex'
})
closemodal.addEventListener('click', () => {
    profilemodal.style.display = 'none'
    profilebox.classList.toggle('block-profile-box')

})
mobileboxhandle.addEventListener('click', (e) => {
    mobilebox.style.display = 'flex'
    navmenu.classList.toggle('fixed')
})

closemodalmobile.addEventListener('click', () => {
    mobilemodal.style.display = 'none'
    mobilebox.style.display = 'none'
    togglewrap.classList.toggle("active");
    // document.querySelector('.nav-menu').classList.toggle('fixed')
})
openmodalmobile.addEventListener('click', (e) => {
    e.preventDefault()
    mobilemodal.style.display = 'flex'
    profilemobileitem.style.display = 'block'
})

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};
cube.addEventListener("click", (e) => {
    e.preventDefault()
    cub_modal.classList.toggle('show-modal')
})
mobile_cube.addEventListener("click", (e) => {
    e.preventDefault()
    cub_modal.classList.toggle('show-modal')
    navmenu.classList.toggle('fixed')
})
back.addEventListener('click', (e) => {
    e.preventDefault()
    navmenu.classList.toggle('fixed')
    cub_modal.classList.toggle('show-modal')

})
let options = [{
        countrie: 'Afghanistan'
    }, {
        countrie: 'Aland Islands'
    }, {
        countrie: 'Albania'
    }, {
        countrie: 'Algeria'
    }, {
        countrie: 'Andorra'
    }, {
        countrie: 'Angola'
    }, {
        countrie: 'Anguilla'
    }, {
        countrie: 'Antarctica'
    }, {
        countrie: 'Antigua & Barbuda'
    }, {
        countrie: 'Argentina'
    }, {
        countrie: 'Armenia'
    }, {
        countrie: 'Aruba'
    }, {
        countrie: 'Australia'
    }, {
        countrie: 'Austria'
    }, {
        countrie: 'Azerbaijan'
    }, {
        countrie: 'Bahamas'
    },

]
let select = document.querySelector('select')
select.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        select.innerHTML += `<option>${options[i].countrie}</option>`
    }
})