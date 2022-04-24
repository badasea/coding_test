function solution(n) {
    var answer = [];
    var i;
    n = n + ""
    for (i=0; i<n.length; i++){
        answer.push(Number(n[i]))
    }
    answer.reverse()
    return answer;
}
