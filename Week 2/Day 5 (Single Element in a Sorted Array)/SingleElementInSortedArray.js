/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(!nums || nums.length === 0){
        return -1;
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        let midPoint = left + (right-left)/2;
        let midPointHasEvenNumberBothSides = (right-midPoint)% 2 === 0;
        
        if(midPointHasEvenNumberBothSides){
            // Midpoint matches element to the right, search on the right side
            // because that side now has odd number of values
            if(nums[midPoint] === nums[midPoint+1]){
                left = midPoint + 2;
            }
            // Midpoint matches element to the left, search on the left side
            // because that side now has odd number of values
            else if(nums[midPoint] === nums[midPoint-1]){
                right = midPoint - 2;
            }
            else{
                return nums[midPoint];
            }
        }
        else{
            // Midpoint matches element to the right, search on the left side
            // because that side now has odd number of values
            if(nums[midPoint] === nums[midPoint+1]){
                right = midPoint - 1;
            }
            // Midpoint matches element to the left, search on the right side
            // because that side now has odd number of values
            else if(nums[midPoint] === nums[midPoint-1]){
                left = midPoint + 1;
            }
            else{
                return nums[midPoint];
            }
        }
    }
    
    return nums[left];    
};
