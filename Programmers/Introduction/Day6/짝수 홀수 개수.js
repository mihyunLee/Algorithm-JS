function solution(num_list) {
  let answer = [0, 0];

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? answer[0]++ : answer[1]++;
  }

  return answer;
}

let num_list = [1, 2, 3, 4, 5];
console.log(solution(num_list));
