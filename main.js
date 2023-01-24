let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__navmenu__right');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})