function solution(n) {
    var answer;
    var i;
    for (i=2; i<n; i++) {
        if (n % i === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}
