const resizeTextArea = () => {
    
    let textareas = document.querySelectorAll('textarea');
    let group = document.querySelector('.text-group');
    let label = document.querySelector('.text-wrapper .form-error');

    for (var i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener("input", function(e){
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";      
        label.style.top = this.scrollHeight + 30 + 'px';

        if(this.style.height.slice(0, -2) > 100) {
          this.style.overflowY = 'scroll';
          label.style.top = 150 + 'px';
        }
      });
      if(textareas[i].value === '') group.classList.add('down');
    }


    textareas[0].addEventListener('keyup', ()=>{
      if(textareas[0].value !== ''){
        group.classList.add('none');
      } else {
        group.classList.remove('none');
      }
    });

    function mask() {

      let phones = document.getElementsByName('phone');
      let newMaskOption = {
        mask: '+{38}(000)-000-0000',
      }

      phones.forEach((item) => {
        let mask = IMask(item, newMaskOption);
      })
    }

    mask();
};

export default resizeTextArea;