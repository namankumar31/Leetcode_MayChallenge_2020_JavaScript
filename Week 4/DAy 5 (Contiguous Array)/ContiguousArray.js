/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    if(!nums || nums.length === 0)
        return 0;
    
    let count = 0;
    let maxLength = 0;
    let hashMap = new Map();
    hashMap.set(0,-1);
    
    for(let i=0;i<nums.length;i++){
        count = count + (nums[i] === 1 ? 1 : -1);
        
        if(hashMap.has(count)){
            maxLength = Math.max(maxLength, i - hashMap.get(count));
        }
        else{
            hashMap.set(count, i);
        }
    }
    
    return maxLength;
};
