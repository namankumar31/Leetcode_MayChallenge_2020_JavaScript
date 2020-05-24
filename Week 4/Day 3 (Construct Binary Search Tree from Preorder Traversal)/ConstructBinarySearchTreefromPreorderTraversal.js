/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let n = preorder.length;
    let preorderIndex = 0;
    
    let helper = (lower, upper) => {
        // If you've parse through preorder array, the tree is constructed. return null
        if(preorderIndex === n)
            return null;
        
        // Get root value
        let val = preorder[preorderIndex];
        
        // value is out of bounds, can't be placed at this position to meet BST
        if(val < lower || val > upper)
            return null;

        preorderIndex++;
        
        let root = new TreeNode(val);
        root.left = helper(lower, val);
        root.right = helper(val, upper);
        return root;
    }
    
    return helper(-Infinity, +Infinity);
};
