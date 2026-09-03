
const products = [
    { id: "black-crochet-leather-bag", name: "Black Crochet Leather Bag", price: 2500, category: "Bags", image: "images/black crochet brown leather bag.jpg", alt: "Black crochet bag with brown leather details", label: "BESTSELLER", description: "A hand-finished crochet bag with warm leather details for everyday styling." },
    { id: "blue-crochet-bag", name: "Blue Crochet Bag", price: 2500, category: "Bags", image: "images/Blue crochet bag.jpg", alt: "Blue crochet bag", label: "NEW", description: "A bright crochet carryall that brings colour and texture to your daily edit." },
    { id: "black-floral-crochet-sandals", name: "Black Floral Crochet Sandals", price: 2000, category: "Sandals", image: "images/Black Sandals floral crochet design.JPG", alt: "Black sandals with floral crochet design", label: "NEW", description: "Lightweight crochet sandals finished with a floral detail for easy warm-weather dressing." },
    { id: "black-crochet-sandals", name: "Black Crochet Sandals", price: 2000, category: "Sandals", image: "images/product black crochet sandles .jpg", alt: "Black crochet sandals", description: "An easy black sandal with a tactile crochet finish, made for everyday movement." },
    { id: "blue-crochet-sandals", name: "Blue Crochet Sandals", price: 2000, category: "Sandals", image: "images/product blue crochet sandles .jpg", alt: "Blue crochet sandals", label: "NEW", description: "A fresh blue crochet sandal designed to add a considered pop of colour." },
    { id: "orange-crochet-sandals", name: "Orange Crochet Sandals", price: 2000, category: "Sandals", image: "images/product orange crochet sandles .JPG", alt: "Orange crochet sandals", description: "A vivid crochet sandal with a relaxed shape for sunny days and slow weekends." },
    { id: "purple-crochet-sling-bag", name: "Purple Crochet Sling Bag", price: 2500, category: "Bags", image: "images/product purple sling bag1.JPG", alt: "Purple crochet sling bag", label: "NEW", description: "A compact crochet sling bag made to carry the essentials with personality." },
    { id: "brown-crochet-sling-bag", name: "Brown Crochet Sling Bag", price: 2500, category: "Bags", image: "images/product brown sling bag 1.JPG", alt: "Brown crochet sling bag", description: "A versatile brown crochet sling bag with an easy silhouette for daily wear." },
    { id: "white-black-crochet-bag", name: "White & Black Crochet Bag", price: 2500, category: "Bags", image: "images/white crochet black bag.JPG", alt: "White and black crochet bag", label: "NEW", description: "A graphic two-tone crochet bag that gives simple outfits a confident finish." },
    { id: "black-grey-crochet-bag", name: "Black & Grey Crochet Bag", price: 2500, category: "Bags", image: "images/Black crochet Grey bag.jpg", alt: "Black and grey crochet bag", description: "A tonal crochet bag with a soft structure and an understated everyday palette." }
];

const formatPrice = (price) => `KSh ${price.toLocaleString("en-KE")}`;
const productUrl = (id) => `product.html?product=${encodeURIComponent(id)}`;

const heroImages = [
    ["images/culture2.png", "Hook & Knots campaign portrait"],
    ["images/culture3.png", "Hook & Knots campaign styling"],
    ["images/culture4.png", "Hook & Knots campaign"],
    ["images/culture5.png", "Hook & Knots campaign styling"],
    ["images/culture6.png", "Hook & Knots campaign"],
    ["images/Culture7.png", "Hook & Knots fashion campaign"],
    ["images/culture8.png", "Hook & Knots campaign portrait"],
    ["images/culture9.png", "Hook & Knots campaign portrait"],
    ["images/black crochet brown leather bag 2.JPG", "Black crochet leather bag detail"],
    ["images/black crochet brown leather bag.jpg", "Black crochet bag with brown leather details"],
    ["images/Black crochet Grey bag.jpg", "Black and grey crochet bag"],
    ["images/blue crochet bag 2.JPG", "Blue crochet bag detail"],
    ["images/Blue crochet bag.jpg", "Blue crochet bag"],
    ["images/Black Sandals floral crochet design.JPG", "Black floral crochet sandals"],
    ["images/product black crochet sandles .jpg", "Black crochet sandals"],
    ["images/product blue crochet sandles .jpg", "Blue crochet sandals"],
    ["images/product orange crochet sandles .JPG", "Orange crochet sandals"],
    ["images/product brown sling bag 1.JPG", "Brown crochet sling bag"],
    ["images/product brown sling bag2.JPG", "Brown crochet sling bag detail"],
    ["images/product purple sling bag1.JPG", "Purple crochet sling bag"],
    ["images/product purple sling bag2.JPG", "Purple crochet sling bag detail"],
    ["images/white crochet black bag.JPG", "White and black crochet bag"]
];

const heroSlideshow = document.getElementById("heroSlideshow");
if (heroSlideshow) {
    heroImages.forEach(([image, alt], index) => {
        if (index === 5) return;
        const slide = document.createElement("div");
        slide.className = "hero-slide";
        slide.innerHTML = `<img src="${image}" alt="${alt}" loading="eager">`;
        heroSlideshow.appendChild(slide);
    });

    const slides = heroSlideshow.querySelectorAll(".hero-slide");
    const heroSlideNumber = document.getElementById("heroSlideNumber");
    let activeSlide = 0;
    window.setInterval(() => {
        slides[activeSlide].classList.remove("is-active");
        activeSlide = (activeSlide + 1) % slides.length;
        slides[activeSlide].classList.add("is-active");
        if (heroSlideNumber) heroSlideNumber.textContent = String(activeSlide + 1).padStart(2, "0");
    }, 5000);
}

const productGrid = document.getElementById("productGrid");
if (productGrid) {
    productGrid.innerHTML = products.map((product) => `
        <article class="shop-product-card">
            <a href="${productUrl(product.id)}">
                <div class="shop-product-image">
                    <img src="${product.image}" alt="${product.alt}" loading="lazy">
                    ${product.label ? `<span class="product-label">${product.label}</span>` : ""}
                </div>
                <div class="shop-product-info">
                    <div><h2>${product.name}</h2><p>${product.category}</p></div>
                    <strong>${formatPrice(product.price)}</strong>
                </div>
            </a>
        </article>
    `).join("");
    const productCount = document.getElementById("productCount");
    if (productCount) productCount.textContent = products.length;
}

const detailProduct = products.find((product) => product.id === new URLSearchParams(window.location.search).get("product")) || products[0];
const detailTitle = document.querySelector(".product-detail-info h1");
if (detailTitle) {
    document.title = `${detailProduct.name} — Hook & Knots`;
    detailTitle.textContent = detailProduct.name;
    const detailImage = document.querySelector(".product-main-image");
    const detailPrice = document.querySelector(".product-price");
    const detailDescription = document.querySelector(".product-description p");
    const detailOption = document.querySelector(".product-option");
    if (detailImage) detailImage.innerHTML = `<img src="${detailProduct.image}" alt="${detailProduct.alt}">`;
    if (detailPrice) detailPrice.textContent = formatPrice(detailProduct.price);
    if (detailDescription) detailDescription.textContent = detailProduct.description;
    if (detailOption) detailOption.remove();
    const breadcrumb = document.querySelector(".product-breadcrumb span:last-child");
    if (breadcrumb) breadcrumb.textContent = detailProduct.name;
    const relatedGrid = document.querySelector(".related-grid");
    if (relatedGrid) relatedGrid.innerHTML = products.filter((product) => product.id !== detailProduct.id).slice(0, 3).map((product) => `
        <a href="${productUrl(product.id)}"><div class="related-image"><img src="${product.image}" alt="${product.alt}" loading="lazy"></div><h3>${product.name}</h3><p>${formatPrice(product.price)}</p></a>
    `).join("");
}

/*
SCROLL REVEAL
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

document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = form.querySelector(".form-status");
        if (status) status.textContent = "Thank you. We will be in touch soon.";
        form.reset();
    });
});

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


            const product = {

                id:
                    detailProduct.id,

                name:
                    detailProduct.name,

                price:
                    detailProduct.price,

                quantity:
                    quantity

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
