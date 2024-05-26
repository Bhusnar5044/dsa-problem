const search = (arr, num) => {
    // let start = 0, end = arr.length - 1;
    // while(start <= end){
    //     if(arr[start] === num) {
    //         console.log(1);
    //         return
    //     }
    //     if(arr[end] === num) {
    //         console.log(1);
    //         return
    //     }
    //     start++;
    //     end--;
    // }
    for (val of arr){
        if(val === num){
            console.log(1)
            return
        }
     }
    console.log(0)
}