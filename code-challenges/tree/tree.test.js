const { BinaryTree, Node } = require('./tree')

describe('Tree', () => {
  describe('Instantiate new tree', () => {
    it('new tree should have root null', () => {
      const tree = new BinaryTree();
      expect(tree.root).not.toBeUndefined();
    });
    it('new tree with single node', () => {
      const node = new Node(5)
      const tree = new BinaryTree(node)
      expect(tree.root).toEqual(node);
    });
  });

  describe('Various traversals', () => {
    describe('With populated tree', () => {
      const myTree = new BinaryTree(new Node('R', new Node('a'), new Node('b', new Node('c', new Node('d'), new Node('e')))));
      it('preOrder()', () => {
        expect(myTree.preOrder()).toEqual(['R', 'a', 'b', 'c', 'd', 'e'])
      });
      it('inOrder()', () => {
        expect(myTree.inOrder()).toEqual(['a', 'R', 'd', 'c', 'e', 'b']);
      });
      it('postOrder()', () => {
        expect(myTree.postOrder()).toEqual(['a', 'd', 'e', 'c', 'b', 'R'])
      });
    });
    describe('Without populated tree', () => {
      const myTree = new BinaryTree();
      it('preOrder()', () => {
        expect(myTree.preOrder()).toEqual([])
      });
      it('inOrder()', () => {
        expect(myTree.inOrder()).toEqual([])
      });
      it('postOrder()', () => {
        expect(myTree.inOrder()).toEqual([])
      });
    });
  })

  describe('Add nodes', () => {
    const myTree = new BinaryTree();
    it('can add a node', () => {
      myTree.add(5)
      expect(myTree.root.value).toEqual(5)
    })
    it('can add nodes in the correct location', () => {
      myTree.add(2);
      expect(myTree.root.left.value).toEqual(2)
      myTree.add(4);
      expect(myTree.root.left.right.value).toEqual(4)
      myTree.add(26);
      expect(myTree.root.right.value).toEqual(26)
      myTree.add(15);
      expect(myTree.root.right.left.value).toEqual(15)
    });
    it('will not add node that already exists', () => {
      expect(myTree.postOrder().length).toEqual(5)
      myTree.add(5);
      myTree.add(26)
      expect(myTree.postOrder().length).toEqual(5);

    });

  });

  describe('Contains nodes? ', () => {
    const myTree = new BinaryTree(new Node(10, new Node(9), new Node(20, new Node(15, new Node(12), new Node(17)))));
    it ('find a node that exists', () => {
      expect(myTree.contains(9)).teBeTruthy;
    });
    it ('wont find a node that doesnt exist', () => {
      expect(myTree.contains(8888)).toBeFalsy;
    });

    it ('will reject non number inputs', () => {
      expect(myTree.contains('hi')).toBeFalsy;
    });
  });
});