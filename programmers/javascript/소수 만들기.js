function solution(nums) {
    var answer = 0;
    var i,j,k;

  for (i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
    
  return answer;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
