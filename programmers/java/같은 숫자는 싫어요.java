import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        int[] answer = {};
        int count = 1;
        for (int i=1; i<arr.length; i++)
        {
            if(arr[i-1] != arr[i]) {
                count++;
            }
        }
        answer = new int[count];
        int answercnt = 1;
        answer[0] = arr[0];
        for(int j=1; j<arr.length; j++)
        {
            if (arr[j-1] != arr[j]) {
                answer[answercnt] = arr[j];
                answercnt++;
            }
        }
        

        return answer;
    }
}
