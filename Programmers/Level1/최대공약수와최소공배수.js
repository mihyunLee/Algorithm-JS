function solution(n, m) {
  const gcd = (a, b) => {
    return b == 0 ? a : gcd(b, a % b);
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(n, m), lcm(n, m)];
}
