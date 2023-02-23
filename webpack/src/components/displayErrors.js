import './displayErrors.scss';

export const displayErrors = errors => {
    const errorsElem = document.querySelector('.errors');
    errorsElem.innerHTML = '';

    errors.forEach(error => {
        const liElem = document.createElement('li');
        liElem.textContent = error;

        errorsElem.appendChild(liElem);
    });
};
