module.exports = { 
    //param A : array of integers
    //return a strings
       solve : function(A){
            const n = A.length;
            if(n % 2 !==0) return "NO";
            if(A[0] % 2 !==0 || A[n-1] % 2 !==0) return "NO"
            return "YES";
          
       }
   };
   