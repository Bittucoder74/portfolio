/*====================================

        Navbar Scroll

====================================*/

let navbar = document.querySelector(".main_menu");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        navbar.classList.add("menu_fixed");

    }

    else{

        navbar.classList.remove("menu_fixed");

    }

});