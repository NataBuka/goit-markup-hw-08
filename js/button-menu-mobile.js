(() => {
    const btnMenuRef = document.querySelector("[data-button-menu]");
    btnMenuRef.addEventListener("click", () => {
        //const expanded =
        //btnMenuRef.getAttribute("aria-expanded") === "true"|| false;
        btnMenuRef.classList.toggle("is-open");
        //btnMenuRef.getAttribute("aria-expanded", !expanded);
        //mobileMenuRef.classList.toggle("is-open");
    });
})();