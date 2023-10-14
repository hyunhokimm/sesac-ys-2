class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(
      `이 건물은 ${new Date().getFullYear() - this.year} 년 되었습니다.`
    );
  }
}

const kim = new House('kim', 2020);
kim.age();

class Apt extends House {
  constructor(name, age, floor) {
    // 부모의 생성자 호출
    super(name, age);
    this.floor = floor;
  }

  age() {
    super.age();
    console.log(
      `이 건물은 ${new Date().getFullYear() - this.year} 년 되었습니다.\n${
        this.floor
      }층입니다.`
    );
  }
}

const baeck = new Apt('baeck', 2021, 13);

baeck.age();
