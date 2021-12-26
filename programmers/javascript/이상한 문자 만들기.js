function solution(s) {
    // 1. 변수 선언
    var answer = '';
    var count = 0;
    var i;
    
    //2. 메인 함수
    //2-1 for문 활용 문자열 길이 검사
    for (i=0; i<s.length; i++)
        {   //2-2. if문 활용 띄어쓰기 여부 검사 charAt() 함수
            if(s.charAt(i) == ' ')
                {
                    count = 0;
                    answer += ' ';
                }
    
    //2-3. 문자 2번째는 대소문자 유지 toUpperCase(), toLowerCase() 함수
        else if (count % 2 == 0)
            {
                answer += s.charAt(i).toUpperCase();
                count++;
            }
        else
            {
                 answer += s.charAt(i).toLowerCase();
                 count++;
            }
            
    }
    return answer;
}
