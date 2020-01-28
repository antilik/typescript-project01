const el = this.document.getElementById("content");
class User {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
let tom = new User("Tom", 29);
console.log(tom);
const info = `Имя : ${tom.name} 
возраст : ${tom.age}`;
el.innerHTML = info;
let x1 = 10;
let hello = "hello world";
let isValid = true;
let isAlive = true;
console.log("isAlive:", isAlive);
let a = undefined;
let b = null;
console.log(a, b);
let x2 = undefined;
console.log(x2);
x2 = null;
console.log(x2);
x2 = 5;
console.log(x2);
//# sourceMappingURL=app.js.map