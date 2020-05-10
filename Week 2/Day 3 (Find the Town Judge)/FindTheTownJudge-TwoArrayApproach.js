/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // If there are N people, there must be at least N-1 trusts to be able to decide a town judge
    // i.e. If there are N Nodes, there should at least be N-1 edges to find a node with N-1 in-degree and 0 out-degree
    if(trust.length < N-1)
        return -1;
    
    // inDegree means other people trust me
    let inDegree = new Array(N+1);
    inDegree.fill(0);
    // outDegree means I trust other people
    let outDegree = new Array(N+1);
    outDegree.fill(0);
    
    for(let i=0; i<trust.length; i++){
        let [a,b] = trust[i];
        
        // a trust b, so a has an out-degree
        outDegree[a] += 1;
        
        // a trust b, so b has an in-degree
        inDegree[b] += 1;
    }
    
    // Parse through both inDegree and outDegree array
    // Find a person who has 0 outDegree value but N-1 inDegree value. That person is the town judge
    for(let i=1; i<inDegree.length; i++){
        if(outDegree[i] === 0 && inDegree[i] === N-1)
            return i;
    }
    
    return -1;
};
