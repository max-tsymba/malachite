const modalOpener = () => {

    function bindModal(getOverlayClass, getFormID, getOpenBtnClass, getCloseBtnClass) {

        const overlay = document.querySelector(getOverlayClass),
            modal = document.getElementById(getFormID),
            openBtn = document.querySelectorAll(getOpenBtnClass),
            closeBtn = document.querySelectorAll(getCloseBtnClass);

        const scroll = calcScroll();

        openBtn.forEach(btn => {
            btn.addEventListener('click', () => {

                overlay.style.display = 'block';
                modal.classList.add('active');
                document.body.style.overflowY = 'hidden';
                document.body.style.marginRight = `${scroll}px`; 
            });
        })

        console.log(closeBtn);

        closeBtn.forEach(btn => {

            btn.addEventListener('click', () => {
                
                overlay.style.display = 'none';
                modal.classList.remove('active');
                document.body.style.overflowY = 'scroll';
                document.body.style.marginRight = `0px`; 
            })
        });

        overlay.addEventListener('click', (e) => {

            if(e.target === overlay) {

                overlay.style.display = 'none';
                modal.classList.remove('active');
                document.body.style.overflowY = 'scroll';
                document.body.style.marginRight = `0px`; 
            }
        })
    };

    bindModal('.modals', 'calculate-form', '.modal-price', '.modal__top-close');
    bindModal('.modals', 'contact-form', '.modal-booking', '.modal__top-close');
};

function calcScroll() {
        
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

export default modalOpener;