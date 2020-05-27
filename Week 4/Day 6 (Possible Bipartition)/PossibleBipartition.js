/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    let dislikeMap = new Map();
    
    for(let key in dislikes){
        let a = dislikes[key][0];
        let b = dislikes[key][1];
        
        if(dislikeMap.has(a)){
            let aDis = dislikeMap.get(a);
            aDis.push(b);
            dislikeMap.set(a, aDis);
        }
        else{
            dislikeMap.set(a, [b]);
        }
        
        if(dislikeMap.has(b)){
            let bDis = dislikeMap.get(b);
            bDis.push(a);
            dislikeMap.set(b, bDis);
        }
        else{
            dislikeMap.set(b, [a]);
        }
    }
    
    let seen = new Map();
    let stack = [];
    
    for(let i=1; i<=N; i++){
        if(!seen.has(i)){
            seen.set(i, 0);
            
            stack.push(i);
            
            while(stack.length > 0){
                let a = stack.pop();
                
                if(dislikeMap.has(a)){
                    let bValues = dislikeMap.get(a);
                    
                    for(let b=0; b<bValues.length; b++){
                        let val = bValues[b];
                        
                        if(seen.has(val)){
                            if(seen.get(a) === seen.get(val))
                                return false;
                        }
                        else{
                            seen.set(val, (parseInt(seen.get(a))+1)%2);
                            stack.push(val);
                        }
                    }
                }
            }
        }
    }
    
    return true;
};
