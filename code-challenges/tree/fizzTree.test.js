const { fizzify, fizzBuzzTree, BinaryTree, Node } = require('./fizzTree')

describe('fizzify', () => {
  it('replaces correct nubmers with words', () => {
    expect(fizzify(15)).toEqual('Fizzbuzz')
    expect(fizzify(9)).toEqual('Fizz')
    expect(fizzify(5)).toEqual('Buzz')
    expect(fizzify(7)).toEqual('7')
  })
});

describe('fissBuzzTree', () => {
  it ('fizzifies a tree', () => {
    const tree = new BinaryTree(new Node(8, new Node(3, null, new Node(5)), new Node(10, null, new Node(15))))
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toEqual('8')
    expect(newTree.root.left.value).toEqual('Fizz')
    expect(newTree.root.left.right.value).toEqual('Buzz')
    expect(newTree.root.right.right.value).toEqual('Fizzbuzz')
  });
});