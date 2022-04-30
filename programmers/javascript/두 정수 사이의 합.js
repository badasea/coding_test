function solution(a, b) {
    var answer = 0;
    var i;
    if (a === b) {
        answer = a;
    }
    else if ( a < b ) {
        for(i=a; i<=b; i++) {
            answer += i
        }
    }
    else {
        for(i=b; i<=a; i++) {
            answer += i
        }
    }
    return answer;
}
