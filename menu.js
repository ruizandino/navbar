let menuToggle = document.querySelector('.menu-toggle');
let menuTogleIcon =document.querySelector('.menu-toggle i');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', e=> {
    menu.classList.toggle('show'); 

    if (menu.classList.contains('show')) {
        menuTogleIcon.setAttribute('class', 'fa fa-times');
    }else{
        menuTogleIcon.setAttribute('class', 'fa fa-bars');

    }

    
});