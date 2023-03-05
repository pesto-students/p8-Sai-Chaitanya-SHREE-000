class Graph {
    constructor() {
        this.adjList = new Map();
    };

    addVertex(value) {
        this.adjList.set(value, []);
    };

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    };

    getVertixes() {
        return this.adjList.keys();
    };

    getNeighbors(value) {
        return this.adjList.get(value);
    };

    getEdges() {
            const vertexes = this.getVertixes();
            for (let i of vertexes) {
                let edges = this.adjList.get(i);
                console.log(i, '--->', edges);
            };
    };

    bfs(startingNode = this.getVertixes().next().value) {
        let visited = {};
        let queue = [];
        visited[startingNode] = true;
        queue.push(startingNode);
        while(queue.length) {
            const getQueElem = queue.shift();
            console.log(getQueElem);
            const getList = this.adjList.get(getQueElem);
            for(let i of getList) {
                if(!visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                };
            };
        };
    };

    dfs(startingNode = this.getVertixes().next().value, visited = new Set()) {
        console.log(startingNode);
        visited.add(startingNode);
        const destinations = this.adjList.get(startingNode);
        for(let destination of destinations) {
            if(!visited.has(destination)) {
                visited.add(destination);
                this.dfs(destination, visited);
            };
        };
    };

    dfsStack(startingNode = this.getVertixes().next().value) {
        let stack = [];
        let visited = new Set();
        visited.add(startingNode);
        stack.push(startingNode);
        while(stack.length) {
            const getStackElem = stack.pop();
            const destinations = this.adjList.get(getStackElem);
            for(let destination of destinations) {
                if(!visited.has(destination)) {
                    visited.add(destination);
                    stack.push(destination);
                };
            };
            console.log(getStackElem, 'stack');
        };
    };

};

var g = new Graph();
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
 
g.dfs();
g.dfsStack();
