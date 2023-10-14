function red() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'red';
      res();
    }, 1000);
  });
}

function orange() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'orange';
      res();
    }, 1000);
  });
}

function yellow() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'yellow';
      res();
    }, 1000);
  });
}

function green() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'green';
      res();
    }, 1000);
  });
}

function blue() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'blue';
      res();
    }, 1000);
  });
}

red()
  .then(() => orange())
  .then(() => yellow())
  .then(() => green())
  .then(() => blue())
  .catch(() => console.log('err'))
  .finally(() => console.log('완료'));
