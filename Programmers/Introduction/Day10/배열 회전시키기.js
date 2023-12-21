function solution(numbers, direction) {
  let move = direction === "right" ? -1 : 1;
  return numbers.map((_, i) => numbers.at((i + move) % numbers.length));
}

// 다른 풀이 unshift() & pop()
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());

  return numbers;
}

let numbers = [1, 2, 3],
  direction = "right";

console.log(solution(numbers, direction));
