function run() {
  console.log("3초 뒤 실행");
}

console.log("시작");
// 콜백함수 - 함수의 인자로 함수를 넣는 것
setTimeout(run, 3000);
console.log("끝");
