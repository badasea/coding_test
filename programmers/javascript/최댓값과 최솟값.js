function solution(s) {
    var arr = s.split(" ");
    return Math.min(...arr)+" "+Math.max(...arr);
}
