function solution(s) {
    var answer = [];
    var res;
    var i;
    for (i=0; i<s.length; i++) {
        answer.push(s[i]);
    }
    answer.sort();
    answer.reverse();
    res = answer.join('');
    return res;
}
