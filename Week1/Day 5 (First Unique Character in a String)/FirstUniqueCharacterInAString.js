/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(!s || s.length ===0)
        return -1;
    
    // <Character, index>
    let hashmap = new Map();
    
    for(let i=0;i<s.length;i++){
        let char = s.charAt(i);
        if(!hashmap.has(char))
            hashmap.set(char,i);
        else
            hashmap.set(char,-1);
    }
    
    for(let key of hashmap.keys()){
        if(hashmap.get(key) !== -1)
            return hashmap.get(key);
    }
    
    return -1;
};
