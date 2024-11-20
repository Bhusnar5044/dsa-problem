module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           const ALength = A.length;
           if(ALength === 0) return 0;
           else if(ALength ===1 ) return 1;
           else if(ALength === 2) return 2;
           else {
               let min = Number.MAX_SAFE_INTEGER, max= Number.MIN_SAFE_INTEGER;
               for(let i = 0; i<ALength; i++){
                   if(A[i] > max) max = A[i];
                   if(A[i] < min) min = A[i];
               }
   
               let ans = ALength, minIndex=-1, maxIndex=-1;
               for(let i = ALength-1; i>=0; i--){
                   if(A[i] === max) maxIndex = i;
                   if(A[i] === min) minIndex = i;
                   if(minIndex !==-1 && maxIndex !==-1)
                       ans = Math.min(ans, Math.abs(maxIndex - minIndex)+1);
               }
               return ans;
           }
   
       }
   };
   