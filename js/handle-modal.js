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
let modal_menu = document.querySelector('.modal-menu')
let mobile_tab_section = document.querySelector('.modal-menu ul')
let mobile_tab = document.querySelectorAll('.modal-menu ul li')
let mobile_content = document.querySelectorAll('.mobile-content')
let mobile_tab_link = document.querySelectorAll('.mobile-modal .profile-links ul li a')
let mobile_tab_link_section = document.querySelector('.mobile-modal .profile-links ul')
let edit = document.querySelector('.edit')
let back_menu = document.querySelector('#back-menu')



back_menu.addEventListener('click', (e) => {
    e.preventDefault()
    navmenu.classList.add('fixed')
    mobilebox.style.display = 'none'
    navmenu.classList.remove('opacity')

})


edit.addEventListener('click', () => {
    modal_menu.style.display = 'none'
    mobilebox.style.display = 'none'
    togglewrap.classList.toggle('active')
    document.querySelector('.nav-menu').classList.toggle('fixed')
    document.querySelector('.profile-content').classList.toggle('blo')
    navmenu.classList.remove('opacity')

})


mobile_tab_section.addEventListener('click', (e) => {
    e.preventDefault()
    modal_menu.style.display = 'none'
    mobilemodal.style.display = 'block'
    if (e.target && e.target.nodeName === 'A') {

        for (let i = 0; i < mobile_content.length; i++) {
            mobile_content[i].classList.remove('active-tab-content')
        }

        var tabId = '#' + e.target.dataset.tabid;
        document.querySelector(tabId).classList.toggle('active-tab-content');
        let conten = document.querySelector(tabId)
    }
    if (window.innerWidth < 601) {
        closemodalmobile.innerHTML = conten.querySelector('input').value
    }
})


tab_link_section.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target && e.target.nodeName === 'A') {

        for (let i = 0; i < tab_link.length; i++) {
            tab_link[i].classList.remove('active-tab-btn')
        }
        e.target.classList.toggle('active-tab-btn')

        for (i = 0; i < tab_content.length; i++) {
            tab_content[i].classList.remove('active-tab-content');
        }

        var tabId = '#' + e.target.dataset.tab;
        document.querySelector(tabId).classList.toggle('active-tab-content');
    }
})


mobile_tab_link_section.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target && e.target.nodeName === 'A') {

        for (let i = 0; i < mobile_tab_link.length; i++) {
            mobile_tab_link[i].classList.remove('active-tab-btn')
        }
        e.target.classList.toggle('active-tab-btn')

        for (i = 0; i < mobile_content.length; i++) {
            mobile_content[i].classList.remove('active-tab-content');
        }

        var tabId = '#' + e.target.dataset.tabid;
        console.log(tabId)
        document.querySelector(tabId).classList.toggle('active-tab-content');
    }
})


window.addEventListener('click', (e) => {
    if (e.target.parentNode == document.querySelector('body') || e.target.parentNode == document.querySelector('.profile')) {
        profilebox.classList.remove('block-profile-box')
        cub_modal.classList.remove('show-modal')
    }
})
// let cub_modal_dectop = document.querySelector('.cube-modal-desctop')


profile.addEventListener('click', (e) => {
    e.preventDefault()
    profilebox.classList.toggle('block-profile-box')
    cub_modal.classList.remove('show-modal')

})

window.addEventListener('click', (event) => {
    if (event.target == profilemodal) {
        profilemodal.style.display = 'none'
        profilebox.classList.remove('block-profile-box')
    }
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
    navmenu.classList.toggle('opacity')
})

closemodalmobile.addEventListener('click', () => {
    modal_menu.style.display = 'block'
    mobilemodal.style.display = 'none'
    if (window.innerWidth < 601) {
        modal_menu.style.display = 'block'
        mobilemodal.style.display = 'none'
    } else {
        modal_menu.style.display = 'none'

        mobilemodal.style.display = 'none'
        togglewrap.classList.toggle('active')
    }
})
openmodalmobile.addEventListener('click', (e) => {
    e.preventDefault()
    modal_menu.style.display = 'block'
    mobilebox.style.display = 'none'
})

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};
cube.addEventListener("click", (e) => {
    e.preventDefault()
    cub_modal.classList.toggle('show-modal')
    profilebox.classList.remove('block-profile-box')
})
mobile_cube.addEventListener("click", (e) => {
    e.preventDefault()
    cub_modal.classList.toggle('show-modal')
    navmenu.classList.add('opacity')
})
back.addEventListener('click', (e) => {
    e.preventDefault()
    navmenu.classList.remove('opacity')
    cub_modal.classList.toggle('show-modal')

})

// window.addEventListener('scroll', () => {
console.log(window.innerWidth)
openmodalmobile.addEventListener('click', () => {
    if (window.innerWidth < 601) {
        modal_menu.style.display = 'block'

    } else if (window.innerWidth > 601) {
        mobilemodal.style.display = 'flex'
        modal_menu.style.display = 'none'

        window.addEventListener('click', (e) => {
            if (e.target == mobilemodal) {
                mobilemodal.style.display = 'none'
                profilebox.classList.remove('block-profile-box')
                togglewrap.classList.remove('active')
                navmenu.classList.remove('fixed')
                document.querySelector('.profile-content').classList.remove('blo')

            }

        })
    }

})

function toggleMenu(e) {
    cub_modal.classList.remove('show-modal')
    e.classList.toggle("active");
    document.querySelector('.nav-menu').classList.toggle('fixed')
    document.querySelector('.profile-content').classList.toggle('blo')
    navmenu.classList.remove('opacity')

}


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
// let select = document.querySelector('select')
// select.addEventListener('click', () => {
//     for (let i = 0; i < options.length; i++) {
//         select.innerHTML += `<option>${options[i].countrie}</option>`
//     }
// })