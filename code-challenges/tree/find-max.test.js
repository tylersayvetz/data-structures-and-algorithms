const { Tree, Node } = require('./find-max')

describe('findMax', () => {
  const tree = new Tree(new Node(1, new Node(20, new Node(21, new Node(4), new Node(5)))));
  const tree2 = new Tree(new Node(-9, new Node(-900, new Node(0, new Node(-1), new Node(-2)))));
  const tree3 = new Tree();
  it ('finds the max value, negative and positive numbers.', () => {
    expect(tree.findMax()).toEqual(21);
    expect(tree2.findMax()).toEqual(0);
  });
  
  it('returns null on an empty tree', () => {
    expect(tree3.findMax()).toEqual(null)
  })
});