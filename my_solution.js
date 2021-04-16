class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

// 0 -> 1 -> 2 -> 3
//                f
//           s

// k = 1 => 2

//fast and slow nodes
// move fast k times
// move fast and slow until fast is at end
// return slow


const kthFromEnd = (head, k) => {
  let fast = head
  let slow = head
  
  // let count = 0
  while(k){    
    k--;    
    if (!fast){
      return null
    }      
    fast = fast.next
  }
  
  while(fast){
    fast = fast.next
    slow = slow.next
  }
  
  return slow.value     
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(findKthFromLast(LL1, 1)) // 10
console.log(findKthFromLast(LL1, 3)) // 3
console.log(findKthFromLast(LL1, 6)) // 13
console.log(findKthFromLast(LL1, 7)) // -1
