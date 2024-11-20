module.exports = { 
    //param A : array of integers
    //return a long integers
       subarraySum : function(A){
           let n = A.length;
           let sum = BigInt(0);
           for (let i =0; i< n; i++){
               sum += BigInt(A[i]) * BigInt(n-i) * BigInt(i+1);
           }
   
           return sum;
       }
   };
   