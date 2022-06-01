function solution(n, lost, reserve) {
    var answer = 0;
    var i,j;
    
    answer = n - lost.length;
    
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    
    for (i=0; i<lost.length; i++) {
        for (j=0; j<reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost.splice(i,1);
                reserve.splice(j,1);
                answer++;
                i--;
                j--;
            }
        }
    }
    
    for (i=0; i<lost.length; i++) {
        for (j=0; j<reserve.length; j++) {
            if (lost[i] === reserve[j]+1 || lost[i] === reserve[j]-1) {
                lost.splice(i,1);
                reserve.splice(j,1);
                answer++;
                i--;
                j--;
            }
        }
    }
    return answer;
}
