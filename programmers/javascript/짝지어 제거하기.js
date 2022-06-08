function solution(s)
{
    var answer = 0;
    var arr = [];
    var i;
    for (i=0; i<s.length; i++) {
        arr.push(s[i]);
        if (arr[arr.length-1] === arr[arr.length-2] ) {
            arr.pop();
            arr.pop();
        }
    }
    if (arr.join("") === "") {
        answer = 1;
    }

    return answer;
}
