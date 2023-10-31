function solution(priorities, location) {
  let count = 0; // 처리된 프로세스 수
  let maxPriority = Math.max(...priorities);

  while (true) {
    const currentProcess = priorities.shift();

    if (currentProcess === maxPriority) {
      count++;

      if (location === 0) return count;
      maxPriority = Math.max(...priorities);
    } else {
      priorities.push(currentProcess);
    }

    // 프로세스 위치 조정
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
