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
    
    // Generate a trustScore array
    // For a given trust [a,b] in the original trust array:
    //      1. Since a is trusting b, a's trust score will decrement by 1
    //      2. Since be is being trusted by a, b's trust score will increment by 1
    let trustScore = new Array(N+1);
    trustScore.fill(0);
    
    for(let i=0; i<trust.length; i++){
        let [a,b] = trust[i];
        
        trustScore[a] -= 1;
        trustScore[b] += 1;
    }    
    
    // Find the element with trustScore = N-1 and that is your Town Judge
    for(let i=1; i<trustScore.length; i++){
        if(trustScore[i] === N-1)
            return i;
    }
    
    return -1;
};
