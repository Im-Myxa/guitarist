import "../css/normalize.css";
import "../css/reset.css";
import "../css/style.css";
import "../sass/style.sass";


window.addEventListener('DOMContentLoaded', ()=>{
    
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelector('.nav-menu__list'),
    burger = document.querySelector('.burger')

    burger.addEventListener('click', ()=> {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('nav-menu_active');
    })

    menuItem.addEventListener('click', (event)=> {
        if (event.target.tagName === 'A'){
            burger.classList.toggle('burger_active');
            menu.classList.toggle('nav-menu_active');
        }
    })
})
