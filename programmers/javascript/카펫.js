function solution(brown, yellow) {
    //1. 변수 선언
    var answer = [];
    var i, j;
    var size;
    
    //2. 2차원 배열 이중 for문
    for (i=1; i<=brown; i++)
        {
            for (j=1; j<=i; j++) 
                {
                    size = i * j;
                    if (yellow == size)
                        {
                            if (brown == (((i+2) * 2) + (j * 2)))
                                answer = [i+2,j+2];
                        }
                }
        }
    
    //3. answer값 솔루션 함수 반환
    return answer;
}
