let num = 5;
let num2 = num

let arr = [1,2,3,4,5];
let arr2 = arr;
arr2.reverse()

console.log(num2, arr2)

let date = new Date().getTime()
let expired = new Date('2023-09-30')

if(expired > date){
    console.log('만료일을 지켜주세요.')
} else{
    console.log('만료일이 지났습니다.')
}

// console.log(date.getMonth()+1)