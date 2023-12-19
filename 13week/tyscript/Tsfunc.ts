function sum1(a: number, b: number) {
  console.log(a + b);
}

sum1(5, 11);

function sum2(...a: number[]) {
  return [...a].reduce((fir, th) => fir + th, 0);
}

console.log(sum2(2, 3, 4, 5));
