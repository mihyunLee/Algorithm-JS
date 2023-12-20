function solution(rsp) {
  return rsp.split("").reduce((acc, val) => {
    if (val === "2") {
      return acc + "0";
    } else if (val === "0") {
      return acc + "5";
    } else if (val === "5") {
      return acc + "2";
    }
  }, "");
}

// 객체 사용
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((v) => arr[v]).join("");
}

let rsp = "2";
console.log(solution(rsp));
