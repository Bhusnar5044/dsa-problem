// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class MaxProductArr {
    public static int maxProdctSubArr(int[] arr){
        if(arr == null || arr.length ==0) return 0; 
        int maxProduct = arr[0];
        int minProduct = arr[0];
        int result = arr[0];
        
        for (int i = 1; i < arr.length; i++){
            int current = arr[i];
            
            if(current < 0){
                int temp = maxProduct;
                maxProduct = minProduct;
                minProduct = temp;
            }
            
            maxProduct = Math.max(current, maxProduct * current);
            minProduct = Math.min(current, minProduct * current);
            result = Math.max(result, maxProduct);
        }
        
        return result;
    }
    public static void main(String[] args) {
        int[] nums = {2, 3, -2, 4,};
        System.out.println(maxProdctSubArr(nums));
    }
}