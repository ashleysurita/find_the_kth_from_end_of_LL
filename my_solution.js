class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function findKthFromLast(head, k) {
    if(!head) return -1
    
    const queue = [head]
    let curr = head
    while(curr.next){
        if (curr.next){
            queue.push(curr.next)
            curr = curr.next
        }
    }
    const count = queue.length - k
    if(queue[count] && queue[count].value) return queue[count].value
    return -1
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(findKthFromLast(LL1, 1)) // 10
console.log(findKthFromLast(LL1, 3)) // 3
console.log(findKthFromLast(LL1, 6)) // 13
console.log(findKthFromLast(LL1, 7)) // -1
