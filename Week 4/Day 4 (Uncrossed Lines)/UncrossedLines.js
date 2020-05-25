/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    if(A == null || B == null)
        return 0;
    
    let dp = [];
    dp.length = A.length + 1;
    dp.fill(0);
    for(let i=0;i<dp.length;i++){
        dp[i] = [];
        dp[i].length = B.length + 1;
        dp[i].fill(0);
    }
    
    for(let r = A.length - 1; r >= 0; r--){
        for(let c = B.length - 1; c >=0; c--){
            if(A[r] === B[c]){
                dp[r][c] = 1 + dp[r+1][c+1];
            }
            else{
                dp[r][c] = Math.max(dp[r+1][c], dp[r][c+1]);
            }
        }
    }
    
    return dp[0][0];
};
