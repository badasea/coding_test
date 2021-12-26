class Solution {
    public long solution(int a, int b) {
        long answer = 0;
        
            int i, j;
    
    //2. 메인 함수
    //2-1. a가 작은 수 인 경우
    if ( a < b )
        {
            for (i=a; i<=b; i++)
                {
                    answer = answer + i;
                }
        }
    //2-2. b가 작은 수 인 경우
    else if ( a > b )
        {
            for (j=b; j<=a; j++)
                {
                    answer = answer + j;
                }
        }
    //2-3. a = b 인 경우
    else
        {
            answer = a;
        }
        
        return answer;
    }
}
