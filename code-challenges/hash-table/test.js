const HashTable = require('./hash-table.js').default;
console.log('hello....', HashTable);
describe('this is a test', () => {
  it('is a test', () => {
    expect(true)
  })

});

describe('hashtable', () => {
  it('adds a value', () => {
    const myTable = new HashTable(1000);
    myTable.add({ key: 'tyler', value: 'is cool' })
    expect(myTable.find('tyler')).toBeTruthy();

  });

  it('finds the first collision', () => {
    const myTable = new HashTable(1000);
    const string1 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

    const arrayOfString1 = string1.toLowerCase().split(/\s|\.|\,|\-/).filter(word => word && word !== '-')
    arrayOfString1.forEach(word => {
      myTable.add({ key: word, value: 'value' })
    })

    expect( myTable.firstCollision).toEqual('it')
  })
});
