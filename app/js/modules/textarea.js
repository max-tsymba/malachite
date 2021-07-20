const resizeTextArea = () => {
    
    let textareas = document.querySelectorAll('textarea');
    for (var i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener("input", function(e){
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";      
      });
    }
};

export default resizeTextArea;