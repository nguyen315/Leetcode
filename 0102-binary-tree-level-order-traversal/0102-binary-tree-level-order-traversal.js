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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue1 = [], queue2 = []
    if (root === null) {
        return []
    }
    queue1.push(root)
    const result = []
    
    do {
        let tempResult = []
        while (queue1.length > 0) {
            const node = queue1.shift()
            tempResult.push(node.val)
            node.left !== null && queue2.push(node.left)
            node.right !== null && queue2.push(node.right)
        }
        result.push(tempResult)
        tempResult = []

        queue1 = [...queue2]
        queue2= []
    }
    while (queue1.length > 0)
    
    return result
};
