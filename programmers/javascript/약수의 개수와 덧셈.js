function div(num) {
    var i;
    var cnt =0;
    for (i=1; i<num; i++) {
        if (num % i === 0) {
            cnt++;
        }
    }
    return cnt;
}

function solution(left, right) {
    var answer = 0;
    var i;
    var cnt;
    for (i=left; i<=right; i++) {
        cnt = div(i);
        if (cnt % 2 === 0) {
            answer -= i;
        }
        else {
            answer += i;
        }
    }
    return answer;
}
