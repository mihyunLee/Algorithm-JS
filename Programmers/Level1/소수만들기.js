function solution(nums) {
  let count = 0,
    sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let l = j + 1; l < nums.length; l++) {
        sum = nums[i] + nums[j] + nums[l];
        count++;

        for (let n = 2; n <= Math.sqrt(sum); n++) {
          if (sum % n === 0) {
            count--;
            break;
          }
        }
      }
    }
  }

  return count;
}
