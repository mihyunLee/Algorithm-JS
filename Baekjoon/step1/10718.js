// 1. 기본 (116ms)
console.log("강한친구 대한육군");
console.log("강한친구 대한육군");

// 2. for문 (108ms)
for (let i = 0; i < 2; i++) {
  console.log("강한친구 대한육군");
}

// 3. do..while문 (108ms)
let i = 0;
do {
  i += 1;
  console.log("강한친구 대한육군");
} while (i < 2);

// 4. while문 (112ms)
i = 0; // 3번에서 let으로 이미 선언했으므로 let 사용하지 않기
while (i < 2) {
  i += 1;
  console.log("강한친구 대한육군");
}
