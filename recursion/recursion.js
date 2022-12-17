const users = [
    {
        id: 1,
        name: 'John',
        users: [
            {
                id: 2,
                name: 'Another John'
            },
            {
                id: 3,
                name: 'Robert',
                users: [
                    {
                        id: 4,
                        name: 'James',
                        users: [
                            {
                                id: 5,
                                name: 'Michael'
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 6,
        name: 'David'
    },
    {
        id: 7,
        name: 'William',
        users: [
            {
                id: 8,
                name: 'Richard'
            },
            {
                id: 9,
                name: 'Joseph'
            },
            {
                id: 10,
                name: 'Thomas'
            }
        ]
    },
]

const result = [];

const getAllUsers = (users) => {
    for (let i = 0; i <= users.length - 1; i++) {
        const user = users[i];

        result.push(user);

        if (user.users) {
            getAllUsers(user.users);
        }
    }
};
getAllUsers(users);

console.log(users);
console.log(result);
