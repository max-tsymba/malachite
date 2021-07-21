let token = 0;
if(document.querySelector('meta[name="csrf-token"]') !== null) {
        token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

const postRequest = () => {

    function bindRequest(getFormID, getErrorLabelsClass, getInputsSelector) {

        const form = document.getElementById(getFormID),
            labels = document.querySelectorAll(getErrorLabelsClass),
            inputs = document.querySelectorAll(getInputsSelector);

        const submitBtn = form.lastElementChild.children[0];
        const url = form.action;

        form.addEventListener('submit', formSend);

        console.log(inputs);

        async function formSend(e) {
            e.preventDefault();
            submitBtn.disabled = true;

            clearErrors(labels);

            labels.forEach((label) => {
                label.style.display = 'block';
            })

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
                submitBtn.disabled = false;
                location.reload();
            } else {   

                let result = await response.json();

                for(let error in result.errors) {

                    for(let index = 0; index < inputs.length; index++) {

                        if(inputs[index].name === error) {
                            inputs[index].classList.add('_error');
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

    bindRequest('contact-form', '#contact-form .form-error', '#contact-form ._req');
    bindRequest('calculate-form', '#calculate-form .form-error', '#calculate-form ._req');
};

function clearErrors(labelError) {

    labelError.forEach(item => {
            item.style.display = 'none';
    });
}

function Reset(form) {
    form.reset();
}

export default postRequest;