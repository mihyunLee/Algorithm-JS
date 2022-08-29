// (1)
function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

// (2) toLocaleDateString 사용해보기
function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  return date.toLocaleDateString("ko-KR", { weekday: "short" }).toUpperCase();
}
