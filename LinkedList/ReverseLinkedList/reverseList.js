class ListNode{
    constructor(value=0, next=null){
        this.value = value;
        this.next = next;
    }
}

const iterativeReverse = (head) => {
    let previous = null;
    let current = head;
    
    while(current !== null){
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    return previous
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = iterativeReverse(head);

let start = reversedHead;
while(start){
    console.log(start.value);
    start = start.next;
}
