const { Node, Tree, breadthFirst } = require('./breadth-first')

describe('breadthfirst() return null for a null tree ', () => {
  it('returns null', () => {
    const tree = new Tree()
    expect(breadthFirst(tree)).toEqual(null)
  })
});
describe('breadthfirst() return array of length 1 for a tree with only root. ', () => {
  it('returns 1', () => {
    const tree = new Tree(new Node(4))
    expect(breadthFirst(tree).length).toEqual(1)
  })
});
describe('breadthfirst() returns array breadth sorted ', () => {
  it('returns correct array', () => {
    const tree = new Tree(new Node(4, new Node(5, new Node(6)), new Node(7)))
    expect(breadthFirst(tree)).toEqual([4,5,7,6])
  })
});
describe('breadthfirst() works with nagative numbers and 0 numbers ', () => {
  it('returns 1', () => {
    const tree = new Tree(new Node(0, new Node(5, new Node(6)), new Node(-7)))
    expect(breadthFirst(tree)).toEqual([0,5,-7,6])
  })
});
