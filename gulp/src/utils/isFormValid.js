const isFormValid = formValues => {
    const errors = [];
    let isValid = true;

    for (const key in formValues) {
        const {reqExp, errorMessage} = FORM_VALIDATION[key];

        if (!reqExp.test(formValues[key])) {
            isValid = false;
            errors.push(errorMessage);
        }
    }

    return {isValid, errors};
};
