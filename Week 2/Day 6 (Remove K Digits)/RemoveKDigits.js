/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];    
    
    for(let i=0; i<num.length; i++){
        while(k>0 && stack.length > 0 && stack[stack.length-1] > num.charAt(i)){
            stack.pop();
            k--;
        }
        stack.push(num.charAt(i));
    }
    
    while(k>0){
        stack.pop();
        k--;
    }
        
    let resultStr = stack.join("").replace(/^0+/,'');;    
    return resultStr != "" ? resultStr : "0";
};
