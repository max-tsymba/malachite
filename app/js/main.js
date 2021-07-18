import mobileMenuOpener from './modules/menu';
import rotateText from './modules/rotate';

window.addEventListener('DOMContentLoaded', () => {
    mobileMenuOpener('burger', '.menu__wrapper', '.menu__list-link');
    rotateText('.text-rotate');
});