'use strict';

const deepClone = obj => {
    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            newObj[key] = obj[key];
        } else {
            newObj[key] = deepClone(obj[key]);
        }
    }

    return newObj;
};

const user1 = {
    name: 'John',
    age: 5,
    parents: [{name: 'Cindy'}, {name: 'Guy'}],
    a: {value: 1},
    like: ['sport', 'reading']
};

const user2 = deepClone(user1);

user2.name = 'Bill';
user2.parents[0].name = 'Marta';

console.log(user1)
console.log(user2)
