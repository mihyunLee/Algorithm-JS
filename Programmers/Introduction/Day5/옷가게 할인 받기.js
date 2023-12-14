function solution(price) {
  let discountPercent = 0;

  if (price >= 500000) {
    discountPercent = 20;
  } else if (price >= 300000) {
    discountPercent = 10;
  } else if (price >= 100000) {
    discountPercent = 5;
  }

  return discountPercent === 0
    ? price
    : parseInt(price - (price * discountPercent) / 100);
}

let price = 100010;

console.log(solution(price));
