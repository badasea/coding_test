function solution(strings, n) {
    strings.sort(function(a,b) {
        var first = a[n];
        var second = b[n];
        if (first === second) {
            return (a>b) - (b>a)
        } else {
            return (first>second) - (second>first)
        }
    })
    return strings;
}
