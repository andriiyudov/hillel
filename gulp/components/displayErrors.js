const displayErrors = errors => {
    const errorsElem = document.querySelector('.errors');
    errorsElem.innerHTML = '';

    errors.forEach(error => {
        errorsElem.innerHTML += `
            <li>${error}</li>
        `;
    });
}
