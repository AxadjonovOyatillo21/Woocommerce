$(document).ready(function() {
    preloaderFadeOutTime = 4000;
    function hidePreloader() {
        let preloader = $('.loader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

window.addEventListener("scroll", function(){
    let nav = document.getElementById("header");
    nav.classList.toggle("dropped", window.scrollY > 0);
});

search = document.getElementById('search_icon');
search_field = document.getElementById('search_category');
toggler = document.getElementById('toggle');
navbar = document.getElementById('nav');
document.onclick = function(e) {
    if(e.target.id !== 'search_icon' && e.target.id !== 'toggle' && e.target.id !== 'search_category' && e.target.id !== 'search') {
       search_field.classList.remove('width_active')
       nav.classList.remove('active');
       toggler.classList.remove('rotate_active')
        }
    }
// search_filed.onclick = function() {
//     search_field.classList.toggle('width_active')
// }       
search.onclick = function() {
    search_field.classList.toggle('width_active');
};

toggler.onclick = function() {
    nav.classList.toggle('active');
    toggler.classList.toggle('rotate_active')
}

let minuseBtn = document.getElementById('minuse');
let plusBtn = document.getElementById('plus');
let interval = document.getElementById('interval');
let counter = 0;
minuseBtn.addEventListener('click', function() {
    if (counter != 0) {
        counter-=1;
    }
    interval.innerHTML = counter;
})
plusBtn.addEventListener('click', function() {
    counter+=1;
    interval.innerHTML = counter;
})