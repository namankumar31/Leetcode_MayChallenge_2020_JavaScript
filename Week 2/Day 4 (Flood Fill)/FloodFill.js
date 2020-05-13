/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(!image || image.length === 0)
        return image;
    
    if(newColor == null)
        return image;
    
    if(sr == null || sc == null)
        return image;
    
    let originalColor = image[sr][sc];
    
    if(newColor === originalColor)
        return image;
    
    // Set the newColor to the given co-ordinate
    image[sr][sc] = newColor;
    
    // Fill top
    if(sr-1 >= 0 && image[sr-1][sc] === originalColor)
        floodFill(image,sr-1,sc,newColor);
    
    // Fill bottoom
    if(sr+1 < image.length && image[sr+1][sc] === originalColor)
        floodFill(image,sr+1,sc,newColor);
    
    // Fill left
    if(sc-1 >= 0 && image[sr][sc-1] === originalColor)
        floodFill(image,sr,sc-1,newColor);
    
    // Fill right
    if(sc+1 < image[0].length && image[sr][sc+1] === originalColor)
        floodFill(image,sr,sc+1,newColor);
    
    return image;
};
