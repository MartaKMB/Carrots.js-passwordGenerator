const user_input = document.querySelector('#user_input');
const symb = document.querySelector('#symbols_checkbox');
const pass_btn = document.querySelector('#pass_btn');
const msg = document.querySelector('#message');
const password = document.querySelector('#password');

pass_btn.addEventListener('click', (e) => {
    let value_input = user_input.value;
    let checked_symb = true;

    if (isNaN(value_input) || value_input === '') {
        msg.style.backgroundColor = '#ffff80';
        msg.innerHTML = 'please enter number above';
    } else if (value_input > 20) {
        msg.style.backgroundColor = '#ffff80';
        msg.innerHTML = 'is it not to long?';
    } else if (value_input < 6) {
        msg.style.backgroundColor = '#ffff80';
        msg.innerHTML = 'is it not to short?';
    } else {
        msg.innerHTML = '';
        msg.style.backgroundColor = 'inherit';

        if (symb.checked === true) {

            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!_$%^&*?0123456789";

            let pass = generatePass(value_input, characters, checked_symb);
            password.innerHTML = pass;
            password.style.backgroundColor = '#ffff80';

        } else {

            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            checked_symb = false;

            let pass = generatePass(value_input, characters, checked_symb);
            password.innerHTML = pass;
            password.style.backgroundColor = '#ffff80';
        }
    }

});

function generatePass(length_num, possible, symbols) {

    let pass = "";

    for (let i = 0; i < length_num; i++) {
        pass += possible.charAt(Math.floor(Math.random() * possible.length));

    }

    if (symbols === true) {
        if (pass.match(/\d+/g) === null || pass.match(/[a-z]/) === null || pass.match(/[A-Z]/) === null || pass.match(/[!_$%^&*?]/) === null) {
            // msg.innerHTML = "nie ma";
            pass = generatePass(length_num, possible, symbols);
        }
    } else {
        if (pass.match(/\d+/g) === null || pass.match(/[a-z]/) === null || pass.match(/[A-Z]/) === null) {
            pass = generatePass(length_num, possible, symbols);
        }
    }
    return pass;
}
