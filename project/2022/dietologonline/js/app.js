// Burger

document.getElementById("burgerMenu-btn").onclick = () => {
    document.getElementById("bodyLocker").classList.toggle("bodyLocked");
    document.getElementById("burgerMenu-btn").classList.toggle("buttonTransform");
    document.querySelector("body").classList.toggle("burgerMenu-open")
}

//