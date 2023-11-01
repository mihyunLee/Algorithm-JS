## 해시(Hash)

해시는 내부적으로 배열을 사용하여 데이터를 저장하기 때문에 빠른 검색 속도를 가진다.
데이터의 삽입과 삭제 시 기존 데이터를 밀어내거나 채우는 작업이 필요 없도록 특별한 알고리즘을 이용하여 데이터와 연관된 고유한 숫자를 만들어 낸 뒤 이를 인덱스로 사용한다.
이 알고리즘을 구현한 메소드를 Hash Method라고 하며, Hash Method에 의해 반환된 데이터 고유의 숫자 값을 Hash Code라고 한다.

키에 대한 해시 값을 구하는 과정을 Hashing(해싱)이라고 하며 이 때 사용하는 함수(알고리즘)을 해시 함수라고 한다.
해시 값 자체를 index로 사용하기 때문에 평균 시간복잡도가 O(1)이 된다.

### 해시 테이블(Hash Table)

- Key와 Value가 쌍을 이룬 형태로 데이터가 저장되어 있는 자료구조형이다.
- 배열에서의 key는 오직 index만 지칭한다면, 해시 테이블에서는 문자열 또한 Key가 될 수 있다.
- 기존 자료구조인 이진탐색트리나 배열에 비해 굉장히 빠른 속도이다.

### 속성

- insert(A): Key A를 해시 테이블에 넣는다.
- search(A): Key A를 해시 테이블에서 찾는다.
- remove(A): Key A를 해시 테이블에서 삭제한다.

### 해시 테이블 예시

> 중복 확인, 빠른 탐색, 삽입, 삭제 속도를 가진다.

- 전화번호 조회
- 중복된 항목 방지
- 해시 테이블을 캐시로 사용
- 어떤 항목과 다른 항목의 관계를 모형화하기 좋다.

### 해시 충돌 (Hash Collision)

Key와 Value로 이루어져 있는 해시 테이블 특성 상 성능이 뛰어난 자료구조이지만, 모든 경우에서 사용하지 못하는 이유는 바로 '해시 충돌'때문이다.
해시 충돌이란 해시 함수를 통해 각각의 다른 Key가 동일한 Hash code가 되는 것을 말한다.
해시 테이블에서는 충돌에 의한 문제를 **분리 연결법(Separate Chaining)**과 **개방 주소법(Open Addressing)** 크게 2가지로 해결하고 있다.

### 분리 연결법(Separate Chaining)

- 충돌이 일어날 경우 데이터들을 포인터를 이용하여 서로 링크드 리스트(체인)형태로 연결한다.
- key 값을 포인터로 이어서 연결한다.
- 최악의 경우 모든 데이터가 같은 해시 값을 가져 O(n)의 복잡도를 가진다.

#### 장점

- 제한된 bucket을 효율적으로 사용할 수 있다.
- 공간을 미리 할당할 필요가 없어 메모리 사용량을 줄여준다.
- 연결리스트를 사용하면 추가할 수 있는 데이터의 제약이 줄어든다.

#### 단점

- 다양한 key에 동일한 hash가 있고, 하나의 bucket에 여러 항목이 있는 경우 검색 효율성이 저하된다.
- 연결리스트를 사용하려면 추가 메모리가 필요하다.
- 최악의 경우 모든 노드가 동일한 버킷에 삽입될 수 있다.

#### 시간 복잡도

- 최악의 경우
  - O(n)
  - 모든 key가 하나의 slot으로 해싱되는 경우 길이가 n인 연결리스트가 생성될 수 있다.
- 평균 수행 시간
  - O(1 + α) (α = 적재율(Load factor))
  - 테이블 slot에 접근하기 위해 O(1)의 시간이 걸리고, 해당 슬롯에 있는 리스트를 검색하기 위해 O(α)의 시간 복잡도를 가진다.

### 개방 주소법 (Open Addressing)

- 연결리스트와 같은 추가적인 메모리를 사용하는 Chaining 방식과 다르게 비어있는 해시 테이블의 공간을 활용한다.
- 분리 연결법보다 메모리를 덜 차지한다.
- 해시 테이블은 해시 1개와 값 1개가 일치하는 형식으로 유지되며, 버킷에서 충돌이 발생할 시 index(해시)가 변경되어 다른 버킷에 저장된다.
- 포인터를 쓰지 않아 오버헤드를 방지할 수 있고, 데이터가 적을 경우 연속된 공간에 인자를 저장하기 때문에 공간 효율이 높다.

#### 개방 주소법을 구현하기 위한 방법

1. Linear Probing

   현재의 버킷 index로부터 고정 폭 만큼씩 이동하여 차례대로 검색해 비어 있는 버킷에 데이터를 저장한다.

- 장점
  - 구현이 쉽다.
- 단점
  - primary clustering 문제
    - 연속된 데이터 그룹이 생기는 현상을 클러스터링(clustering)이라고 한다. 클러스터링은 탐색 시간을 오래 걸리게 하여 해싱 효율을 떨어트리게 된다.
    - 탐색 간격을 1 이외에 다른 값으로 정할 수 있는데, 테이블의 크기 값과 서로소 관계에 있는 소수로 정해야 클러스터링 현상을 줄일 수 있다.

2. Quadratic Proving

   해시의 저장 순서 폭을 제곱으로 저장하는 방식이다.
   처음 충돌이 발생한 경우에는 1만큼 이동하고, 그 다음 계속 충돌이 발생하면 2^2, 3^2 칸씩 옮기는 방식이다.

- 장점
  - 선형 탐색보다 클러스터링이 적게 일어난다.
- 단점
  - Secondary clustering 문제
    - 두 key의 처음 probe 값이 동일하다면 빈 slot을 찾는 과정이 동일하므로 같은 slot을 탐색한다.
    - 즉, 처음 충돌한 위치가 같다면 다음 충돌할 위치에서도 반복적으로 계속 충돌이 발생한다.

3. Double Probing

해시된 값을 한번 더 해싱하여 해시의 규칙성을 없애버리는 방식이다. 해시된 값을 한번 더 해싱하여 새로운 주소를 할당하기 때문에 다른 방법들보다 많은 연산을 하게 된다.

- 장점
  - 선형 탐색보다 클러스터링이 적게 일어난다.
- 단점
  - Secondary clustering 문제
    - 두 key의 처음 probe 값이 동일하다면 빈 slot을 찾는 과정이 동일하므로 같은 slot을 탐색한다.

### 해시테이블 구현하기

```js
//  string 자료형의 key에 해당하는 공간에 string 자료형의 value를 집어넣은 것
const person = {};
person["firstName"] = "Kelly";
person["lastName"] = "Park";

// 1. Hash Table 생성

class HashTable {
  table = new Array(3);
  // 해시 테이블 사이즈에 바로 접근 할 수 있도록 변수 생성, setItem 할 때마다
  // numItem++되어 table에 들어있는 개수를 그때 그때 반영
  // 이 값을 활용하여, table의 길이 대비 현재 들어있는 값의 개수를 연산해
  // 특정 수준 이상으로 값이 할당이 되면 table의 길이를 늘림
  numItems = 0;

  setItem = (key, value) => {
    this.numItems++;

    // table 원소 개수가 80%이상 차있는 경우 resize()
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor >= 0.8) {
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  // 만약 배열의 크기를 3에서 6으로 두 배를 했다면, 그보다 큰 소수인 7을 새로운 table의 크기로 설정해주는 것이다.
  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  // getItem에서도 값을 가져오기 원하는 key를 해시 함수로 변환해서 table[3]의 값을 리턴하도록 한다.
  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    // 값이 없는 경우 null;
    if (!this.table[idx]) return null;

    // 단순히 전체 table의 index로 접근 = O(1) but array.find를 사용하면 O(n)으로 증가함
    return this.table[idx].find((el) => el[0] === key)[1];
  };
}

// 2.  해시 함수(Hash Function)가 필요한 이유

function hashStringToInt(s, tableSize) {
  let hash = 17;
  // return 3; 항상 table[3] index 중복 해시 충돌 발생
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}
```
