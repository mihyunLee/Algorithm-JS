## 스택(Stack)과 큐(Queue)

어떤 데이터의 구체적인 구현 방식은 생략하고, 데이터의 추상적 형태와 그 데이터를 다루는 방법만을 정해놓은 것을 가지고 ADT(Abstract Data Type) 혹은 추상 자료형이라고 한다. ADT에는 스택(Stack)과 큐(Queue)가 포함되어 있다.

이 두 자료구조는 자바스크립트에 내장되어 있지 않지만, 배열과 내장 함수들을 이용하여 스택과 큐를 구현해낼 수 있다.
대부분 알고리즘 문제에서 배열을 이용해도 되지만, 시간 복잡도가 중요해지고 데이터의 양이 매우 방대할 경우 배열만으로는 부족하다.

## 스택(Stack)

- `LIFO(Last in, First out)` 원칙으로 만들어진 자료구조
- 함수 실행 콘텍스트들이 쌓이는 `Call Stack`과 브라우저의 방문 기록이 쌓이는 `Histroy Stack`이 대표적이다.
- 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용된다.
- 스택이 비어있을 때 stack.pop을 시도하는 것을 **stack underflow**라 하고, 스택의 크기가 비어있을 때 stack.push를 시도하면 **stack overflow**가 발생한다.

### 속성

- top: 스택 맨 위의 아이템

### 메소드

- push: 스택의 맨 위에 아이템을 삽입한다.
- pop: 스택 맨 위의 아이템을 제거하고 그 아이템을 반환한다.
- contains: 해당 아이템이 스택에 존재하는지 확인한다.
- size: 현재 스택에 있는 아이템의 총 개수를 반환한다.

### 스택 예시

- 재귀 알고리즘
  - 재귀적으로 함수를 호출해야 하는 경우, 임시 데이터를 스택에 넣어준다.
  - 재귀함수를 빠져 나와 퇴각 검색(backtrack)을 할 때는 스택에 넣어 두었던 임시 데이터를 뺴줘야 한다.
  - 재귀 알고리즘을 반복적 형태(iterative)를 통해서 구현할 수 있게 한다.
- 웹 브라우저 방문 기록 (뒤로가기)
- 실행 취소 (undo)
- 역순 문자열 만들기
- 수식의 괄호 검사
- 후위 표기법 계산

### 스택(Stack) 구현하기

```js
export default class Stack {
  constructor() {
    // item들을 받을 배열 생성
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    // items 배열의 마지막 item만 가져와준다. pop()과 다르게 배열에서 아이템이 빠지는 것이 아닌 유지된 채로 마지막 값만 받아와줌
    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}
```

### 스택(Stack)의 시간 복잡도

| Big-O       | 삽입 | 삭제 | 접근 | n번째 접근 | 검색 |
| ----------- | ---- | ---- | ---- | ---------- | ---- |
| 스택(Stack) | O(1) | O(1) | O(1) | O(n)       | O(n) |

<br>

## 큐(Queue)

- `FIFO(First in, First out)` 원칙으로 만들어진 자료구조
- 자바스크립트 엔진에서 비동기 함수 실행시 콜백이 대기열로 들어오는 `Task Queue`가 대표적인 예
- 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업을 할 수 있다.
- 큐는 순서대로 처리해야하는 작업을 임시로 저장해두는 **버퍼(buffer)**로서 많이 사용된다.

### 속성

- first: 큐 맨 앞의 아이템

### 메소드

- dequeue: 큐 맨 앞의 아이템을 제거하고 그 아이템을 반환한다.
- enqueue: 큐에 아이템을 추가한다.
- contains: 해당 아이템이 큐에 존재하는지 확인한다.
- size: 현재 큐에 있는 아이템의 총 개수를 반환한다.

### 큐 예시

> 데이터가 입력된 시간 순서대로 처리해야 할 필요가 있는 경우에 사용된다.

- 너비 우선 탐색(BFS, Breadth-First Search) 구현
- 처리해야할 노드의 리스트를 저장하는 경우
  - 노드를 하나 처리할 때마다 해당 노드와 인접한 노드들을 큐에 다시 저장한다.
  - 노드를 접근한 순서대로 처리할 수 있다.
- 캐시(Cache) 구현
- 우선 순위가 같은 작업 예약 (인쇄 대기열)
- 선입선출이 필요한 대기열 (티켓 카운터)
- 콜센터 고객 대기시간
- 프로세스 관리

### 큐(Queue) 구현하기

```js
export default class Queue {
  constructor() {
    // item들을 받을 배열 생성
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  // shift를 사용하면 배열 요소가 삭제되므로 배열의 길이만큼 기존 요소들이 앞으로 당겨진다.
  // 따라서 시간복잡도가 O(1)이 아닌 O(n)이 된다.
  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}
```

dequeue의 시간 복잡도를 O(1)로 하기 위해서는 배열이 아닌 연결 리스트를 통해 큐를 구현하면 된다.

### 큐(Queue)의 시간 복잡도

| Big-O     | 삽입 | 삭제 | 접근 | n번째 접근 | 검색 |
| --------- | ---- | ---- | ---- | ---------- | ---- |
| 큐(Queue) | O(1) | O(1) | O(1) | O(n)       | O(n) |
