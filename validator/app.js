const saveBtnElem = document.getElementsByClassName('save-btn')[0];

const FORM_VALIDATION = {
    name: {
        reqExp: /^\w+$/,
        errorMessage: 'Name is not valid'
    },
    age: {
        reqExp: /^\d+$/,
        errorMessage: 'Age is not valid'
    },
    card: {
        reqExp: /^\d+$/,
        errorMessage: 'Card is not valid'
    },
    email: {
        reqExp: /^[\w\d]+(.|_)?[\w\d]+@[\w\d]+.\w{3}$/,
        errorMessage: 'Email is not valid'
    },
};

saveBtnElem.addEventListener('click', e => {
    const {
        name: {value: name},
        age: {value: age},
        card: {value: card},
        email: {value: email},
    } = document.forms[0];

    if (isFormValid({name, age, card, email})) {
        console.log('Form is valid');
    } else {
        console.log('Form is not valid');
    }
});

const isFormValid = formValues => {
    let isValid = true;

    for (const key in formValues) {
        const {reqExp, errorMessage} = FORM_VALIDATION[key];

        if (!reqExp.test(formValues[key])) {
            isValid = false;
            console.log(errorMessage);
        }
    }

    return isValid;
};
