function solution(x) {
    var answer = true;
    var i=0;
    var sum = 0;
    x = x + ""
    for (i=0; i<x.length; i++)
        {
            sum += Number(x[i]);
        }
    console.log(sum)
    if (x % sum === 0)
        {
            answer = true;
        }
    else
        {
            answer = false;
        }
    return answer;
}
