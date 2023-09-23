//for 문
for(let i = 0 ; i <= 10; i += 2){
    console.log(i)
}

//중첩 for문
for(i = 0; i < 10 ; i++){
    for(j = 0; j < 10; j++){
        console.log(`${i} 와 ${j}`)
    }
}

// debugger;

//while문
// 반복할 횟수를 특정할 수 없을때 사용.
let k = Number(prompt('양수를 입력하세요.'));
while(k < 0){
    let k = Number(prompt('양수를 입력하세요.'));
}
alert(`${k}를 입력해 주셨습니다.`)



let fruits = ['apple', 'banana', 'grape']

for(let i =0; i<fruits.length; i++){
    console.log(fruits[i])
}

for(let fruit of fruits){
    console.log(fruit)
}

let numbers = [3,4,1,6,7,3]
let fruit2 = ['사과','바나나','딸기']

fruit2.forEach(function(fruit, index, arr){
    console.log(fruit, index)
})

numbers.forEach((num,i)=>console.log(num,i))
