// class User1 {
//   id: number;
//   name: string;
//   getInfo(): string {
//     return "id: " + this.id + " name: " + this.name;
//   }
// }

// let tom1: User1 = new User1();
// tom1.id = 1;
// tom1.name = "Tom";
// console.log(tom1.getInfo());

// let alice: User1 = new User1();
// alice.id = 2;
// alice.name = "Alice";
// console.log(alice.getInfo());

class User2 {
  id: number;
  name: string;
  constructor(userId: number, userName: string) {
    this.id = userId;
    this.name = userName;
  }
  getInfo(): string {
    return "id: " + this.id + " name: " + this.name;
  }
}

let tom2: User2 = new User2(1, "Tom");
console.log(tom2.getInfo());
tom2.id = 4;
console.log(tom2.getInfo());

let alice2: User2 = new User2(2, "Alice");
console.log(alice2.getInfo());

// Static properties and methods
class Operation {
  static PI: number = 3.14;
  static getSquare(radius: number): number {
    return Operation.PI * radius * radius;
  }
}
let result6 = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + result6);

let result8 = Operation.PI * 30 * 30;
console.log(result8);
