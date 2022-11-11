export default class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname
    }

    greeting() {
        return `Hello! I'm ${this._name} ${this._surname}`;
    }
}
