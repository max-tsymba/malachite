const chooseType = () => {
    
    const typeInput = document.getElementsByName('picture');
    const fileUpload = document.getElementById('file-wrapper');
    const fileInput = document.getElementById('formImage');
    const fontWrapper = document.getElementById('font-wrapper');
    const fontInput = document.getElementById('fontInput');
    const textWrapper = document.getElementById('text-wrapper');
    const textInput = document.getElementById('textInput');
    
    typeInput[0].addEventListener('change', (e) => {

        if(e.target.value == 1) {
            fileUpload.style.display = 'none';
            fontWrapper.style.display = 'block';
            textWrapper.style.display = 'block';
            fileInput.disabled = true;
            fontInput.disabled = false;
            textInput.disabled = false;
        }
        if(e.target.value == 2) {
            fontWrapper.style.display = 'none';
            textWrapper.style.display = 'none';
            fileUpload.style.display = 'block';
            fileInput.disabled = false;
            fontInput.disabled = true;
            textInput.disabled = true;
        }
    });
};

export default chooseType;