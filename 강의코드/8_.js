let fruits = ["apple", "banana", "grape"];
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for / of 문
// let 변수이름 of 배열(위에서 선언해둔)
for (let fruit of fruits) {
  console.log(fruit);
}
