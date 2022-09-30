/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */


func reverseList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    
    var node = recursive(head, head.Next)
    head.Next = nil
    return node
}

func recursive(previousNode * ListNode, node *ListNode) *ListNode {
    if node.Next != nil {
        var head = recursive(node, node.Next)
        node.Next = previousNode
        return head
    } 
        
    node.Next = previousNode
    return node
}