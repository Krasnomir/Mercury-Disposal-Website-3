window.addEventListener('load', () => {
    function positionBanner() {
        let ratio = (window.scrollY / banner.clientHeight) * 100;
        if (ratio > 100) ratio = 100;

        banner.style.backgroundPosition = '0%' + (100 - ratio) + '%';
    }

    const banner = window.document.querySelector('.banner');

    positionBanner();

    window.addEventListener('scroll', () => {
        positionBanner();
    });
});