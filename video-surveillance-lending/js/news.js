let newsItems = document.querySelectorAll('.news-list__item');
let defaultHeight;

if(window.matchMedia('(min-width: 768px)').matches) {
    defaultHeight = '106px';
} else if(window.matchMedia('(min-width: 1200px)').matches) {
    defaultHeight = '110px';
} else {
    defaultHeight = '162px';
}

function windowWidthCheck(el, type) {
    if(window.matchMedia('(min-width: 768px)').matches) {
        el.firstElementChild.lastElementChild.style.display = type;
        if(window.matchMedia('(min-width: 1200px)').matches) {
            el.firstElementChild.lastElementChild.style.display = 'none';
        }
    } 
}

function changeItemWidth(el, width, type) {
    if(window.matchMedia('(min-width: 1200px)').matches) {
        el.style.width = width;
        el.firstElementChild.nextElementSibling.style.display = type;
    }
}

newsItems.forEach((el) => {
    el.style.maxHeight = defaultHeight
    el.addEventListener('click', () => {
        if(el.style.maxHeight == el.scrollHeight + 'px') {
            el.style.maxHeight = defaultHeight;
            windowWidthCheck(el, 'none')
            changeItemWidth(el, '766px', 'none')
        } else {
            newsItems.forEach((el) => {
                windowWidthCheck(el, 'none')
                changeItemWidth(el, '766px', 'none')
                el.style.maxHeight = defaultHeight; 
            })
            windowWidthCheck(el, 'flex')
            changeItemWidth(el, '1200px', 'flex')
            el.style.maxHeight = el.scrollHeight + 'px'
        }
    })
})