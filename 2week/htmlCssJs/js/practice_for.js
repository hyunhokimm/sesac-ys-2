
let nums = Number(prompt())
let star = ''
for(i = 1 ; i <= nums; i++){
    star +='*'
    console.log(star)
}


let numbers =[]
for(let i = 1 ; i <=100 ; i++){
    numbers.push(i)
}
console.log(numbers)


//for문 실습
let j = 0
for(i = 0; i< 100; i++){
    j +=numbers[i]
}
console.log(j)


//for of 문 실습
let k = 0;
for(num of numbers){
    k += num
}
console.log(k)


//for each 문 실습

let l = 0;
numbers.forEach((num)=>{
    l += num
})

console.log(l)
