class Garage {
    constructor(countOfFreeSpace, owner, cars) {
        this.countOfFreeSpace = countOfFreeSpace;
        this.owner = owner;
        this.cars = Garage.ifUserCanPutHisCarsIntoGarage(cars, countOfFreeSpace);
    }

    getGarageInfo() {
        this.owner.getPersonInfo();
        this.cars.forEach(car => {
            car.getCarInfo();
        })
    }

    static ifUserCanPutHisCarsIntoGarage(cars, countOfFreeSpace) {
        if (cars.length > countOfFreeSpace) {
            cars.splice(countOfFreeSpace, 1);

            return cars;
        }
        return cars;
    }
}

