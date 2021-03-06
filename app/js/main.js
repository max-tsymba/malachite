import mobileMenuOpener from './modules/menu';
import rotateText from './modules/rotate';
import resizeTextArea from './modules/textarea';
import modalOpener from './modules/modals';
import postRequest from './modules/postRequest';
import fontsLoader from './modules/fontsLoader';
import uploadFile from './modules/uploadFile';
import chooseType from './modules/typeFile';
import IMask from 'imask';

window.addEventListener('DOMContentLoaded', () => {
    mobileMenuOpener('burger', '.menu__wrapper', '.menu__list-link');
    rotateText('.text-rotate');
    resizeTextArea();
    modalOpener();
    postRequest();
    fontsLoader(config.fonts);
    uploadFile();
    chooseType();

    let mySlider = new Swiper('.swiper-container', {

        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },


        simulateTouch: false,
        autoHeight: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,

        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },

        speed: 1000,

        breakpoints: {
            1025: {
                slidesPerView: 3,
            },
            769: {
                slidesPerView: 2,
            },
            279: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            }
        }
    });

    let sliderBack = document.querySelector('.portfolio__container');

    sliderBack.addEventListener('mouseleave', (e) => {
        mySlider.params.autoplay.disableOnInteraction = false;
        mySlider.params.autoplay.delay = 1000;
        mySlider.autoplay.start();
    });

    sliderBack.addEventListener('mouseenter', (e) => {
        mySlider.autoplay.stop();
    })

    let topButton = document.querySelector(".phone");
    window.addEventListener("scroll", function(){
    if(window.pageYOffset > 150){
      topButton.classList.add("shown");
    }else{
        topButton.classList.remove("shown");
    }
  });

});