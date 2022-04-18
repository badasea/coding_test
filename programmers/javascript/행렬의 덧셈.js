function solution(arr1, arr2) {
    var answer = [[]];
    var i,j;
    for (i=0; i < arr1.length; i++) {
        answer[i] = [];
        for (j=0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}
