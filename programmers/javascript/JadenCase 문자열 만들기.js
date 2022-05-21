function solution(s) {
    var answer = '';
    var i;
    var first, second;
    s = s.split(" ");
    for (i=0; i<s.length; i++) {
        first = s[i].charAt(0).toUpperCase();
        second = s[i].slice(1, s[i].length).toLowerCase();
        s[i] = first + second;
    }
    answer = s.join(" ");
    return answer;
}
