// 배열과 for문을 함께
// 비슷한 특징을 가진값을 모아둠

// 초기값; 조건문; 증감문
for (let i = 0; i < 10; i++) {
  // 0,1,2,3,4,5,6,7,8,9 => 10번
  // 명령문(반복하고 싶은 코드)
  console.log(i, "안녕?");
}
console.log("끝");

// let i;
// for(i = 0; i < 10; i++) {
//     // 명령문(반복하고 싶은 코드)
// }

// 중첩 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 초기값; 조건식; 증감문
for (let i = 0; i < 10; i = i + 2) {
  console.log(`i: ${i}`);
}
for (let i = 10; i > 0; i--) {
  console.log(`i: ${i}`);
}
for (let i = 10; i > 0; i = i - 3) {
  console.log(`i: ${i}`);
}
