/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    if(!J || !S)
        return 0;
    
    let jewels = new Map();
    let stonesAreJewels = 0;
    
    for(let item of J){
        if(!jewels.has(item))
            jewels.set(item, 1);
    }
    
    for(let i=0;i<S.length;i++){
        if(jewels.has(S.charAt(i)))
            stonesAreJewels += 1;
    }
    
    return stonesAreJewels;
};
