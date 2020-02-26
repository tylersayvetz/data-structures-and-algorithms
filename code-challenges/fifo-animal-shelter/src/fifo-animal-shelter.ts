//interfaces
export interface AnimalShelter {
  catStorage: Animal[];
  dogStorage: Animal[];
}

export interface Animal {
  age: number;
  next: Animal | null;
  type: string;
}

const ANIMAL_TYPE = {
  DOG: 'DOG',
  CAT: 'CAT'
}


//shelter (actually just a queue)
export class AnimalShelter {
  constructor() {
    this.catStorage = [];
    this.dogStorage = [];
  }

  enqueue(type: string) {
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
        console.log('Need `cat` or `dog` please')
    }
  }

  dequeue(type: string): Animal | null {
    let adopted: Animal;
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
        console.log('Need `cat` or `dog` please')
        return null;
    } 
    return adopted;

  }

  ageAllAnimals () {
    this.catStorage.forEach(animal => animal.getOlder())
    this.dogStorage.forEach(animal => animal.getOlder())
  }
}

//parent class (actually just a node)
export class Animal {
  constructor(age: number = 0) {
    this.age = age;
  }

  getOlder(): number {
    return ++this.age;
  }
}

//child classes
export class Cat extends Animal {
  constructor(age: number = 0) {
    super(age)
    this.type = ANIMAL_TYPE.CAT;
  }
}

export class Dog extends Animal {
  constructor(age: number = 0) {
    super(age)
    this.type = ANIMAL_TYPE.DOG;
  }
}

const shelter = new AnimalShelter();
shelter.enqueue('dog');
shelter.enqueue('dog');
console.log(shelter.dogStorage);
