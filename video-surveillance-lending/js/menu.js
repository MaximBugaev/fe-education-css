let overlay = document.querySelector('.menu-overlay');
let overlayLinks = document.querySelectorAll('.menu-list__item')

function openMenu() {
    overlay.style.width = "100%";
}

function closeMenu() {
    overlay.style.width = "0%";
}

overlayLinks.forEach((el) => {
    el.addEventListener('click', () => {
        closeMenu()
    })
})