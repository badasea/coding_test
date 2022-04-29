function solution(n)
{
    var answer = 0;
    var i;
    n = n + "";
    for(i=0; i<n.length; i++) {
        answer += Number(n[i])
    }

    return answer;
}
