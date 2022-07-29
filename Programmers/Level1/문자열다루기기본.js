function solution(s) {
  return !s.includes("e") && !isNaN(s) && (s.length === 4 || s.length === 6);
}
