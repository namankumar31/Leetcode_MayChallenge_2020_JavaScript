/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let k = kadane(A);
    
    let cs = 0;
    
    for(let i=0; i<A.length; i++){
        cs += A[i];
        A[i] = -A[i];
    }
    cs = cs + kadane(A);
    
    if(cs > k && cs != 0)
        return cs;
    else
        return k;
};

function kadane(nums){
    let currSum = nums[0];
    let maxSum = nums[0];
    for(let i=1; i<nums.length; i++){
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}
