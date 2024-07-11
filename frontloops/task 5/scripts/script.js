let burgerBtn = document.querySelector('.languages-btn');
let languagesList = document.querySelector('.languages-list');
let mainPage = document.querySelector('.travel-guide');

burgerBtn.onclick = function() {
    burgerBtn.classList.toggle('languages-btn--active');
    languagesList.classList.toggle('languages-list--open');
    mainPage.classList.toggle('travel-guide--overlay');
}