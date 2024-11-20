class ListNode{
    constructor(value = 0, next = null){
        this.value = value;
        this.next = next;
    }
}

const mergeTwoListIterative = (l1, l2) => {
    const newList = new ListNode();
    let current = newList;
    
    while(l1 && l2){
        console.log(l1.value, l2.value)
        if(l1.value <= l2.value){
            current.next = l1;
            l1 = l1.next;
        }
        else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l2 ? l2: l1;
    
    return newList.next;
}


let l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);

let l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);

const newNode  = mergeTwoListIterative(l1, l2);
let start =newNode;

console.log(start);

while(start){
    console.log(start.value);
    start = start.next;
}
