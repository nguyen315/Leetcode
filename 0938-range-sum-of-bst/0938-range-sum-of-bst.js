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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0
    if (root === null) {
        return result
    }
    if (root.val <= high && root.val >= low) {
        result += root.val
    }
    if (root.val > low)
        result += rangeSumBST(root.left, low, high)
    if (root.val < high)
        result += rangeSumBST(root.right, low, high)
    return result
};