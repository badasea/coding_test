function solution(arr, divisor) {
    var answer = [];
    var i;
    for (i=0; i<arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    if (!answer[0]) {
        answer.push(-1)
    }
    answer.sort(function(a, b) {
        return a - b;
    });
    return answer;
}
