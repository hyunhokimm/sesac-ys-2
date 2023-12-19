function printXY(x: number, y: number) {
  console.log(x, y);
}

printXY(1, 3);

function sctPrintXY(x: string, y: string) {
  console.log(x, y);
}

function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}

function arrLength<T>(arr: T[]) {
  return arr.length;
}

printXYByGeneric<string>("a", "b");
printXYByGeneric<any>("a", 3);

sctPrintXY("x", "y");

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  a: string;
  b: string;
}

const samsung22: Phone<SamsungOption> = {
  company: "samsung",
  model: "22",
  option: {
    a: "a",
    b: "b",
  },
};

function arrElement<T>(Arr: T[], num: number): T[] {
  return Arr.splice(num, 1);
}

console.log(arrElement<string>(["a", "b"], 1));
