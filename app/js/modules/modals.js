
const modalOpener = () => {

    function bindModal(getOverlayClass, getFormID, getOpenBtnClass, getCloseBtnClass) {

        const overlay = document.querySelector(getOverlayClass),
            modal = document.getElementById(getFormID),
            openBtn = document.querySelectorAll(getOpenBtnClass),
            closeBtn = document.querySelectorAll(getCloseBtnClass),
            inputs = document.querySelectorAll('._req'),
            wrappers = document.querySelectorAll('.input-wrapper'),
            labels = document.querySelectorAll('.form-error');

        const scroll = calcScroll();

        openBtn.forEach(btn => {
            btn.addEventListener('click', () => {

                overlay.classList.add('active');
                modal.classList.add('active');
                document.body.style.overflowY = 'hidden';
                document.body.style.marginRight = `${scroll}px`; 
            });
        })

        closeBtn.forEach(btn => {

            btn.addEventListener('click', () => {
                
                overlay.classList.add('toback');
                modal.classList.add('toback');
                document.body.style.overflowY = 'scroll';
                document.body.style.marginRight = `0px`; 
                clearErrors(labels, wrappers);
                Reset(modal);

                setTimeout(() => {
                    overlay.classList.remove('active');
                    overlay.classList.remove('toback');
                    modal.classList.remove('active');
                    modal.classList.remove('toback');
                }, 200);
            })
        });

        overlay.addEventListener('click', (e) => {

            if(e.target === overlay) {

                overlay.classList.add('toback');
                modal.classList.add('toback');
                document.body.style.overflowY = 'scroll';
                document.body.style.marginRight = `0px`; 
                clearErrors(labels, wrappers);
                Reset(modal);

                setTimeout(() => {
                    overlay.classList.remove('active');
                    overlay.classList.remove('toback');
                    modal.classList.remove('active');
                    modal.classList.remove('toback');
                }, 200);
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

function clearErrors(labelError, inputsError) {

    labelError.forEach(item => {
            item.style.display = 'none';
    });

    inputsError.forEach(item => {
        item.classList.remove('_error');
    });
}

function Reset(form) {
    form.reset();
}

export default modalOpener;