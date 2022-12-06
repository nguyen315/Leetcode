/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head)
        return head
    
    const secondNode = head.next
    
    let node = head
    while (node.next !== null && node.next.next !== null) {
        const nodeAfter = node.next
        node.next = node.next.next
        node = nodeAfter
    }
    node.next = null
    
    node = head
    while (node.next !== null) {
        node = node.next
    }
    
    node.next = secondNode
    
    return head
}