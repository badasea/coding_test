function solution(numbers) {
    var answer = [];
    var i, j;
    for (i=0; i<numbers.length; i++)
    {
        for(j=i+1; j<numbers.length; j++)
            {
                answer.push(numbers[i] + numbers[j]);
            }
    }
    answer.sort((a, b) => a-b);
    for (i=0; i<answer.length; i++) {
        if (answer[i] === answer[i+1]) {
            answer.splice(i,1);
            i--;
        }
    }
    return answer;
}
