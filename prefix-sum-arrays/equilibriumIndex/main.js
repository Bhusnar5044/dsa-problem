function findIndex(A){
    let sum = 0;
    let n = A.length;
    const prefixArr = A.map(num => sum+=num );
    for (let i=1; i < n; i++){
        if(prefixArr[i-1] === prefixArr[n-1] - prefixArr[i]) return i
    }
    return -1;
}
