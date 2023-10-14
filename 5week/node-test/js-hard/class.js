const cat = {
  name: '나비',
  age: 2,
  mew: function () {
    console.log('야옹');
  },
};

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  mew() {
    console.log(`나는 ${this.name}이고 ${this.age}이다. 야옹~`);
  }
}

const coco = new Cat('코코', 4);
const mimi = new Cat('미미', 10);

coco.mew();
mimi.mew();
