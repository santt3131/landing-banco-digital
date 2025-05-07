// Scroll suave al hacer clic en el botón "¡Quiero mi cuenta!"
document.getElementById("account-button").addEventListener("click", function () {
    const benefitsSection = document.getElementById("account-button");
    benefitsSection.scrollIntoView({ behavior: "smooth" });
});

//Hamburguesa
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});