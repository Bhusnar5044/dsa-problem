// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const mergeSortedArr = (arr1, arr2) => {
    let n = arr2.length;
    let m = arr1.length;
    let k = m+n;
    
    m = m-1; n = n-1; k = k-1;
    
    while(m >=0 && n >= 0){
        if(arr1[m] > arr2[n]){
            arr1[k] = arr1[m];
            m--;
        }
        else{
            arr1[k] = arr2[n];
            n--;
        }
        k--;
    }
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(arr1);
mergeSortedArr(arr1, arr2);
console.log(arr1);

