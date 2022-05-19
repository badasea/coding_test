function solution(d, budget) {
    var answer = 0;
    var i;
    d.sort((a, b) => a - b);
    for (i=0; i<d.length; i++) {
        if (budget > 0) {
            budget -= d[i];
            if (budget < 0) {
                break;
            }
            answer++;
        }
    }
    return answer;
}
