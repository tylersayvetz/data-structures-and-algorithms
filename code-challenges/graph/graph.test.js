const Graph = require('./graph.js');
const { GraphNode, GraphEdge, BFS, possibleTrip, DFS } = require('./graph.js');

//set up a graph
let graph = new Graph.default();

//clear out the graph before each test
beforeEach(() => {
  graph = new Graph.default();
});

describe('Graph', () => {
  it('instantiates a graph class', () => {
    expect(graph).toBeDefined();
  });
  it('Can add a node to the graph, returns the new node.', () => {
    expect(graph.addNode(6)).toEqual({ value: 6, edges: [] });
    expect(graph.nodes.length).toEqual(1);
  });
  it('Can add an edge between two nodes', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] };
    graph.nodes.push(one, two);

    graph.addEdge(4, one, two);

    expect(graph.nodes[0].edges[0].weight).toEqual(4);
    expect(graph.nodes[0].edges[0].to).toEqual(two);
  });
  it('GetNodes returns a *COPY* of all of the nodes. Not a reference.', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] };
    graph.nodes.push(one, two);

    const answer = graph.getNodes();
    expect(answer.length).toEqual(2);
    answer[1] = 'foof';
    expect(graph.nodes[1]).not.toEqual('foof');
  });
  it('getNeighbors() returns a copy of a list of the node`s direct connections', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] };
    const three = { value: 12, edges: [] };
    graph.nodes.push(one, two, three);

    one.edges.push({ weight: 4, to: two });
    one.edges.push({ weight: 1, to: three });

    const answer = graph.getNeighbors(one);
    expect(answer).toEqual([two, three]);

    //alter the answer
    answer[1] = 'foof';
    expect(one.edges[1]).not.toEqual('foof');
  });
  it('Size() returns the number of nodes in the graph. Not affected by edges.', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] };
    const three = { value: 12, edges: [] };
    graph.nodes.push(one, two, three);

    expect(graph.size()).toEqual(3);
    graph.addEdge(6, two, three);
    expect(graph.size()).toEqual(3);
  });

  describe('BFS()', () => {
    const a = graph.addNode('a');
    const b = graph.addNode('b');
    const c = graph.addNode('c');
    const d = graph.addNode('d');
    const e = graph.addNode('e');
    const f = graph.addNode('f');

    //add edges
    graph.addEdge(10, a, b);
    graph.addEdge(4, b, c);
    graph.addEdge(4, b, d);
    graph.addEdge(6, c, d);
    graph.addEdge(7, c, e);
    graph.addEdge(3, d, e);
    graph.addEdge(8, e, f);
    graph.addEdge(6, f, c);

    it('returns the nodes, in BFS order.', () => {
      const result = BFS(a);
      expect(result).toBeDefined();
      const assertion = ['a', 'b', 'c', 'd', 'e', 'f'];
      let i = 0;
      result.forEach((key, value, set) => {
        expect(key.value).toEqual(assertion[i]);
        i++;
      });
    });
  });

  describe('possibleTrip', () => {
    const a = graph.addNode('a');
    const b = graph.addNode('b');
    const c = graph.addNode('c');
    const d = graph.addNode('d');
    const e = graph.addNode('e');
    const f = graph.addNode('f');

    //add edges
    graph.addEdge(10, a, b);
    graph.addEdge(4, b, c);
    graph.addEdge(4, b, d);
    graph.addEdge(6, c, d);
    graph.addEdge(7, c, e);
    graph.addEdge(3, d, e);
    graph.addEdge(8, e, f);
    graph.addEdge(6, f, c);

    it('returns the cost of a possible trip', () => {
      expect(possibleTrip([a, b])).toEqual('True 10');
      expect(possibleTrip([a, b, d, e, f, c, e])).toEqual('True 38');
    });

    it('returns false of a trip that isnt possible', () => {
      expect(possibleTrip([a, c])).toEqual('False 0');
      expect(possibleTrip([f, e])).toEqual('False 0');
    });
    it('rejects an invalid trip', () => {
      expect(possibleTrip([])).toEqual(null);
      expect(possibleTrip([a])).toEqual(null);
    });
  });

  describe('DFS', () => {
    const a = graph.addNode('a');
    const b = graph.addNode('b');
    const c = graph.addNode('c');
    const d = graph.addNode('d');
    const e = graph.addNode('e');
    const f = graph.addNode('f');

    //add edges
    graph.addEdge(10, a, b);
    graph.addEdge(4, b, c);
    graph.addEdge(4, b, d);
    graph.addEdge(6, c, d);
    graph.addEdge(7, c, e);
    graph.addEdge(3, d, e);
    graph.addEdge(8, e, f);
    graph.addEdge(6, f, c);
    it('searches a graph, starting at a supplied root', () => {
      expect(DFS(graph, a)).toBeDefined();
      const result = DFS(graph, a);
      for (let entry of result.entries()) {
        expect(entry.length).toEqual(2);
      }
    });
  });
});
