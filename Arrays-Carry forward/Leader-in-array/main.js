module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           let n = A.length;
           const ans = [A[n-1]]
           let max = A[n-1];
           for(let i = n-2; i >= 0; i--){
               if(A[i] > max) {
                   max = A[i];
                   ans.push(A[i]);
               }
           }
           
           return ans;
       }
   };