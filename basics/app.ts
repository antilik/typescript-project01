const el = this.document.getElementById("content");

class User {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
} // Something

let tom: User = new User("Tom", 29);
console.log(tom);
const info: string = `Имя : ${tom.name} 
возраст : ${tom.age}`;
el.innerHTML = info;

let x1: number = 10;
let hello: string = "hello world";
let isValid: boolean = true;

let isAlive: boolean = true;

console.log("isAlive:", isAlive);

let a: undefined = undefined;
let b: null = null;
console.log(a, b);

let x2: number = undefined;
console.log(x2);

x2 = null;
console.log(x2);

x2 = 5;
console.log(x2);
