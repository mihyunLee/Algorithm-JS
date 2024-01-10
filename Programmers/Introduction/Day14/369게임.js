function solution(order) {
  return order.toString().match(/[369]/g)?.length || 0;
}

let order = 29423;
console.log(solution(order));
