function solution(my_string, num1, num2) {
  return (
    my_string.substring(0, num1) +
    my_string[num2] +
    my_string.substring(num1 + 1, num2) +
    my_string[num1] +
    my_string.substring(num2 + 1)
  );
}

// 구조분해 할당 사용
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join("");
}

let my_string = "hello",
  num1 = 1,
  num2 = 2;

console.log(solution(my_string, num1, num2));
