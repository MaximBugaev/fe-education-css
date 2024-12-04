function initSwiper(mainSelector, thumbsSelector, pagination, nextEl, prevEl) {
    const thumbs = new Swiper(thumbsSelector, {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
    })
    
    const swiper = new Swiper(mainSelector, {
        loop: true,
        spaceBetween: 25,
    
        pagination: {
            el: pagination,
            clickable: true,
        },
    
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
    
        thumbs: {
            swiper: thumbs,
        },
    })
}

function changeTopic(activeBlock, inactiveBlock, topics) {
    if(window.matchMedia('(max-width: 1199px)').matches) {
        topics.forEach((el) => {
            el.addEventListener('click', () => {
                if(el.classList.contains('models-list__topic--active')) {
                    return
                } else {
                    el.classList.add('models-list__topic--active');
                    if(el.nextElementSibling) {
                        el.nextElementSibling.classList.remove('models-list__topic--active');
                        inactiveBlock.style.display = 'none';
                        activeBlock.style.display = 'block';
                    } else {
                        el.previousElementSibling.classList.remove('models-list__topic--active');
                        activeBlock.style.display = 'none';
                        inactiveBlock.style.display = 'block';
                    }
                }
            })
        })
    } else {
        topics.forEach((el) => {
            el.textContent += ':';
        })
    }
}

let topics = []
let char = []
let desc = []

for(let i = 1; i <= 5; i++) {
    topics[i] = document.querySelectorAll(`.models-list__topic${i}`);
    char[i] = document.querySelector(`.models-list__characteristics${i}`)
    desc[i] = document.querySelector(`.models-list__description${i}`)

    initSwiper(`.swiper${i}`, `.thumbs-swiper${i}`, `.swiper-control__pagination${i}`, `.swiper-button-next--custom${i}`, `.swiper-button-prev--custom${i}`)
    changeTopic(char[i], desc[i], topics[i])
}