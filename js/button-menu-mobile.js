(() => {
    const btnMenuRef = document.querySelector("[data-button-menu]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    btnMenuRef.addEventListener("click", () => {
        const expanded =
        btnMenuRef.getAttribute("aria-expanded") === "true" || false;
        btnMenuRef.classList.toggle("is-open");
        btnMenuRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    });
})();