/*====================================

        Navbar Scroll

====================================*/

function navbarScroll() {

    const navbar = document.querySelector(".main_menu");

    if (!navbar) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.classList.add("menu_fixed");

        } else {

            navbar.classList.remove("menu_fixed");

        }

    });

}


/*====================================

        Skills Animation

====================================*/

function startSkillAnimation() {

    const progressBars = document.querySelectorAll(".progress-bar");

    if (progressBars.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.width = entry.target.dataset.width;

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    progressBars.forEach((bar) => {

        observer.observe(bar);

    });

}

/*====================================

        Active Navbar

====================================*/

function activeMenu(){

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".menu_list .nav-link");

    window.addEventListener("scroll", function(){

        let current = "";

        sections.forEach(function(section){

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if(
            window.scrollY >= top &&
            window.scrollY < top + height
         ){

         current = section.id;

        }

    });

        navLinks.forEach(function(link){

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

}


/*====================================

    Mobile Menu Auto Close

====================================*/

function mobileMenuClose(){

    const navLinks = document.querySelectorAll(".menu_list .nav-link");

    navLinks.forEach(function(link){

        link.addEventListener("click", function(){

            const menu = document.getElementById("navbarMenu");

            if(menu.classList.contains("show")){

                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menu);

                bsCollapse.hide();

            }

        });

    });

}

/*====================================

        Scroll To Top

====================================*/

function scrollTopButton(){

    const scrollBtn = document.getElementById("scrollTopBtn");

    if(!scrollBtn) return;

    window.addEventListener("scroll", function(){

        if(window.scrollY > 300){

            scrollBtn.classList.add("show");

        }else{

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*====================================

        Portfolio Initialize

====================================*/

function initPortfolio(){

    navbarScroll();

    startSkillAnimation();

    activeMenu();

    mobileMenuClose();

    scrollTopButton();

}

/*====================================

        Wait For Include

====================================*/

const waitForInclude = setInterval(function(){

    const navbar = document.querySelector(".main_menu");
    const sections = document.querySelectorAll("section");

    if(navbar && sections.length > 0){

        clearInterval(waitForInclude);

        initPortfolio();

    }

},100);