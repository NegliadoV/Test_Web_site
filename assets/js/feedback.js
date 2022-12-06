"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');


    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);
        let mask = document.querySelector('.mask__content')
        if (error === 0) {
            mask.classList.add('mask__block')
            let response = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                mask.classList.remove('mask__block')
                form.reset();

            } else {
                alert("Ошибка отправки формы")
                mask.classList.remove('mask__block')
            }
        } else {

        }

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req')


        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            input.classList.remove('error')


            if (input.classList.contains('name')) {
                if (input.value === '') {
                    input.classList.add('error')
                    error++;
                } else {
                    input.classList.remove('error')
                }
            } else if (input.classList.contains('phone')) {
                if (testPhone(input)) {
                    input.classList.add('error')
                    error++;
                } else {
                    input.classList.remove('error')
                }
            } else {
                input.classList.remove('error')
            }
        }
        return error;
    }

    function testPhone(input) {
        return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value)
    }
})