const fontsLoader = () => {

    let select = document.getElementsByName('fonts');
    let getFontsArray = [];
    let newFontFace = [];

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


    for(let i = 0; i < getFontsArray.length; i++) {
        newFontFace.push(new FontFace(getFontsArray[i], `url(../fonts/OptionFonts/${getFontsArray[i]}.ttf) format("truetype")`));
    }

    select.forEach(option => {

        for(let i = 1; i < option.length; i++) {
            option[i].style.fontFamily = newFontFace[i-1].family;
            console.log(option[i]);
        }
    })
};

export default fontsLoader;