// for문 while문 차이
// for문 : 반복할 횟수를 특정할 수 있을 때
// while : 반복할 횟수를 특정할 수 없을 때
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0; // 초기식
while (i < 10) {
  // 조건
  // 조건이 true일 경우 실행할 명령문
  console.log(i);
  i++; // 증감문
  let j = 0;
  while (j < 10) {
    console.log(j);
    j++;
  }
}
