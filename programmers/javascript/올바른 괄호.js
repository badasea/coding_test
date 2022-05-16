function solution(s){
    var answer = true;
    var i;
    var cnt=0;
    
    if (s[0] === ")") {
        return false;
    }
    
    for (i=0; i<s.length; i++) {
        if (s[i] === "(") {
            cnt++;
        }
        else if (cnt >= 1 && s[i] === ")") {
            cnt--;
        }
    }
    
    if (cnt === 0 ) {
        return true;
    }
    else {
        return false;
    }
}
