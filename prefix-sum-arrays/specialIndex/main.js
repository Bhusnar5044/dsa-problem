module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let evenSum = 0;
           let oddSum = 0;
           let n = A.length;
   
           const prefixEven = [0]
           const prefixOdd=[0]
   
   
           A.forEach((val, i)=>{
               if(i%2 !== 0 ) oddSum+=val;
               if(i%2 === 0 ) evenSum+=val;
               prefixOdd.push(oddSum)
               prefixEven.push(evenSum)
           })
   
           console.log(prefixEven, prefixOdd)
           
   
           let count = 0;
           for(let i= 0; i < n; i++){
               if(prefixEven[i] + prefixOdd[n] - prefixOdd[i+1] === prefixOdd[i] + prefixEven[n] - prefixEven[i+1]) count+=1;
           }
           return count;
       }
   };
   