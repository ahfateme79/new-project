let next = document.querySelectorAll('.nex')
let number = document.querySelectorAll('.number')
let prev = document.querySelectorAll('.prev')


for (let i = 0; i < next.length; i++) {
    next[i].addEventListener('click', () => {
        number[i].value++
        load_comments()
    })

}
for (let i = 0; i < prev.length; i++) {
    prev[i].addEventListener('click', () => {
        --number[i].value
        load_comments()
    })

}


function load_comments() {
    // fake api
    fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(rsult => rsult)
}