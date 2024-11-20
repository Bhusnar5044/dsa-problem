module.exports = { 
    //param A : string
    //return an integer
       solve : function(A){
           const vowels = ['a', 'e','i','o','u'];
           const n = A.length;
           let ans = 0;
           for(let i=0; i < n; i++){
               if(vowels.includes(A[i].toLowerCase())){
                   ans += n-i;
               }
           }
           return ans;
       }
   };
   