function solution(n) {
    var answer = [];
    var res;
    var i;
    n = n + "";
    for(i=0; i<n.length; i++) {
        answer.push(n[i]);
    }
    answer.sort(function(a, b) {
        return a - b;
    });
    answer.reverse()
    res = Number(answer.join(''))
    return res;
}
