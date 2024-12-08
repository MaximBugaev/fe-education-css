const slideButtons = document.querySelectorAll('.swiper-list__btn');

const swiper = new Swiper('.swiper', {
  loop: false,
  spaceBetween: 25,

  navigation: {
    nextEl: '.btns-container-btn-next',
    prevEl: '.btns-container-btn-prev',
  },

  clickable: true,

  keyboard: true,
  mousewheel: true,

  on: {
    slideChange: function() {
      slideButtons.forEach(btn => btn.classList.remove('swiper-list__btn--active'));
      slideButtons[swiper.realIndex].classList.add('swiper-list__btn--active');
    }
  }
});

// Добавляем обработчик события для каждой кнопки
slideButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Переключаем слайд на соответствующий индекс
        swiper.slideTo(index);
        
        // Обновляем активный класс для кнопок
        slideButtons.forEach(btn => btn.classList.remove('swiper-list__btn--active'));
        button.classList.add('swiper-list__btn--active');
    });
});

