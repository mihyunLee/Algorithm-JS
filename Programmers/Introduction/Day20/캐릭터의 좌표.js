function solution(keyinput, board) {
  let x = 0,
    y = 0;
  const [limitX, limitY] = board.map((v) => Math.floor(v / 2));

  for (let key of keyinput) {
    switch (key) {
      case "left":
        x--;
        break;
      case "right":
        x++;
        break;
      case "up":
        y++;
        break;
      case "down":
        y--;
        break;
      default:
        break;
    }

    if (x > limitX) {
      x--;
    } else if (x < limitX * -1) {
      x++;
    } else if (y > limitY) {
      y--;
    } else if (y < limitY * -1) {
      y++;
    }
  }

  return [x, y];
}

// 하드 코딩 수정
// if문을 switch-case문 안에 녹이기
function solution(keyinput, board) {
  let res = [0, 0];
  const [limitX, limitY] = board.map((v) => Math.floor(v / 2));

  for (let key of keyinput) {
    switch (key) {
      case "left":
        if (-res[0] < limitX) res[0]--;
        break;
      case "right":
        if (res[0] < limitX) res[0]++;
        break;
      case "up":
        if (res[1] < limitY) res[1]++;
        break;
      case "down":
        if (-res[1] < limitY) res[1]--;
        break;
    }
  }
  return res;
}

let keyinput = ["down", "down", "down", "down", "down"],
  board = [7, 9];
console.log(solution(keyinput, board));

/**
 * 잘못 생각했던 기존 풀이
 */

// function solution(keyinput, board) {
//   let x = 0,
//     y = 0;
//   const [limitX, limitY] = board.map((v) => Math.floor(v / 2));

//   for (let key of keyinput) {
// 		//! 최대 이동할 수 있는 좌표의 반대 방향으로 이동이 되지 않음
// 		if(Math.abs(x) >= limitX || Math.abs(y) >= limitY){
// 			continue;
// 		}

//     switch (key) {
//       case "left":
//         x--;
//         break;
//       case "right":
//         x++;
//         break;
//       case "up":
//         y++;
//         break;
//       case "down":
//         y--;
//         break;
//       default:
//         break;
//     }
//   }

//   return [x, y];
// }
