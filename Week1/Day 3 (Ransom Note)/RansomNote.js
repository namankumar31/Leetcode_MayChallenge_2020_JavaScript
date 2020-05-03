/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote == null || magazine == null)
        return false;
    
    if(ransomNote === "" && magazine === "")
        return true;
    
    let hashmap = new Map();
    
    for(let i=0;i<magazine.length;i++){
        let letterInMagazine = magazine.charAt(i);
        if(!hashmap.has(letterInMagazine))
            hashmap.set(letterInMagazine, 1);
        else
            hashmap.set(letterInMagazine, hashmap.get(letterInMagazine) + 1);
    }
    
    for(let i=0;i<ransomNote.length;i++){
        let letterInRansom = ransomNote.charAt(i);
        
        if(!hashmap.has(letterInRansom))
            return false;

        let letterCount = hashmap.get(letterInRansom);
        if(letterCount < 1)
            return false;

        hashmap.set(letterInRansom, letterCount - 1);
    }
    
    return true;
};
