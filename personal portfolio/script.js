/* ==================================================
                  MOBILE MENU
================================================== */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* ==================================================
              CLOSE MOBILE MENU
          AFTER CLICKING A LINK
================================================== */

const navigationLinks =
    document.querySelectorAll("#nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* ==================================================
                  CONTACT FORM
================================================== */

const form =
    document.getElementById("contactForm");


if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Message Sent Successfully!");

        form.reset();

    });

}



/* ==================================================
                 TYPING ANIMATION
================================================== */

const words = [

    "Frontend Web Developer",

    "UI/UX Designer",

    "JavaScript Developer",

    "Creative Coder"

];


let wordIndex = 0;

let charIndex = 0;

let typing = true;


const typingElement =
    document.getElementById("typing");


function typeEffect() {

    if (!typingElement) return;


    if (typing) {

        typingElement.textContent =
            words[wordIndex].substring(
                0,
                charIndex++
            );


        if (
            charIndex >
            words[wordIndex].length
        ) {

            typing = false;

            setTimeout(
                typeEffect,
                1200
            );

            return;

        }

    }

    else {

        typingElement.textContent =
            words[wordIndex].substring(
                0,
                charIndex--
            );


        if (charIndex < 0) {

            typing = true;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        typing ? 100 : 50
    );

}


typeEffect();



/* ==================================================
                  ANIMATED COUNTER
================================================== */

const counters =
    document.querySelectorAll(".count");


counters.forEach(function (counter) {


    const updateCounter = function () {


        const target =
            Number(
                counter.getAttribute(
                    "data-target"
                )
            );


        const current =
            Number(
                counter.innerText
                    .replace("+", "")
            );


        const increment =
            Math.ceil(target / 100);


        if (current < target) {

            counter.innerText =
                Math.min(
                    current + increment,
                    target
                );


            setTimeout(
                updateCounter,
                20
            );

        }

        else {

            counter.innerText =
                target + "+";

        }

    };


    updateCounter();

});



/* ==================================================
                  BACK TO TOP
================================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {


        if (window.scrollY > 300) {

            topBtn.style.display =
                "block";

        }

        else {

            topBtn.style.display =
                "none";

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* ==================================================
                 ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section");


const navItems =
    document.querySelectorAll(
        "nav ul li a"
    );


window.addEventListener(
    "scroll",
    function () {


        let current = "";


        sections.forEach(
            function (section) {


                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navItems.forEach(
            function (link) {


                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);