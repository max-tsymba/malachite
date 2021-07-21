const resizeTextArea = () => {
    
    let textareas = document.querySelectorAll('textarea');
    let group = document.querySelector('.text-group');
    for (var i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener("input", function(e){
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";      
      });
      if(textareas[i].value === '') group.classList.remove('down');
    }


    textareas[0].addEventListener('keyup', ()=>{
      if(textareas[0].value === ''){
        group.classList.remove('down');
      } else {
        group.classList.add('down');
      }
    });
};

export default resizeTextArea;