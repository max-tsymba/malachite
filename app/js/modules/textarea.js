const resizeTextArea = () => {
    let observe;
    if (window.attachEvent) {
        observe = function (element, event, handler) {
            element.attachEvent('on'+event, handler);
        };
    }
    else {
        observe = function (element, event, handler) {
            element.addEventListener(event, handler, false);
        };
    }
    function init () {
        let text = document.getElementById('textarea');
        let group = document.querySelector('.text-wrapper');
        function resize () {
            text.style.height = 'auto';
            text.style.height = text.scrollHeight+'px';

            let heightGroup = (group.style.height).slice(0, -2);
            if(heightGroup < 183 ) 
                group.style.height = text.scrollHeight+ 25 +'px';
        }
        /* 0-timeout to get the already changed text */
        function delayedResize () {
            window.setTimeout(resize, 0);
            if(text.value === '') {
                group.style.height = 50 +'px';
            }
        }
        observe(text, 'change',  resize);
        observe(text, 'cut',     delayedResize);
        observe(text, 'paste',   delayedResize);
        observe(text, 'drop',    delayedResize);
        observe(text, 'keydown', delayedResize);

        text.focus();
        text.select();
        resize();
        console.log(1);
    }

    init();
};

export default resizeTextArea;