 //param A : array of integers
 //param B : integer
 //return an integer
function maxSum(A, B){
    let n = A.length;
    let frontSum = 0

    //Calculate First B elements
    for(let i=0; i< B; i++){
        frontSum+=A[i];
    }

    let maxSum = frontSum;
    
    // remove 1 from frontsum and add 1 from last
    for(let i = 0; i< B; i++){
        frontSum -= A[B-1-i];
        frontSum += A[n-1-i];
        if(frontSum > maxSum) maxSum=frontSum
    }
    return maxSum;
}