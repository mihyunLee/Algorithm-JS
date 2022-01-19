// 1. 기본 (116ms)
console.log("강한친구 대한육군");
console.log("강한친구 대한육군");

// 2. for문 (108ms)
for (i = 0; i < 2; i++) {
  console.log("강한친구 대한육군");
}

// 3. do..while문 (108ms)
i = 0;
do {
  i += 1;
  console.log("강한친구 대한육군");
} while (i < 2);

// 4. while문 (112ms)
i = 0;
while (i < 2) {
  i += 1;
  console.log("강한친구 대한육군");
}
