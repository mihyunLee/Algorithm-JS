function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce(
      (acc, val) =>
        acc + (name.indexOf(val) === -1 ? 0 : yearning[name.indexOf(val)]),
      0
    )
  );
}

// nullish 연산자로 중복 줄이기
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((acc, val) => acc + (yearning[name.indexOf(val)] ?? 0), 0)
  );
}

let name = ["may", "kein", "kain", "radi"],
  yearning = [5, 10, 1, 3],
  photo = [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ];
console.log(solution(name, yearning, photo));
