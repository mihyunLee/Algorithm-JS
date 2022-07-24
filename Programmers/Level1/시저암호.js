function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const word = s[i];

    if (word === " ") {
      answer += " ";
      continue;
    }

    const arr = upper.includes(word) ? upper : lower;
    let index = arr.indexOf(word) + n;

    if (index >= arr.length) index -= arr.length;

    answer += arr[index];
  }

  return answer;
}
