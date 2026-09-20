

document.addEventListener("DOMContentLoaded", function () {

    /*FORMULAIRE DE CONTACT*/

    const form = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    if (form) {

        form.addEventListener("submit", function (event) {

            // Empêche le rechargement de la page
            event.preventDefault();

            // Récupération des champs
            const name = document.getElementById("fullName").value.trim();
            const email = document.getElementById("emailAddr").value.trim();
            const message = document.getElementById("userMessage").value.trim();

            // Vérification
            if (name === "" || email === "" || message === "") {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            // Afficher le message de succès
            if (formSuccess) {
                formSuccess.style.display = "flex";
            }

            // Réinitialiser le formulaire
            form.reset();

        });
    }


    /*NAVIGATION*/

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            // Vérifie qu'il s'agit bien d'un lien vers une section
            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }

        });

    });


    /*MASQUER LE MESSAGE DE SUCCÈS*/

    if (formSuccess) {

        formSuccess.addEventListener("click", function () {
            formSuccess.style.display = "none";
        });

    }

});