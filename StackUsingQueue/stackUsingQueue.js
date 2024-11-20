class StackUsingQueue{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }
    
    push(value){
        this.q1.push(value);
    }
    
    pop(){
        if(this.isEmpty()){
            console.log('Stack is Empty');
            return null
        }
        while(this.q1.length > 1){
            this.q2.push(this.q1.shift());
        }
        
        const topEle = this.q1.shift();
        
        [this.q1, this.q2] = [this.q2, this.q1];
        
        return topEle;
    }
    top(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        
        while(this.q1.length > 1){
            this.q2.push(this.q1.shift());
        }
        
        const topEle = this.q1[0];
        
        this.q2.push(this.q1.shift());
        
        [this.q1, this.q2] = [this.q2, this.q1];
        
        return topEle;
    }
    
    isEmpty(){
        return this.q1.length === 0;
    }
}

const stack = new StackUsingQueue();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top element:", stack.top());  // Output: 3
console.log("Popped element:", stack.pop());  // Output: 3
console.log("Popped element:", stack.pop());  // Output: 2
console.log("Top element after pops:", stack.top());  // Output: 1
stack.push(4);
console.log("Top element after push:", stack.top());  // Output: 4
console.log("Popped element:", stack.pop());  // Output: 4



