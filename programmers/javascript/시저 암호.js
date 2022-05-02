function solution(s, n) {
    var answer = '';
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var i;
    var text;
    var textArr;
    var index;

    for (i=0; i<s.length; i++) {
        text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        textArr = upper.includes(text) ? upper : lower;
        index = textArr.indexOf(text)+n;
        if (index >= textArr.length) {
            index -= textArr.length;
        }
        answer += textArr[index];
    }
    return answer;
}
