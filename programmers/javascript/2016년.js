function solution(a, b) {
    var answer = '';
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var i;
    var temp = 0;
    
    for (i=1; i<a; i++) {
        temp += month[i-1]
    }
    
    temp += b - 1;
    answer = day[temp % 7];
    
    return answer;
}
