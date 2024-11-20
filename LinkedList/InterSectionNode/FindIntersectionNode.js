class ListNode{
    constructor(value = 0, next = null){
        this.value = value;
        this.next = next;
    }
}

const getIntersectionNode = (l1, l2) => {
    if(!l1 || !l2) return null;
    
    let p1 = l1;
    let p2 = l2;
    
    while(p1 !== p2){
        p1 = p1.next ?? l2;
        p2 = p2.next ?? l1;
    }
    
    return p1;
}

let interSecNode = new ListNode(11);
interSecNode.next = new ListNode(25);

let l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);
l1.next.next.next = interSecNode;


let l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);
l2.next.next.next = interSecNode;

const interSectionNode  = getIntersectionNode(l1, l2);

console.log(interSectionNode);





