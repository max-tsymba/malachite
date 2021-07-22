const resizeTextArea = () => {
    
    let textareas = document.querySelectorAll('textarea');
    let group = document.querySelector('.text-group');
    let label = document.querySelector('.text-wrapper .form-error');
    let btncls = document.querySelectorAll('.modal__top-close');
    let modal = document.querySelector('.modals');

    for (var i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener("input", function(e){
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";      
        label.style.top = this.scrollHeight + 10 + 'px';

        if(this.style.height.slice(0, -2) > 100) {
          this.style.overflowY = 'scroll'; 
          label.style.top = 150 + 'px';
        }

        btncls.forEach((btn)  => {
          btn.addEventListener('click', () => {
            this.style.height = "auto";
            group.classList.remove('none');
            textareas[0].value = '';
            label.style.top = 32 + 'px';
            this.style.overflowY = 'hidden';
          })
        })

        modal.addEventListener('click', (e) => {
          if(e.target === modal) {
            this.style.height = "auto";
            group.classList.remove('none');
            textareas[0].value = '';
            label.style.top = 62 + 'px';
            this.style.overflowY = 'hidden';
          }
        })
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