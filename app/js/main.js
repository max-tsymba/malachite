import mobileMenuOpener from './modules/menu';
import rotateText from './modules/rotate';
import resizeTextArea from './modules/textarea';

window.addEventListener('DOMContentLoaded', () => {
    mobileMenuOpener('burger', '.menu__wrapper', '.menu__list-link');
    rotateText('.text-rotate');
    resizeTextArea();
});