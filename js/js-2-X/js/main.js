class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }

    drive() {
        console.log(`Vehicle with the ${this.wheels} wheels is moving...`);
    }
}

class Car extends Vehicle {
    constructor(colour, wheels) {
        super(wheels ? wheels : 4);
        this.colour = colour;
    }

    drive() {
        super.drive();
        console.log(`It is a ${this.colour} car!!!`);
    }
}

const redCar = new Car("red");
redCar.drive();

const blueDemon = new Car("blue", 8);
blueDemon.drive();

