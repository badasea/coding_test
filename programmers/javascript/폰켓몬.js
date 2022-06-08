function solution(nums) {
    var answer = [];
    var len = nums.length / 2;
    var i;
    for (i=0; i<nums.length; i++) {
        if (answer.length < len) {
            if (!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    return answer.length;
}
