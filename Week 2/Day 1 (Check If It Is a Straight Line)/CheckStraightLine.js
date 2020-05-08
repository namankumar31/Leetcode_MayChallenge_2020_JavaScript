/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(!coordinates)
        return false;
    
    // If there are less than 2 co-ordinates, there can never be a line
    if(coordinates.length < 2)
        return false;
    
    // If there are only two co-ordinates, the line between them will always be straight
    if(coordinates.length === 2)
        return true;
    
    // Find the slope between the first two co-ordinates
    let xDiff = coordinates[1][0] - coordinates[0][0];
    let yDiff = coordinates[1][1] - coordinates[0][1];
    let slope = yDiff / xDiff;
    
    // In order for all the co-ordinates to be on a straight line, the slope between each co-ordinate and the first co-ordinate should be the same as the slope between the 2nd and 1st co-ordinate
    for(let i=2; i<coordinates.length; i++){
        yDiff = coordinates[i][1] - coordinates[0][1];
        xDiff = coordinates[i][0] - coordinates[0][0];
        if(yDiff/xDiff !== slope)
            return false;
    }
    
    return true;
};
