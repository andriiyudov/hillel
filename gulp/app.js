const saveBtnElem = document.querySelector('.save-btn');

saveBtnElem.addEventListener('click', e => {
    e.preventDefault();
    const form = getFormValues();
    const {isValid, errors} = isFormValid(form);

    if (isValid) {
        displayFormInfo(form);
    } else {
        displayErrors(errors);
    }
});
