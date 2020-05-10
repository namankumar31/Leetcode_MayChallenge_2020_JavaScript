/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num < 2)
        return true;
    
    let left = 2;
    let right = Math.floor(num/2);
    
    while(left <= right){
        let n = Math.floor(left + (right-left)/2);
        
        console.log(n);
        
        if(n*n === num)
            return true;
        
        if(n*n > num)
            right = n-1;
        else
            left = n+1;
    }
    
    return false;
};
