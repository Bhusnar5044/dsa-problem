package Arrays.MergeSortedArr;

// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class MergeSortedArr {
    
    public static void mergeSortedArr(int[] arr1, int[] arr2) {
        
        int n = arr2.length;
        int m = arr1.length - n; // to get arr1 last non zero element index;
        int k = m + n;
    
        n = n-1; m = m-1; k = k-1;
        
        while(m >=0 && n >= 0){
            if(arr1[m] > arr2[n]){
                arr1[k] = arr1[m];
               m--;
            }
            else{
                arr1[k] = arr2[n];
                n--;
            }
            k--;
        }

    }
    
    public static void main(String[] args){
        int[] arr1 = {1, 4, 6, 0, 0, 0};  // Array with m elements and room for n more
        int[] arr2 = {2, 3, 5};
        
        mergeSortedArr(arr1, arr2);
        
        for(int val: arr1){
            System.out.println(val);
        }
        
    }

}
