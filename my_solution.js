class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}
 /*

13    1    5    3    7    10
                            f
s

 */

function findKthFromLast(head, k) {
    if(!head) return null
    if(!k) return null
    if(!head && k > 0) return null
    
    let fast = head
    let slow = head
    
    for(let i = 0; i < k - 1; i++){
        fast = fast.next
        if(!fast) return -1
    }
    
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }    
    
    return slow.value ? slow.value : -1
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(findKthFromLast(LL1, 1)) // 10
console.log(findKthFromLast(LL1, 3)) // 3
console.log(findKthFromLast(LL1, 6)) // 13
console.log(findKthFromLast(LL1, 7)) // -1
