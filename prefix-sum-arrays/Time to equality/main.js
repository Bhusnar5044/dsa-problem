//param A : array of integers
 //return an integer
function findTotalSec(A){
    let max = Number.MIN_SAFE_INTEGER;
    let totalSec = 0;
    
    //get the max val
    for (let i = 0; i < A.length; i++){
        if(A[i] > max) max = A[i];
    }
    
    //get max totalSec
    for (let i = 0; i < A.length; i++){
        if(A[i] < max) 
            totalSec+= (max - A[i]);
    }

    return totalSec;
}