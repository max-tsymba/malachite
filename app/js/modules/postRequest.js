const postRequest = () => {

    function bindRequest(getFormID, getErrorLabelsClass) {

        const form = document.getElementById(getFormID),
            labels = document.querySelectorAll(getErrorLabelsClass);

        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            clearErrors(labels);

            let formData = new FormData(form); 
            form.classList.add('_sending');
            
            console.log(JSON.stringify(formData));
    
        }
    };

    bindRequest('contact-form', '.form-error');
};

function clearErrors(labelError) {

    labelError.forEach(item => {
            item.style.display = 'none';
    });
}

export default postRequest;