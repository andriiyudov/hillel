const FORM_FIELDS_LABELS = {
    name: 'Name',
    age: 'Age',
    card: 'Card',
    email: 'Email',
};

const displayFormInfo = formInfo => {
    const infoElem = document.querySelector('.info');
    infoElem.innerHTML = '';

    Object.entries(formInfo).forEach(([key, value]) => {
        infoElem.innerHTML += createField(key, value);
    });
};

const createField = (key, value) => {
    const divElem = document.createElement('div');

    divElem.className = 'info__field';
    divElem.textContent = `${FORM_FIELDS_LABELS[key]}: ${value}`;
};
