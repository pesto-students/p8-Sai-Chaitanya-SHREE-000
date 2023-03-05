const validPath = (n, edges, source, destination) => {
    let adjList = {};
    let visited = [];
    for(let edge of edges) {
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1])
        : adjList[edge[0]] = [edge[1]];
        adjList[edge[1]] ? adjList[edge[1]].push(edge[0])
        : adjList[edge[1]] = [edge[0]];
    };
    console.log(adjList);
    let stack = [];
    stack.push(source);
    visited.push(source);
    while(stack.length) {
        const current = stack.pop();
        const destinations = adjList[current];
        for(let dest of destinations) {
            if(dest === destination) return true;
            if(!visited[dest]) {
                visited.push(dest);
                stack.push(dest);
            };
        };
    };
    return false;
}; 


// const validPath = (n, edges, source, destination) => {
//     let firstSourcePair = null;
//     let secondSourceParir = null;
//     if(edges[0][0] === source) firstSourcePair = edges[0][1];
//     if(edges[0][1] === source) firstSourcePair = edges[0][0];
//     if(edges[1][0] === source) secondSourceParir = edges[1][1];
//     if(edges[1][1] === source) secondSourceParir = edges[1][0];
//     if(edges[edges.length - 1][0] === source) secondSourceParir = edges[edges.length - 1][1];
//     if(edges[edges.length - 1][1] === source) secondSourceParir = edges[edges.length - 1][0];
//     for(let i = 0; i < edges.length; i ++) {
//         for(let j = 0; j < edges[i].length; j ++) {
//             if(j === 0 && edges[i][0] === firstSourcePair && edges[i][1] !== source) 
//             firstSourcePair = edges[i][1];
//             if(j === 1 && edges[i][1] === firstSourcePair && edges[i][0] !== source) 
//             firstSourcePair = edges[i][0];
//             if(j === 0 && edges[i][0] === secondSourceParir && edges[i][1] !== source) 
//             secondSourceParir = edges[i][1];
//             if(j === 1 && edges[i][1] === secondSourceParir && edges[i][0] !== source) 
//             secondSourceParir = edges[i][0];
//             if(firstSourcePair === destination || secondSourceParir === destination) return true;
//         };
//     };
//     return false;
// };

// const n = 3;
// const edges = [[0,1],[1,2],[2,0]];
// const source = 0; 
// const destination = 2;
const n = 6; 
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]]; 
const source = 0;
const destination = 5;
const isPathExist = validPath(n, edges, source, destination);
console.log(isPathExist);