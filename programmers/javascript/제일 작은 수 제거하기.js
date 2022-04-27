function solution(arr) {
    var answer = [];
    var i;
    if (arr.length > 1) {
        for (i=0; i<arr.length; i++) {
            if (arr[i] !== Math.min(...arr)) {
                answer.push(arr[i])    
            }
        }
    }
    else {
        answer.push(-1)
    }    
    return answer;
}
