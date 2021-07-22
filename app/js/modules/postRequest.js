let token = 0;
if(document.querySelector('meta[name="csrf-token"]') !== null) {
        token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

const postRequest = () => {

    function bindRequest(getFormID, getErrorLabelsClass, getInputsSelector, getInputWrapper) {

        const form = document.getElementById(getFormID),
            labels = document.querySelectorAll(getErrorLabelsClass),
            inputs = document.querySelectorAll(getInputsSelector),
            wrapper = document.querySelectorAll(getInputWrapper);

        const submitBtn = form.lastElementChild.children[0];
        const url = form.action;

        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();
            submitBtn.disabled = true;

            clearErrors(labels, wrapper);

            let formData = new FormData(form); 
            form.classList.add('_sending');
            
            
            let response = await fetch(url, {
                credentials: 'same-origin',
                method: 'POST',
                body: formData,
                headers: new Headers({
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': token
                })
            });

            if(response.ok) {

                form.classList.remove('_sending');
                form.classList.add('active');
                Reset(form);
                setTimeout(() => {
                    submitBtn.disabled = false;
                    location.reload();
                }, 2000);
            } else {   

                let result = await response.json();

                for(let error in result.errors) {

                    for(let index = 0; index < inputs.length; index++) {

                        if(inputs[index].name === error) {
                            wrapper[index].classList.add('_error');
                            labels[index].textContent = result.errors[error];
                            labels[index].style.display = 'block';
                        }
                    }
                }

                submitBtn.disabled = false;
                form.classList.remove('_sending'); 
            }
        }
    };

    bindRequest('contact-form', '#contact-form .form-error', '#contact-form ._req', '#contact-form .input-wrapper');
    bindRequest('calculate-form', '#calculate-form .form-error', '#calculate-form ._req', '#calculate-form .input-wrapper');
};

function clearErrors(labelError, inputsError) {

    labelError.forEach(item => {
            item.style.display = 'none';
    });

    inputsError.forEach(item => {
        item.classList.remove('._error');
    });
}

function Reset(form) {
    form.reset();
}

export default postRequest;