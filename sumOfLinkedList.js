class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

//test case
const l7 = new ListNode(1);
l7.next = new ListNode(2);
l7.next.next = new ListNode(3);

const l8 = new ListNode(9);
l8.next = new ListNode(8);
l8.next.next = new ListNode(7);

console.log(addTwoNumbers(l7, l8));
