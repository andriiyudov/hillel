class Person {
    constructor(name, age, cars) {
        this.name = name;
        this.age = age;
    }

    getPersonInfo() {
        const name = this.getName();
        const age = this.getAge();

        console.log(`Name is ${name}. Age is ${age}`);
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
