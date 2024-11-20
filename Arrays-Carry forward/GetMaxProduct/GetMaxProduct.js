// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
console.log("Hello world!");

const getMaxProduct = (arr) => {
    if(arr === null || arr.length === 0) return 0;

    let maxProduct = arr[0]; 
    let minProduct = arr[0];
    let result = arr[0];
    
    for(let i = 1; i < arr.length; i++ ){
        let current = arr[i];
        
        if(current < 0){
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }
        
        maxProduct = Math.max(current, maxProduct * current);
        minProduct = Math.min(current, minProduct * current);
        
        result = Math.max(result, maxProduct);
    }
    
    
    return result;
}

console.log(getMaxProduct([2, 3, -2, 4]));
