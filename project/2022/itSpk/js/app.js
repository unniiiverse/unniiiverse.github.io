function burgerClassTogglers() {
    document.querySelector(".burger-btn-transition").classList.toggle("buttonTransform")
    document.querySelector("#locker").classList.toggle("locked")

    document.querySelector("#burger-menu").classList.toggle("bMenu-opened")
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

document.querySelector("#burger-btn").onclick = () => {
    burgerClassTogglers();
}

document.querySelectorAll('.burger-menu-items').forEach((btn) => {
    btn.addEventListener('click', () => {
        burgerClassTogglers();
    })
})

document.querySelectorAll('.itspk-sendbtn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (document.querySelector('body').classList.contains('locked')) {
            burgerClassTogglers();
        }
    })
})