function solution(food) {
  let result = "";

  for (let i = 1; i < food.length; i++) {
    result += i.toString().repeat(Math.floor(food[i] / 2));
  }

  return result + "0" + [...result].reverse().join("");
}

let food = [1, 3, 4, 6];

console.log(solution(food));
