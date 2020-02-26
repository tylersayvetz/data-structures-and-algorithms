const { AnimalShelter, Dog, Cat } = require('./dist/fifo-animal-shelter');

describe('Animal', () => {
  describe('Can instantiate', () => {
    const myDog = new Dog()
    it('makes a new animal', () => {
      expect(myDog.age).not.toBeUndefined();
    })
  })
})

describe('AnimalShelter', () => {
  describe('Can isntantiate', () => {
    const myShelter = new AnimalShelter();
    it('makes a new shelter', () => {
      expect(myShelter.catStorage).not.toBeUndefined();
    })

  })
  describe('enqueue()', () => {
    const myShelter = new AnimalShelter();
    it('can put an animal in the queue', () => {
      myShelter.enqueue('dog');
      expect(myShelter.dogStorage[0].age).toEqual(1)
    })
    it('does not put a non-cat/dog in the queue. queue gets longer for cats/dogs', () => {
      myShelter.enqueue('marmot');
      expect(myShelter.dogStorage.length).toEqual(1)
      expect(myShelter.catStorage.length).toEqual(0)
    })
    it('the animals get older', () => {
      expect(myShelter.dogStorage[0].age).toEqual(1)
    })
  })

})
  describe('dequeue()', () => {
    const myShelter = new AnimalShelter();
    myShelter.dogStorage[0] = new Dog();
    myShelter.catStorage[0] - new Cat();
    it('can remove an animal from the front of the queue', () => {
      myShelter.dequeue('cat');
      expect(myShelter.catStorage.length).toEqual(0);
    })
    it('wont remove a non - cat/dog', () => {
      myShelter.dequeue('marmot')
      expect(myShelter.dogStorage.length).toEqual(1);
    })

    //could also test that the animals arent getting older, but I see that this is already hapeneing. 
    it('reutrns null for an empty shelter', () => {
      myShelter.dequeue('cat');
      expect(myShelter.catStorage.length).toEqual(0)
    })
  })
