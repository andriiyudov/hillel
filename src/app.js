const person1 = new Person('Sam', 20);
const person2 = new Person('Cindy', 33);
const person3 = new Person('Guy', 30);

const appart1 = new Apartment(3, [person1, person2]);
const appart2 = new Apartment(1, [person3]);

const house = new House('Address of the house', 5, [appart1, appart2]);

console.log(house);
