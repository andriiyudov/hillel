const person1 = new Person('Person1', 18);
const person2 = new Person('Person2', 22);

const car1 = new Car('Model 1', 100, 'petrol');
const car2 = new Car('Model 2', 120, 'petrol');
const car3 = new Car('Model 3', 130, 'petrol');
const car4 = new Car('Model 4', 140, 'petrol');

car1.setOwner(person1);
car2.setOwner(person1);
car3.setOwner(person1);
car4.setOwner(person2);

const garage1 = new Garage(3, person1, [car1, car2, car3]);
const garage2 = new Garage(1, person2, [car4]);

garage1.getGarageInfo();
garage2.getGarageInfo();
