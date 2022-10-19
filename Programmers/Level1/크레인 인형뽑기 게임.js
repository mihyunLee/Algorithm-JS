function solution(board, moves) {
  // board [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
  // moves [1,5,3,5,1,2,1,4]
  let bucket = [];
  let result = 0;

  function inputBucket(position) {
    for (let i = 0; i < board.length; i++) {
      // 크레인 위치에 인형이 있으면 바구니에 넣기
      let friends = board[i][position - 1];

      if (friends !== 0) {
        bucket.push(friends);
        board[i][position - 1] = 0; // 뽑은 인형 자리 리셋
        break;
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    inputBucket(moves[i]);
    // 같은 인형이 있을 때 바구니에서 인형 제거, 터뜨린 개수 추가
    if (
      bucket.length > 1 &&
      bucket[bucket.length - 1] === bucket[bucket.length - 2]
    ) {
      bucket.pop();
      bucket.pop();
      result += 2;
    }
  }

  return result;
}
