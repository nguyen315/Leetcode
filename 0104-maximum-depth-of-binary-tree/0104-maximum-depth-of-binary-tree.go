/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    
    lHeight := maxDepth(root.Left)
    rHeight := maxDepth(root.Right)
    
    if lHeight > rHeight {
        return lHeight + 1 
    } else {
        return rHeight + 1
    }
}