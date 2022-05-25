function solution(new_id) {
    var answer = '';
    var arr = [];
    var i;
    new_id = new_id.toLowerCase().replace(/[^\w-_.]/g, '');
    new_id = new_id.split("");

    for (i=0; i<new_id.length; i++) {
        if (new_id[i] === '') {
            new_id.splice(i,2);
        } 
    }
    for (i=0; i<new_id.length; i++) {
        if (new_id[i] === new_id[i+1] && new_id[i] === '.') {
            new_id.splice(i,1);
            i--;
        }
    }
    if (new_id[0] === '.') {
        new_id.splice(0,1);
    }
    if (new_id.join('').length === 0) {
        new_id.push('a');
    }
    for (i=0; i<new_id.length; i++) {
        if (i === 15) {
            break;
        }
        arr.push(new_id[i]);
    }
    if (arr[arr.length-1] === '.') {
        arr.splice(arr.length-1,1)
    }
    if (arr.length < 3) {
        for (i=arr.length; i<3; i++) {
            arr.push(arr[arr.length-1]);
        }
    }
    answer = arr.join("");
    return answer;
}
