function solution(n) {
    var answer = 0;
    var i;
    var div = 1234567;
    var f = [0,1]
    for (i=2; i<=n; i++) {
        f[i] = (f[i-1] + f[i-2]) % div;
        answer = f[i];
    }
    return answer;
}
