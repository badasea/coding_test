function solution(n, m) {
    var answer = [];
    var min = n;
    var max = m;
    var temp;
    
    if(n<m)
    { 
        [min,max] = [min,max] 
    }

    while (max > 0 ) {
        temp = min % max;
        min = max;
        max = temp;
    }    
    
    answer.push(min)
    answer.push(n*m/min)
    return answer;
}
