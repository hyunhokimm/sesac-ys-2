let str: string = "kim";

const num: number = 5;

const nul: null = null;

const strArr: string[] = ["1", "2"];

const strArr2: (number | string)[] = [1, "2"];
const strArr3: Array<string | number> = [1, "2"];

let drink: [string, number, number, string] = ["1", 1, 2, "3"];
drink[2] = 5;

let drink2: readonly [string, number, number, string] = ["1", 1, 2, "3"];

enum Weather {
  sun = 0,
  rain = 1,
  cloud = 2,
}
const weather = 0;
if (Weather.sun == weather) {
  console.log("따듯하다");
}

let olimpic_newgame: readonly (object | boolean)[] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

console.log(str);
