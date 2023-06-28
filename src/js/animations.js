window.addEventListener('load', () => {
    const doubles = window.document.querySelectorAll('.double');

    window.addEventListener('scroll', () => {
        for(const double of doubles) {
            if(window.scrollY + window.innerHeight > double.offsetTop) {
                double.firstElementChild.style.transform = 'translateX(0)';
                double.lastElementChild.style.transform = 'translateX(0)';
            }
            else {
                double.firstElementChild.style.transform = 'translateX(-200%)';
                double.lastElementChild.style.transform = 'translateX(200%)';
            }
        }
    });
});

window.addEventListener('load', () => {
    const doubles = window.document.querySelectorAll('.alt-double');

    window.addEventListener('scroll', () => {
        for (const double of doubles) {
            if (window.scrollY + window.innerHeight > double.offsetTop) {
                double.firstElementChild.style.transform = 'translateX(0)';
                double.lastElementChild.style.transform = 'translateX(0)';
            }
            else {
                double.firstElementChild.style.transform = 'translateX(-200%)';
                double.lastElementChild.style.transform = 'translateX(200%)';
            }
        }
    });
});

window.addEventListener('load', () => {
    const articles = window.document.querySelectorAll('.article');

    window.addEventListener('scroll', () => {
        for(const article of articles) {
            if(window.scrollY + window.innerHeight > article.offsetTop) {
                article.style.opacity = 1;
            }
            else {
                article.style.opacity = 0;
            }
        }
    });
});