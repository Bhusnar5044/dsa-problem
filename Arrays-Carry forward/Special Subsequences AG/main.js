module.exports = { 
    //param A : string
    //return an integer
       solve : function(A){
           let mod = (10 ** 9) + 7;
           let ans = 0;
           let count = 0
           for(let i = A.length - 1; i >= 0; i--){
               if(A[i] === 'G') count+=1;
               if(A[i] === 'A') ans+=count;
           }
           return ans % mod;
       }
   };
   