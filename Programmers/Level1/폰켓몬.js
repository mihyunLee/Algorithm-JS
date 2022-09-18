function solution(nums) {
  const newNums = new Set(nums);
  const count = parseInt(nums.length / 2);
  return newNums.size >= count ? count : newNums.size;
}
