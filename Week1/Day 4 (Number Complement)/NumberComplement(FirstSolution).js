/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if(!num)
        return 0;
    
    // Convert the number to its binary representation. There will be no leading 0's in the result
    let numBinary = num.toString(2);
    // We will save the flipped bits in a separate variable
    let flippedNum = "";
    
    // Parse through each bit in numBinary and invert each bit
    for(let i=0;i<numBinary.length;i++){
        flippedNum += numBinary.charAt(i) === '0' ? '1' : '0';
    }
    
    // Parse the flippedNum binary representation into its integer form
    return parseInt(flippedNum,2);
};
