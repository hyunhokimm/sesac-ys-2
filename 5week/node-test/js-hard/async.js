// function goMart() {
//   console.log('마트에서 무엇을 살지 고민중..');
// }

// let product;
// let price;

//  function pickDrink() {
//    setTimeout(function () {
//     console.log('고민끝');
//     product = '제로콜라';
//     price = 1900;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product} 가격은 ${price} 입니다.`);
// }

// goMart();
// pickDrink();
// pay(product, price);

function goMart() {
  console.log('마트에서 무엇을 살지 고민중..');
}

let product;
let price;

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민끝');
      product = '제로콜라';
      price = 1900;
      resolve(true);
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명 : ${product} 가격은 ${price} 입니다.`);
}

goMart();
pickDrink().then(pay(product, price));
// pay(product, price);
