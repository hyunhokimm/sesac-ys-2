const fruits = ["banana", "apple", "grape"];

const [banana2, apple2, grape2] = fruits;

hh = {
  name: "hyunho",
  age: 1,
  gender: "남",
};

oo = {
  name: "kookgin",
  age: 1,
  gender: "여",
};

[hh, oo] = [oo, hh];

console.log(hh);
console.log(oo);

const word1 = "abc";
const word2 = "xyz";
const word3 = [...word1, ...word2];
console.log(word3);
const kk = { ...hh, adress: "seoul" };
console.log(kk);
// const { name, age, gender } = obj;
