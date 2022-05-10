function solution(lottos, win_nums) {
    var answer = [0,0];
    var i,j;
    
    for (i=0; i<lottos.length; i++) {
        if (lottos[i] === 0) {
            answer[0] += 1;
        }
        for (j=0; j<win_nums.length; j++) {
            if (lottos[i] === win_nums[j]) {
                answer[0] += 1;
                answer[1] += 1;
            }
        }
    }
    for (i=0; i<2; i++) {
        if (answer[i] === 6) {
            answer[i] = 1;
        }
        else if (answer[i] === 5) {
            answer[i] = 2;
        }
        else if (answer[i] === 4) {
            answer[i] = 3;
        }
        else if (answer[i] === 3) {
            answer[i] = 4;
        }
        else if (answer[i] === 2) {
            answer[i] = 5;
        }
        else if (answer[i] === 1) {
            answer[i] = 6;
        }
        else {
            answer[i] = 6;
        }
    }
    return answer;
}
