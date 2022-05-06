let arr = [];
let answer = [];

for (let i = 1; i <= 10000; i++) {
  let sum = 0;
  for (let j = 0; j < String(i).length; j++) {
    sum += Number(String(i)[j]);
  }
  let notSelfNum = i + sum;
  arr.push(notSelfNum);
}

for (let i = 1; i <= 10000; i++) {
  if (arr.indexOf(i) === -1) {
    answer += i + "\n";
  }
}

console.log(answer);
