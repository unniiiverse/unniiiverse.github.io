function burgerTogglers () {
    document.querySelector('.uv-burger-btn').classList.toggle('uv-burger-btn-transition');
    document.querySelector('#uv-burger-menu').classList.toggle('uv-burger-menu-opened');
    document.querySelector('#uv-burger-body-locker').classList.toggle('uv-burger-body-locked');
}

document.querySelectorAll('.uv-burger-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        burgerTogglers();
    })
})