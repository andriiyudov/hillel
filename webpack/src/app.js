import {displayFormInfo} from './components/displayFormInfo.js';
import {displayErrors} from './components/displayErrors.js';
import {getFormValues} from './utils/getFormValues.js';
import {isFormValid} from './utils/isFormValid.js';
import {saveUser, getUsers} from './requests.js';
import {displayAllUsers} from './components/displayAllUsers.js';

import './styles.scss';

const saveBtnElem = document.querySelector('.save-btn');
const getUsersBtnElem = document.querySelector('.get-users-btn');

saveBtnElem.addEventListener('click', e => {
    e.preventDefault();
    const form = getFormValues();
    const {isValid, errors} = isFormValid(form);

    if (isValid) {
        saveUser(form).then(res => {
            res.status === 200 ?
                displayFormInfo(form) :
                displayErrors(['Smt goes wrong. Try again!']);
        });
    } else {
        displayErrors(errors);
    }
});

getUsersBtnElem.addEventListener('click', e => {
    e.preventDefault();

    getUsers().then(users => displayAllUsers(users));
});
