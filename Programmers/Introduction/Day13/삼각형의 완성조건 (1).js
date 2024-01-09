function solution(sides) {
  const [c, a, b] = sides.sort((a, b) => b - a);

  return c < a + b ? 1 : 2;
}

let sides = [1, 2, 3];

console.log(solution(sides));
