/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sLength = s.length;
    let pLength = p.length;
    
    if(sLength < pLength)
        return [];
    
    let result = [];
    
    let sCount = new Array(26);
    sCount.fill(0);
    
    let pCount = new Array(26);
    pCount.fill(0);
    
    let aCharCode = 'a'.charCodeAt(0);
    
    for(let i=0; i<pLength; i++){
        pCount[p.charAt(i).charCodeAt(0) - aCharCode] += 1;
    }
    
    for(let i=0; i<sLength; i++){
        sCount[s.charAt(i).charCodeAt(0) - aCharCode] += 1;
        
        if(i >= pLength)
            sCount[s.charAt(i-pLength).charCodeAt(0) - aCharCode] -= 1;
        
        if(JSON.stringify(sCount) === JSON.stringify(pCount))
            result.push(i-pLength + 1);
    }
    
    return result;
};
