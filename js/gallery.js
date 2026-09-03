const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function closeGalleryLightbox() {
    if (!galleryLightbox) return;
    galleryLightbox.classList.remove("active");
    galleryLightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".gallery-image-button").forEach((button) => {
    button.addEventListener("click", () => {
        lightboxImage.src = button.dataset.full;
        lightboxImage.alt = button.querySelector("img").alt;
        lightboxCaption.innerHTML = button.dataset.caption;
        galleryLightbox.classList.add("active");
        galleryLightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });
});

if (lightboxClose) lightboxClose.addEventListener("click", closeGalleryLightbox);
if (galleryLightbox) {
    galleryLightbox.addEventListener("click", (event) => {
        if (event.target === galleryLightbox) closeGalleryLightbox();
    });
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeGalleryLightbox();
});
