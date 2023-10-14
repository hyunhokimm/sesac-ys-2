function call(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('back');
      res('back');
    }, 1000);
  });
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('callback hell');
    }, 1000);
  });
}

async function nameCall() {
  const a = await call('kim');
  console.log(`${a} 반가워`);
  const b = await back();
  console.log(`${b} 를 실행했구나.`);
  const c = await hell();
  console.log(`여기는 ${c}`);
}

nameCall();
