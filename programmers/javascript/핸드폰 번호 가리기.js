function solution(phone_number) {
    var answer = '';
    var i=0;
    for (i=0; i<phone_number.length; i++)
        {
            if (i > phone_number.length-5) {
                answer = answer + phone_number[i]
            }
            else {
                answer = answer + '*';
            }
        }
    return answer;
}
