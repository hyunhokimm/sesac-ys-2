function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(`상태 fulfilled ! then으로 연결`);
    } else {
      reject(`상태 reject ! catch로 연결`);
    }
  });
}

promise1(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('무조건 실행.');
  });

//   콜백 지옥 예시

// function add(n1, n2, cb) {
//   setTimeout(() => {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n1, cb) {
//   setTimeout(() => {
//     let result = n1 * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n1, cb) {
//   setTimeout(() => {
//     let result = n1 - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log('1 : ', x);
//   mul(x, function (y) {
//     console.log('2 : ', y);
//     sub(y, function (z) {
//       console.log('3 : ', z);
//     });
//   });
// });

// promise 로 변경

function add(n1, n2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let result = n1 + n2;
      res(result);
    }, 1000);
  });
}

function mul(n1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let result = n1 * 2;
      res(result);
    }, 700);
  });
}

function sub(n1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let result = n1 - 1;
      res(result);
    }, 500);
  });
}

add(4, 5)
  .then((result) => {
    return mul(result);
  })
  .then((result) => {
    return sub(result);
  })
  .then((result) => console.log(result));
