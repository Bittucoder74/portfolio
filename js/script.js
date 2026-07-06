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

        Wait For Fetch Include

====================================*/

const waitForSections = setInterval(() => {

    const navbar = document.querySelector(".main_menu");
    const skills = document.querySelector(".progress-bar");

    if (navbar) {
        navbarScroll();
    }

    if (skills) {
        startSkillAnimation();
    }

    if (navbar && skills) {
        clearInterval(waitForSections);
    }

}, 100);