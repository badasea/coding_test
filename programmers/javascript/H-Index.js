function solution(citations) {
    var answer = 0;
    var i;
    citations.sort((a, b) => b - a);
    for (i=0; i<citations.length; i++) {
        if (i < citations[i]) {
            answer++;
        }
    }
    
    return answer;
}
