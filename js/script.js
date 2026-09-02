
/*
CROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .editorial, .brand-statement, .newsletter"
    );

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
/*
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    });

}

if (closeMenu && mobileMenu) {

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    });

}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

});


/* =========================================================
   NEWSLETTER
   ========================================================= */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = document.getElementById("email");

        if (email && email.value.trim() !== "") {

            alert(
                "Thank you for joining the Hook & Knots world."
            );

            email.value = "";

        }

    });

}
/* =========================================================
   PRODUCT PAGE INTERACTIONS
   ========================================================= */

const quantityDisplay =
    document.getElementById("quantity");

const increaseQuantity =
    document.getElementById("increaseQuantity");

const decreaseQuantity =
    document.getElementById("decreaseQuantity");

const addToBag =
    document.getElementById("addToBag");

const optionButtons =
    document.querySelectorAll(".option-button");


/* =========================================================
   QUANTITY
   ========================================================= */

if (
    quantityDisplay &&
    increaseQuantity &&
    decreaseQuantity
) {

    let quantity = 1;


    increaseQuantity.addEventListener(
        "click",
        () => {

            quantity++;

            quantityDisplay.textContent =
                quantity;

        }
    );


    decreaseQuantity.addEventListener(
        "click",
        () => {

            if (quantity > 1) {

                quantity--;

                quantityDisplay.textContent =
                    quantity;

            }

        }
    );

}


/* =========================================================
   PRODUCT OPTIONS
   ========================================================= */

if (optionButtons.length) {

    optionButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                optionButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add("active");

            }
        );

    });

}


/* =========================================================
   SHOPPING BAG
   ========================================================= */

function getBag() {

    return JSON.parse(
        localStorage.getItem("hookKnotsBag")
    ) || [];

}


function saveBag(bag) {

    localStorage.setItem(
        "hookKnotsBag",
        JSON.stringify(bag)
    );

}


/* =========================================================
   ADD PRODUCT TO BAG
   ========================================================= */

if (addToBag) {

    addToBag.addEventListener(
        "click",
        () => {

            const quantity =
                Number(
                    quantityDisplay.textContent
                );


            const selectedOption =
                document.querySelector(
                    ".option-button.active"
                );


            const product = {

                name:
                    "Signature Piece",

                price:
                    2500,

                quantity:
                    quantity,

                colour:
                    selectedOption
                        ? selectedOption.textContent
                        : "Black"

            };


            const bag = getBag();


            bag.push(product);


            saveBag(bag);


            addToBag.textContent =
                "ADDED TO BAG ✓";


            setTimeout(() => {

                addToBag.textContent =
                    "ADD TO BAG";

            }, 2000);


            updateBagCount();

        }
    );

}


/* =========================================================
   BAG COUNT
   ========================================================= */

function updateBagCount() {

    const bagButton =
        document.getElementById(
            "bagButton"
        );


    if (!bagButton) return;


    const bag =
        getBag();


    const totalItems =
        bag.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    if (totalItems > 0) {

        bagButton.textContent =
            `Bag (${totalItems})`;

    }

    else {

        bagButton.textContent =
            "Bag";

    }

}


updateBagCount();
