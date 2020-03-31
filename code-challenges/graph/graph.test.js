const Graph = require('./graph.js')
const { GraphNode, GraphEdge } = require('./graph.js')

//set up a graph
let graph = new Graph.default();

//clear out the graph before each test
beforeEach(() => {
  graph = new Graph.default();
})

describe('Graph', () => {
  it('instantiates a graph class', () => {
    expect(graph).toBeDefined();
  });
  it('Can add a node to the graph, returns the new node.', () => {
    expect(graph.addNode(6)).toEqual({ value: 6, edges: [] })
    expect(graph.nodes.length).toEqual(1)
  });
  it('Can add an edge between two nodes', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] }
    graph.nodes.push(one, two)

    graph.addEdge(4, one, two)

    expect(graph.nodes[0].edges[0].weight).toEqual(4)
    expect(graph.nodes[0].edges[0].to).toEqual(two)
  });
  it('GetNodes returns a *COPY* of all of the nodes. Not a reference.', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] }
    graph.nodes.push(one, two)

    const answer = graph.getNodes()
    expect(answer.length).toEqual(2)
    answer[1] = 'foof'
    expect(graph.nodes[1]).not.toEqual('foof')
  });
  it('getNeighbors() returns a copy of a list of the node`s direct connections', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] };
    const three = { value: 12, edges: [] };
    graph.nodes.push(one, two, three)

    one.edges.push({ weight: 4, to: two })
    one.edges.push({ weight: 1, to: three })

    const answer = graph.getNeighbors(one)
    expect(answer).toEqual([two, three])

    //alter the answer
    answer[1] = 'foof';
    expect(one.edges[1]).not.toEqual('foof')
  });
  it('Size() returns the number of nodes in the graph. Not affected by edges.', () => {
    const one = { value: 7, edges: [] };
    const two = { value: 10, edges: [] };
    const three = { value: 12, edges: [] };
    graph.nodes.push(one, two, three)

    expect(graph.size()).toEqual(3)
    graph.addEdge(6, two, three)
    expect(graph.size()).toEqual(3)
  });
})

