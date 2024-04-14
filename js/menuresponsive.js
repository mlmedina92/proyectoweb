
function ocultarMenu() {
    let menuDesplegable = document.getElementById("mobile-menu-desplegable");
    menuDesplegable.classList.toggle("visible");
    let botonCierre = document.getElementById ("burgerIcon");
    botonCierre.classList.toggle("fa-times");
    console.log("holaaaaaa")
}
let burgerButton = document.getElementById("navbarBurger");
burgerButton.addEventListener("click", ocultarMenu);