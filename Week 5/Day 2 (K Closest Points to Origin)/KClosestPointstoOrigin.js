/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let distance = [];
    
    for(let i=0; i<points.length; i++){
        let point = points[i];
        let x = point[0];
        let y = point[1];
        
        distance[i] = [Math.sqrt((x*x) + (y*y)), i];
    }
    
    distance.sort((a,b) => a[0]-b[0]);
    
    let result = [];
    for(let i=0; i<K; i++){
        let val = distance[i];
        result.push(points[val[1]]);
    }
    
    return result;
};
