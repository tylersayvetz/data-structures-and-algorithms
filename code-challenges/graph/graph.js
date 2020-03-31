"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.nodes = [];
    }
    addNode(value) {
        const newNode = { value: value, edges: [] };
        this.nodes.push(newNode);
        return newNode;
    }
    addEdge(weight, from, to) {
        if (this.nodes.find(node => node === from) !== undefined &&
            this.nodes.find(node => node === to) !== undefined) {
            from.edges.push({ weight, to });
        }
    }
    getNodes() {
        return [...this.nodes];
    }
    getNeighbors(node) {
        const found = this.nodes.find(item => item === node);
        if (found !== undefined) {
            return found.edges.map(edge => this.nodes.find(node => node === edge.to));
        }
        else {
            return null;
        }
    }
    size() {
        return this.nodes.length;
    }
}
exports.default = Graph;
// const myGraph = new Graph();
// const six = myGraph.addNode(6)
// const ten = myGraph.addNode(10)
// myGraph.addEdge(1, six, ten)
// // console.log(six, ten)
// console.log(myGraph.getNodes());
// console.log(myGraph.size());
