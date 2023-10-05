let num = 5;
let num2 = num;
num2 += 5;
console.log(num, num2);

let arr = [1, 2, 3, 4, 5];
let arr2 = arr;
arr2.reverse();
console.log(arr, arr2);

var arr3 = [1, 2, 3, 4];
var arr4 = arr3.slice();

arr4.reverse();
console.log(arr3, arr4);

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getHours());

let expired = new Date("2023-09-22").getTime();
let today = new Date().getTime();

if (expired < today) {
  console.log("만료일이 지났어요ㅜㅜ");
} else {
  console.log("사용할 수 있어요");
}
