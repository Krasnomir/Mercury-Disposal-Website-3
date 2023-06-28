window.addEventListener('load', () => {
    const menuBtn = window.document.querySelector('.menu img');
    const hideBtn = window.document.querySelector('.top-bar')
    const menuContainer = window.document.querySelector('.menu-container')
    const menuNavigation = window.document.querySelectorAll('.menu-navigation')
    const headerNavigation = window.document.querySelectorAll('.navbar span');
    const footerNavigation = window.document.querySelectorAll('.footer-navigation span');
    const sections = window.document.querySelectorAll('.section');

    let shown = false;

    function hideMenu() {
        shown = false;
        menuContainer.style.opacity = 0;
        window.setTimeout(() => {
            menuContainer.style.visibility = 'hidden';
        }, 200);
    }

    menuBtn.addEventListener('click', () => {
        if(shown === false) {
            shown = true;
            menuContainer.style.visibility = 'visible';
            menuContainer.style.opacity = 1;
        }
    });

    hideBtn.addEventListener('click', () => {
        if(shown === true) hideMenu();
    });

    menuNavigation[0].addEventListener('click', () => {
        window.scrollTo(0, sections[0].offsetTop - (0.1 * window.innerHeight));
        hideMenu();
    });

    menuNavigation[1].addEventListener('click', () => {
        window.scrollTo(0, sections[1].offsetTop - (0.1 * window.innerHeight));
        hideMenu();
    });

    menuNavigation[2].addEventListener('click', () => {
        window.scrollTo(0, sections[2].offsetTop - (0.1 * window.innerHeight));
        hideMenu();
    });

    menuNavigation[3].addEventListener('click', () => {
        window.scrollTo(0, sections[4].offsetTop - (0.1 * window.innerHeight));
        hideMenu();
    });

    headerNavigation[0].addEventListener('click', () => {
        window.scrollTo(0, sections[0].offsetTop - (0.1 * window.innerHeight));
    });

    headerNavigation[1].addEventListener('click', () => {
        window.scrollTo(0, sections[1].offsetTop - (0.1 * window.innerHeight));
    });

    headerNavigation[2].addEventListener('click', () => {
        window.scrollTo(0, sections[2].offsetTop - (0.1 * window.innerHeight));
    });

    headerNavigation[3].addEventListener('click', () => {
        window.scrollTo(0, sections[4].offsetTop - (0.1 * window.innerHeight));
    });

    footerNavigation[0].addEventListener('click', () => {
        window.scrollTo(0, sections[0].offsetTop - (0.1 * window.innerHeight));
    });

    footerNavigation[1].addEventListener('click', () => {
        window.scrollTo(0, sections[1].offsetTop - (0.1 * window.innerHeight));
    });

    footerNavigation[2].addEventListener('click', () => {
        window.scrollTo(0, sections[2].offsetTop - (0.1 * window.innerHeight));
    });

    footerNavigation[3].addEventListener('click', () => {
        window.scrollTo(0, sections[4].offsetTop - (0.1 * window.innerHeight));
    });
});