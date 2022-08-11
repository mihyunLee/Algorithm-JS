function solution(s) {
  let newStr = s.toLowerCase();

  let pCount = newStr.split("p").length;
  let yCount = newStr.split("y").length;

  return pCount === yCount ? true : false;
}
