const fontsLoader = () => {

    let select = document.getElementsByName('fonts');
    let getFontsArray = [];

    select.forEach(option => {
        for(let i = 1; i < option.length; i++) {
            
            getFontsArray.push(option[i].textContent);
            let newStyle = document.createElement('style');
            newStyle.appendChild(document.createTextNode("\
            @font-face {\
                font-family: " + option[i].textContent + ";\
                src: url('../fonts/OptionFonts/" + option[i].textContent + ".ttf') format('truetype');\
            }\
            "));
            document.head.appendChild(newStyle);
        }
    })

    select.forEach(option => {

        for(let i = 1; i < option.length; i++) {
            option[i].style.fontFamily = option[i].textContent;
        }
    })
};

export default fontsLoader;