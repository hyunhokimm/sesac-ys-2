
//
let box = document.getElementById('box')
console.log(box)

let box2 = document.getElementsByClassName('box')

console.log(box2[0])

let elByTag = document.getElementsByTagName('span')

console.log(elByTag[0].outerText)

let email = document.getElementsByName('email')

console.log(email[0])


//쿼리 선택자
let elBySelector = document.querySelector('.box')//선택자를 이용하여 요소 선택
let elBySelectorAll = document.querySelectorAll('.box')

console.log(elBySelector, elBySelectorAll)

let box3 =document.getElementById('box2')


console.log(box3.innerText)
console.log(box3.innerHTML)

box3.innerText = 'hello hh'

//innerText와 다른점은 태그도 넣을수 있다.
box3.innerHTML = '<h1>태그가 바뀌었습니다.<h1>'