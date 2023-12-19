function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle > 90 && angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}

// filter 를 사용한 방법
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

let angle = 180;
console.log(solution(angle));
