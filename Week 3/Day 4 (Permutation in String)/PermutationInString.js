/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Length = s1.length;
    let s2Length = s2.length;
    
    if(s2Length < s1Length)
        return [];
    
    let s2Count = new Array(26);
    s2Count.fill(0);
    
    let s1Count = new Array(26);
    s1Count.fill(0);
    
    let aCharCode = 'a'.charCodeAt(0);
    
    for(let i=0; i<s1Length; i++){
        s1Count[s1.charAt(i).charCodeAt(0) - aCharCode] += 1;
    }
    
    for(let i=0; i<s2Length; i++){
        s2Count[s2.charAt(i).charCodeAt(0) - aCharCode] += 1;
        
        if(i >= s1Length)
            s2Count[s2.charAt(i-s1Length).charCodeAt(0) - aCharCode] -= 1;
        
        if(JSON.stringify(s2Count) === JSON.stringify(s1Count))
            return true;
    }
    
    return false;
};
