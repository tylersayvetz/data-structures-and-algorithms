
export interface GraphNode {
  value: number | string
  edges: Array<GraphEdge>
}

export interface GraphEdge {
  weight: number
  to: GraphNode
}

export default class Graph {
  nodes: Array<GraphNode>
  constructor() {
    this.nodes = [];
  }

  addNode(value: number | string) {
    const newNode: GraphNode = { value: value, edges: [] }
    this.nodes.push(newNode)
    return newNode
  }

  addEdge(weight: number, from: GraphNode, to: GraphNode) {
    if (this.nodes.find(node => node === from) !== undefined &&
      this.nodes.find(node => node === to) !== undefined) 
    {
      from.edges.push({ weight, to })
    }
  }

  getNodes() {
    return [...this.nodes];
  }

  getNeighbors(node: GraphNode) {
    const found = this.nodes.find(item => item === node);
    if (found !== undefined) {
      return found.edges.map(edge => this.nodes.find(node => node === edge.to))
    } else {
      return null;
    }
  }

  size() {
    return this.nodes.length;
  }
}


//add nodes
const myGraph = new Graph();
const a = myGraph.addNode('a')
const b = myGraph.addNode('b')
const c = myGraph.addNode('c')
const d = myGraph.addNode('d')
const e = myGraph.addNode('e')
const f = myGraph.addNode('f')

//add edges
myGraph.addEdge(10, a, b)
myGraph.addEdge(4, b, c)
myGraph.addEdge(4, b, d)
myGraph.addEdge(6, c, d)
myGraph.addEdge(7, c, e)
myGraph.addEdge(3, d, e)
myGraph.addEdge(8, e, f)
myGraph.addEdge(6, f, c)



console.log(myGraph.size());

console.log(BFS(a));

//perform a breadth first traversal of a graph. 
//input - a starting node.
//output - a list of all of the nodes that were visited, in the order they were visited. 


export function BFS (node: GraphNode) {
  const visited = new Set()
  const queue : Array<GraphNode> = [node];
  
  while (queue.length !== 0 ) {
  //define current/... 
  const current: GraphNode = queue.shift()!;
  //add the current to the visited
  visited.add(current)
  //for every edge
    for( let edge of current.edges) {
      //if the edge has a 'to' that we havent been to....
      if (edge.to && !visited.has(edge.to)) {  
          //push the 'to' node to the queue of places to go.
          queue.push(edge.to)
      }
    }
  }
  return visited
}