/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        
        while(left < right){
            let versionToCheck = parseInt(left+ ((right - left) / 2));
            let checkBadVersion = isBadVersion(versionToCheck);
            
            if(checkBadVersion) {
                right = versionToCheck;
            }
            else {
                left = versionToCheck + 1;
            }
        }
        
        return left;
    };
};
