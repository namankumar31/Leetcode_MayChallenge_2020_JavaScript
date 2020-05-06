/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums == null)
        return 0;
    
    // <Number, Count>
    let hashmap = new Map();
    
    for(let i=0;i<nums.length;i++){
        let currentNumber = nums[i];
        
        if(hashmap.has(currentNumber)){
            let numberCount = hashmap.get(currentNumber);
            numberCount += 1;
            hashmap.set(currentNumber, numberCount);
        }
        else{
            hashmap.set(currentNumber, 1);
        }
    }
    
    let majorityElement = -1;
    let runningCount = 0;
    let appearsMoreThanCount = Math.floor(nums.length/2);
    for(let num of hashmap.keys()){
        let numberCount = hashmap.get(num);        
        
        if(numberCount > runningCount && numberCount > appearsMoreThanCount){
            majorityElement = num;
            runningCount = numberCount;
        }
    }
    
    return majorityElement;
};
