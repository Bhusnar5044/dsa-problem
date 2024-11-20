module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           let n = A.length;
           
           // if(n > 1){
           //     let max = Number.MIN_SAFE_INTEGER;
           //     for (let i = 0; i< n; i++){
           //         sum = 0
           //         for (let j= i; j < n; j++){
           //             sum+=A[j]
           //             if(sum > max) max = sum;
           //         }
           //     }
           //     return max;
           // }
           // else return A[0];
   
           //Kadne's algo.
   
          let max = A[0];
          let sum = A[0];
   
          for(let i=1; i< n; i++){
              if(sum > 0) sum+=A[i];
              else sum = A[i];
              if(sum > max) max = sum;
          }
          return  max;
       }
   };
   