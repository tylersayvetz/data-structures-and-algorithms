# Graphs
A graph is a very useful data structure. It is a tree with no guarantee that there wont be a cycle. Nodes 'lower down' on the tree can reference nodes higher up as their 'next' or a 'neighbor'


## Challenge
Implement a generic graph. Write some common prototype methods for getting all nodes, getting neighbors of a node, etc. 


## Approach & Efficiency
I chose to implement this in TS. It is a good challenge for me and it helps me develop more useful skills. 
The approach I took was to use an interface to define the shape of the node and the edge, and a class to define the graph itself. 

The class has a prototype function for each of the required feature tasks. 

getNodes() and getNeighbors() both return copies of the data they are referenceing. This prevents people from being able to manipulate the graph from outside. 


## API

    getNodes(): Array<GraphNode> --> { value: number, edges: Array<GraphNode> }

    getNeighbors(GraphNode): Array<GraphNode>

    addEdge(weight: number, from: GraphNode, to: GraphNode): void --> graphEdge: { weight: number, to: GraphNode }

    addNode(value: number): GraphNode --> returns a copy of the node that was added

    size(): number --> returns the number of nodes in the graph.


![diagram here..]()
