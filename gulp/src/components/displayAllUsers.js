export const displayAllUsers = users => {
    const allUsersElem = document.querySelector('.users');
    allUsersElem.innerHTML = '';

    users.forEach(user => {
        allUsersElem.appendChild(displayUser(user));
    });
};

const displayUser = ({name, age, card, email}) => {
    const liElem = document.createElement('li');

    liElem.innerHTML = `Name: ${name}; Age: ${age}; Card: ${card}; Email: ${email}`;

    return liElem;
};
