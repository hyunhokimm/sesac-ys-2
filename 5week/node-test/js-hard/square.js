class Shape {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  getArea() {
    console.log(`넓이는 ${this.col * this.row} 입니다.`);
  }
}

class Rectangle extends Shape {
  constructor(col, row) {
    super(col, row);
  }
  diagonal() {
    console.log(`대각선의 길이는 ${Math.sqrt(this.col ** 2 + this.row ** 2)}`);
  }
}

class Triangle extends Shape {
  constructor(col, row) {
    super(col, row);
  }
  getArea() {
    console.log(`삼각형의 넓이는 ${(this.col * this.row) / 2} 입니다.`);
  }
}

class Circle extends Shape {
  constructor(height, width, radius) {
    super(height, width);
    this.radius = radius;
  }

  getArea() {
    console.log(`원의 넓이는 ${this.radius * this.radius * 3.14}`);
  }
}

const rectangle = new Rectangle(6, 8);
rectangle.getArea();
rectangle.diagonal();

const triangle = new Triangle(4, 5);
triangle.getArea();

const circle = new Circle(12, 12, 6);
circle.getArea();
