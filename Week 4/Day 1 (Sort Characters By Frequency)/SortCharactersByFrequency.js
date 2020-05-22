/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hashmap = {};
    let result = "";
    
    let sArr = s.split('');
        
    for(let i=0; i<sArr.length; i++){
        if(!hashmap[sArr[i]])
            hashmap[sArr[i]] = 1;
        else
            hashmap[sArr[i]] += 1;
    }
    
    let sortedMap = Object.keys(hashmap).sort((a,b) => hashmap[b] - hashmap[a]);
    
    sortedMap.forEach((val) => {
        for(let i=0; i<hashmap[val]; i++){
            result += val;
        }
    });
    
    return result;
};
