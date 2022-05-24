function solution(array, commands) {
    var answer = [];
    var i = 0;
    var j = 0;
    var k = 0;
    for (var m = 0; m < commands.length; m++) {
        i = commands[m][0]
        j = commands[m][1]
        k = commands[m][2]
        
        var sliced = array.slice(i-1,j)
        var sorted = sliced.sort((a,b)=> a - b)
    
        answer.push(sorted[k-1])
    }
    return answer;
}
