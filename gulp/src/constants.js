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
