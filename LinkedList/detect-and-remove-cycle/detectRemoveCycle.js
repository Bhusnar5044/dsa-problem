// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class ListNode {
    constructor(value=0, next=null){
        this.value = value;
        this.next = next;
    }
}

const detectAndRemoveCycle = (head) => {
    if(!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        
        // detected the cycle
        if(slow === fast){
            removeCycle(head, slow);
            return true;
        }
    }
}

const removeCycle = (head, meetPoint) => {
    let start = head;
    
    // check the start of the loop
    while(start !== meetPoint){
        start = start.next;
        meetPoint = meetPoint.next;
    }
    
    // set the endNode to last node
    let endNode = start;
    while(endNode.next !== start){
        endNode = endNode.next;
    }
    
    // Breaking the cycle => setting the lastnode pointer to null
    endNode.next = null;
    
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = head.next;

detectAndRemoveCycle(head);


