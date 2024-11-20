module.exports = { 
    //param A : array of integers
    //return an integer
       bulbs : function(A){
           let n = A.length;
           let startIndex = -1;
           for (let i=0; i < n; i++){
               if(A[i] === 0) {
                   startIndex = i
                   break;
               }
           }
   
   
           if(startIndex === -1) return 0;
           
           let ans = n - startIndex;
           // console.log({startIndex, ans})
           for(let i = startIndex-1; i < n-1; i++){
               if(A[i]===A[i+1]) ans -=1;
           }
           return ans;
       }
   };
   