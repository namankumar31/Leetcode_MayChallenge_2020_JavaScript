/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    /*Depth First Search
      1. For each node, check if it matches x or y (passed through xinfo or yinfo calls)
      2. If the node is either x or y, return the depth and parent
      3. If the node is neither x nor y, recurse through the tree and get depth first search of node's left and right children
      4. In the end, return result of either left or right child for x or y
    */
    function depthFirstSearch(node, n, depth, parent){
        if(node == null)
            return null;
        
        if(node.val === n)
            return {depth, parent};
        
        let leftNode = depthFirstSearch(node.left, n, depth+1, node);
        let rightNode = depthFirstSearch(node.right, n, depth+1, node);
        
        return leftNode || rightNode;
    }
    
    let xinfo = depthFirstSearch(root, x, 0, null);
    let yinfo = depthFirstSearch(root, y, 0, null);
    
    // Check if x and y have the same depth but also check they don't have the same parent    
    return xinfo.depth == yinfo.depth && xinfo.parent != yinfo.parent;
};
