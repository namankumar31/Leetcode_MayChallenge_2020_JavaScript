/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if(!num)
        return 0;
    
    let temp = num;
    let bit = 1;
    
    while(temp){
        // a. Perform XOR of each bit in num with 1
        // 1 ^ 0 = 1
        // 1 ^ 1 = 0
        num = num ^ bit;
        
        // b. Shift the bit to the left by 1 in order to XOR with each bit in num
        bit = bit << 1;
        
        /* c. Right shift temp 1 bit to the right till temp becomes all 0's
        Step c. is done to handle the case where the input number's binary representation may contain leading 0's
        For example, 5 may be represented as 0000101. Performing XOR of this bit representation will result in 
        output being 1111010. This result is incorrect. Therefore, as we keep right shifting temp by 1 bit till 
        all bits in temp become 0 */
        temp = temp >> 1;
    }
    
    // In the end, return the number
    return num;
};
