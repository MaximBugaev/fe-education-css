let burgerBtn = document.querySelector('.countries-btn');
let countriesList = document.querySelector('.countries-list');
let mainPage = document.querySelector('.travel-guide');

burgerBtn.onclick = function() {
    burgerBtn.classList.toggle('countries-btn--active');
    countriesList.classList.toggle('countries-list--open');
    mainPage.classList.toggle('travel-guide--overlay');
}