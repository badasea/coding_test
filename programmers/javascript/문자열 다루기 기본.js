function solution(s) {
    var answer = true;
    var i;
    var temp = s.split('')
    if (!(s.length == 4 || s.length == 6)) {
        answer = false;
    }
    else {
     for (i=0; i<temp.length; i++) {
            if (isNaN(temp[i]))
                {
                    answer = false;
                }
        }
    }
    return answer;
}
