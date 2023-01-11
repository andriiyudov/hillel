const formConfig = [
    {
        tagName: 'input',
        attributes: {
            type: 'text',
            name: 'login',
            placeholder: 'Enter login...',
        }
    },
    {
        tagName: 'input',
        attributes: {
            type: 'password',
            name: 'pass',
            placeholder: 'qwertyu',
        }
    },
    {
        tagName: 'select',
        attributes: {name: 'role'},
        options: [
            { attributes: {value:'admin'}, content: 'Admin' },
            { attributes: {value:'user'}, content: 'User' },
        ],
    },
    {
        tagName: 'input',
        attributes: { type: 'button', value: 'Login' },
        handlers: {},
    }
];

