let newsListDescriptions = document.querySelectorAll('.news-list__description');

document.querySelectorAll('.news-list__item').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.lastElementChild.lastElementChild;
        if(content.style.maxHeight == content.scrollHeight + 'px') {
            newsListDescriptions.forEach((el) => el.style.maxHeight = '48px')
        } else {
            newsListDescriptions.forEach((el) => el.style.maxHeight = '48px')
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})
