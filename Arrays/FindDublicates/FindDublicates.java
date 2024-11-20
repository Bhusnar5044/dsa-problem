import java.util.HashSet;

// The main method must be in a class named "Main".
class Main {
    public static int[] findDuplicates(int[] arr){
        HashSet<Integer> seenSet = new HashSet<>();
        HashSet<Integer> dublicatesSet = new HashSet<>();

        for (int i=0; i < arr.length; i++){
            if(!seenSet.add(arr[i])){
                dublicatesSet.add(arr[i]);
            }
        }

        int[] result = new int[dublicatesSet.size()];
        int i = 0;
        for(int val: dublicatesSet){
            result[i++] = val;
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 3, 4, 2, 5, 3};
        int[] dublicates = findDuplicates(nums);
        for(int val: dublicates){
            System.out.println(val);
        }
    }
}