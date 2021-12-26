function solution(n) {
    var answer = '';
    var i=0;
    for (i=0; i<n; i++)
        {
            if (i == 0)
                {
                  answer += '수';
                }
            if (i > 0) {
                if(i % 2 == 1)
                    {
                        answer += '박';
                    }
                else
                    {
                        answer += '수';
                    }
            }
        }
    return answer;
}
