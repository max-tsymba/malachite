const mobileMenuOpener = (burgerID, menuClass, menuLinksClass) => {

    const burgerBtn = document.getElementById(burgerID),
        menu = document.querySelector(menuClass),
        links = document.querySelectorAll(menuLinksClass);

    let isOpen = true;

    burgerBtn.addEventListener('click', () => {
        if(isOpen) {

            burgerBtn.classList.add('active');
            menu.classList.add('open');
            document.querySelector('body').style.overflowY = 'hidden';
            isOpen = false;
        } else {
            
            burgerBtn.classList.remove('active');
            menu.classList.remove('open');
            document.querySelector('body').style.overflowY = 'scroll';
            isOpen = true;
        }
    });

    links.forEach((link) => {
        link.addEventListener('click', () => {

            burgerBtn.classList.remove('active');
            menu.classList.remove('open');
            document.querySelector('body').style.overflowY = 'scroll';
            isOpen = true;  
        });
    });
};

export default mobileMenuOpener;