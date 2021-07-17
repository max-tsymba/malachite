const rotateText = (textClass) => {

    const text = document.querySelector(textClass);
    
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='rotate-span'>$&</span>");

    const element = document.querySelectorAll('.rotate-span');
    for(let i = 0; i < element.length; i++) {
        element[i].style.transform = "rotate(" + i*18 + "deg)";
    }
}

export default rotateText;