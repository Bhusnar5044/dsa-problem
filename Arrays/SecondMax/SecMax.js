const getSecLargest = (arr) => {
    if(arr === null || arr.length === 0) return 0;

    let max = arr[0]; 
    let secMax = arr[0];

    for(let i = 1; i < arr.length; i++ ){
        if(arr[i] > max){
            secMax = max;
            max = arr[i];
        }
        else if(arr[i] > secMax && arr[i] < max) {
            secMax = arr[i];
        }
    }
    
    return secMax;
}

console.log(getSecLargest([1, 5, -2, 4]));