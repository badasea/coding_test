function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(n) {
    var answer = 0;
    var i;
    for (i=2; i<=n; i++) {
        if (isPrime(i)) {
            answer++;
        }
    }
    return answer;
}
