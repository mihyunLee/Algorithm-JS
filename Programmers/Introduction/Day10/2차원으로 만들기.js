function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }

  return answer;
}

let num_list = [1, 2, 3, 4, 5, 6, 7, 8],
  n = 2;
console.log(solution(num_list, n));
