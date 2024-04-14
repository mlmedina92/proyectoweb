
function ocultarMenu (){
    let menuDesplegable = document.querySelector("mobile-menu-desplegable");
    menuDesplegable.classList.toggle("hidden-mobile");
    console.log("holaaaaaa")

}

let burgerButton = document.getElementById("navbarBurger");
burgerButton.addEventListener("click", ocultarMenu);