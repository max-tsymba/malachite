const uploadFile = () => {

    const input = document.getElementById('formImage'),
        btn = document.querySelector('.file__button');

    input.addEventListener('change', () => {
        if(input.files[0])
        {
            btn.textContent = input.files[0].name;
            btn.classList.add('active');
        }
        else 
        {
            btn.textContent = 'Файл не вибраний';
            btn.classList.remove('active');
        }
    })
};

export default uploadFile;