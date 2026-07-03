function include(id, file){

    fetch(file)

    // .then(function(response){

    //     return response.text();

    // })

    .then(response => response.text())

    .then(data => {

        document.getElementById(id).innerHTML = data;

    });

}


include("navbar","pages/navbar.html");

include("hero","pages/hero.html");

include("about","pages/about.html");

include("skills","pages/skills.html");

include("experience","pages/experience.html");

include("education","pages/education.html");

include("project","pages/project.html");

include("certificate","pages/certificate.html");

include("contact","pages/contact.html");

include("footer","pages/footer.html");