//param A : array of integers
//param B : array of array of integers
//return a array of long integers
function rangeSum(A, B){
    let sum = 0;
    // prefix sum Array
    let prefixArr = A.map(num => sum+= parseInt(num))
            
    const resultArr = [];

    for (val of B){
        const [i, j] = val;
        if(i == 0) resultArr.push(prefixArr[j])
        else resultArr.push(prefixArr[j] - prefixArr[i-1])
    }
    return resultArr
}   