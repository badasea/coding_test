function solution(A,B){
    var answer = 0;
    var i;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (i=0; i<A.length; i++) {
        answer += A[i] * B[i]
    }
    return answer;
}
