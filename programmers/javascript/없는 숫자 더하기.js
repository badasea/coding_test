function solution(numbers) {
    var answer = 0;
    var i, j;
    for(i=0; i<10; i++) {
        if (numbers.indexOf(i) === -1) {
            answer += i;
        }   
    }
    return answer;
}
