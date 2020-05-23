/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let aPtr = 0;
    let bPtr = 0;
    
    let result = [];
    
    while(aPtr < A.length && bPtr < B.length){
        let startInterval = Math.max(A[aPtr][0], B[bPtr][0]);
        let endInterval = Math.min(A[aPtr][1], B[bPtr][1]);
        
        if(startInterval <= endInterval){
            result.push([startInterval, endInterval]);
        }
        
        if(A[aPtr][1] > B[bPtr][1])
            bPtr++;
        else
            aPtr++;
    }
    
    return result;
};
