let next = document.querySelectorAll('.nex')
let number = document.querySelectorAll('.number')
let prev = document.querySelectorAll('.prev')
let fa_chevron_up = document.querySelectorAll('.fa-chevron-up')
let fa_chevron_down = document.querySelectorAll('.fa-chevron-down')




var clicked = false;



for (let i = 0; i < next.length; i++) {
    next[i].addEventListener('click', () => {
        // number[i].value++
        if (!clicked) {
            // Set clicked to true
            clicked = true;
            fa_chevron_up[i].classList.add('color')
            // Do your processing here

            // Re-enable after processing if you want
            // clicked = false;
        }
        load_comments()
    })

}
for (let i = 0; i < prev.length; i++) {
    prev[i].addEventListener('click', () => {
        if (!clicked) {
            fa_chevron_down[i].classList.add('color')

            clicked = false;

            // Do your processing here

            // Re-enable after processing if you want
            // clicked = false;
        }
        load_comments()
    })

}


function load_comments() {
    // fake api
    fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(rsult => rsult)
}