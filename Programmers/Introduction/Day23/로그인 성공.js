function solution(id_pw, db) {
  const [userId, userPw] = id_pw;
  let answer = "";

  db.forEach(([dbId, dbPw]) => {
    if (userId === dbId && userPw === dbPw) {
      answer = "login";
    } else if (userId === dbId && userPw !== dbPw) {
      answer = "wrong pw";
    } else if (userId !== dbId && userPw !== dbPw) {
      answer = "fail";
    }
  });

  return answer;
}

// 다른 풀이 - Map 사용하기
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}

let id_pw = ["meosseugi", "1234"],
  db = [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ];
console.log(solution(id_pw, db));
