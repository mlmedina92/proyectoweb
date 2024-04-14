"use strict"

// querySelector('#prim')
function ocultarMenu() {
    let menuDesplegable = document.querySelector("#mobile-menu-desplegable");
    menuDesplegable.classList.toggle("visible");
    let botonCierre = document.querySelector ("#burgerIcon");
    botonCierre.classList.toggle("fa-times");
    console.log("holaaaaaa")
}
let burgerButton = document.querySelector("#navbarBurger");
burgerButton.addEventListener("click", ocultarMenu);