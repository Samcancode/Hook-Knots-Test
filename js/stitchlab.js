const registrationModal = document.getElementById("registrationModal");
const registrationSelected = document.getElementById("registrationSelected");
const registrationClose = document.getElementById("registrationClose");
const registrationForm = document.getElementById("registrationForm");
const registrationStatus = document.getElementById("registrationStatus");

function closeRegistration() {
    if (!registrationModal) return;
    registrationModal.classList.remove("active");
    registrationModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll("[data-course]").forEach((button) => {
    button.addEventListener("click", () => {
        registrationSelected.textContent = `You are registering interest for ${button.dataset.course}.`;
        registrationStatus.textContent = "";
        registrationForm.reset();
        registrationModal.classList.add("active");
        registrationModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        document.getElementById("registrationName").focus();
    });
});

if (registrationClose) registrationClose.addEventListener("click", closeRegistration);
if (registrationModal) {
    registrationModal.addEventListener("click", (event) => {
        if (event.target === registrationModal) closeRegistration();
    });
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeRegistration();
});

if (registrationForm) {
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        registrationStatus.textContent = "Thank you. Your place request has been received.";
        registrationForm.reset();
    });
}
