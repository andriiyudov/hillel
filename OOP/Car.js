class Car {
    constructor(model, speed, typeOfEngine) {
        this.model = model;
        this.speed = speed;
        this.typeOfEngine = typeOfEngine;
        this.owner = null;
    }

    getCarInfo() {
        const {model, speed, typeOfEngine, owner} = this;

        console.log(`
            Model is: ${model}
            Max speed is: ${speed}
            Type of Engine: ${typeOfEngine}
        `);
        if (owner) {
            owner.getPersonInfo();
        } else {
            console.log('Car doent have owner');
        }
    }

    setOwner(owner) {
        this.owner = owner;
    }
}
