/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const stack = []
    let curNode = head
    while (curNode != null) {
        stack.push(curNode)
        curNode = curNode.next
    }
    
    let removingNode
    
    for (let i = 0; i < n; i++) {
        removingNode = stack.pop()
    }
    
    
    if (stack.length > 0) {
        let node = stack.pop()
        node.next = removingNode.next            
        
        removingNode = null
        return head
    }
    else if (removingNode == head) {
        return head.next
    }
};