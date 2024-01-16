function solution(chicken) {
  let service = 0;

  while (chicken >= 10) {
    service += Math.floor(chicken / 10);
    chicken = (chicken % 10) + Math.floor(chicken / 10);
  }

  return service;
}

// 다른 풀이
function solution(chicken) {
  if (chicken == 0) return 0;
  return Math.floor((chicken - 10) / 9 + 1); // 처음 10마리를 사야 서비스1마리+1쿠폰 생성,
  // 그 다음부터는 1쿠폰+9마리 구매 = 1마리 서비스.
  // 그래서 사실상 9마리를 구매하면 1마리 서비스를 받는다.
  // 9마리 구매시 받는 서비스를 계산하고 난 후에 처음 10마리를 구매하여 생긴 1마리의 서비스를 추가
}

let chicken = 1081;
console.log(solution(chicken));
