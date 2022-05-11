function solution(price, money, count) {
    var answer = 0;
    var i;
    for(i=0; i<=count; i++) {
        answer += ( price * i )
    }
    if (answer < money) {
        answer = 0;
    } else {
        answer = answer - money;
    }
    return answer;
}
