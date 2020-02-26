"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ANIMAL_TYPE = {
    DOG: 'DOG',
    CAT: 'CAT'
};
class AnimalShelter {
    constructor() {
        this.catStorage = [];
        this.dogStorage = [];
    }
    enqueue(type) {
        switch (type) {
            case 'cat':
                this.catStorage.push(new Cat());
                this.ageAllAnimals();
                break;
            case 'dog':
                this.dogStorage.push(new Dog());
                this.ageAllAnimals();
                break;
            default:
                console.log('Need `cat` or `dog` please');
        }
    }
    dequeue(type) {
        let adopted;
        switch (type) {
            case 'cat':
                adopted = this.catStorage.shift();
                this.ageAllAnimals();
                break;
            case 'dog':
                adopted = this.dogStorage.shift();
                this.ageAllAnimals();
                break;
            default:
                console.log('Need `cat` or `dog` please');
                return null;
        }
        return adopted;
    }
    ageAllAnimals() {
        this.catStorage.forEach(animal => animal.getOlder());
        this.dogStorage.forEach(animal => animal.getOlder());
    }
}
exports.AnimalShelter = AnimalShelter;
class Animal {
    constructor(age = 0) {
        this.age = age;
    }
    getOlder() {
        return ++this.age;
    }
}
exports.Animal = Animal;
class Cat extends Animal {
    constructor(age = 0) {
        super(age);
        this.type = ANIMAL_TYPE.CAT;
    }
}
exports.Cat = Cat;
class Dog extends Animal {
    constructor(age = 0) {
        super(age);
        this.type = ANIMAL_TYPE.DOG;
    }
}
exports.Dog = Dog;
const shelter = new AnimalShelter();
shelter.enqueue('dog');
shelter.enqueue('dog');
console.log(shelter.dogStorage);
//# sourceMappingURL=fifo-animal-shelter.js.map