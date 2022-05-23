function solution(n) {
    var answer = 0;
    var i,j;
    var num =0;
    for (i=1; i<=n; i++) {
        for (j=i; j<= n; j++) {
            num += j;
            if (num === n) {
                answer++;
                num = 0;
                break;
            }
            else if (num > n) {
                num = 0;
                break;
            }
        }
    }
    return answer;
}
