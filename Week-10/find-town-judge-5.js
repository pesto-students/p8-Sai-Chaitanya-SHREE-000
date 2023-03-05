const findJudge = (n, trustArr) => {
    let adjList = {};
    for(let trust of trustArr) {
        adjList[trust[0]] ? adjList[trust[0]].push(trust[1]) 
        : adjList[trust[0]] = [trust[1]];
    };
    const nonJudges = Object.keys(adjList);
    const total = Object.values(adjList).flat(2);
    let isJudge = true;
    for(let i = 0; i < total.length; i ++) {
        isJudge = true;
        for(let j = 0; j < nonJudges.length; j ++) {
            if(total[i] == nonJudges[j]) isJudge = false;
        };
        if(isJudge) return total[i];
    }
    return -1;
};

const n = 3;
const trust = [[1,2]];
// const n = 3;
// const trust = [[1,3],[2,3],[3,1]];
const result = findJudge(n, trust);
console.log(result);

