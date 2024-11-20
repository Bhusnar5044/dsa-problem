//param A : array of integers
//param B : integer
//return an integer
function goodPair(A, B) {
    const n = A.length;
    let start = 0, end = n-1;
    let indexSet = new Set();
    while (start <= end){
        indexSet.add(start);
        let sum = A[start] + A[end]
        if(start !== end && sum === B) console.log(`(${A[start]}, ${A[end]})`);
        if( indexSet.has(end)){
            start++;
            end = n-1;
        }
        else end--;
    }
    return 0
}


//TOCheck pair Exist or not

function isGoodPairExist(A, B){
    const n = A.length;
    for (let i=0; i<n; i++){
        for(let j= i+1; j< n; j++){
            if(A[i]+ A[j]=== B) return 1
        }
    }
    return 0
}
