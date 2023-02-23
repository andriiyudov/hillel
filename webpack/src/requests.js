const URL = 'http://localhost:3000/users';

export const saveUser = user => (
    fetch(
        URL,
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
        })
);

export const getUsers = () => (
    fetch(URL)
        .then(res => res.json())
);
