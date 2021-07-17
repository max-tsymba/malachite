import mobileMenuOpener from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {
    mobileMenuOpener('burger', '.menu__list', '.menu__list-link');
});