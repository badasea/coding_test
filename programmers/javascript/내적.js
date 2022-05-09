function solution(a, b) {
    var answer = 0;
    var i;
    for (i=0; i<a.length; i++) {
        answer += a[i]* b[i];
    }
    return answer;
}
