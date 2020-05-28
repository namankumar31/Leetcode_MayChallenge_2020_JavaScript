/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let result = [];
    result.length = num+1;
    result[0] = 0;
    
    for(let i=1; i<=num; i++){
         // even
        if(i%2 === 0){
            result[i] = result[parseInt(i/2)];
        }
        // odd
        else{
            result[i] = result[parseInt(i/2)] + 1;
        }
    }
    
    return result;
};
