class User2 {
    constructor(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    getInfo() {
        return "id: " + this.id + " name: " + this.name;
    }
}
let tom2 = new User2(1, "Tom");
console.log(tom2.getInfo());
tom2.id = 4;
console.log(tom2.getInfo());
let alice2 = new User2(2, "Alice");
console.log(alice2.getInfo());
class Operation {
    static getSquare(radius) {
        return Operation.PI * radius * radius;
    }
}
Operation.PI = 3.14;
let result6 = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + result6);
let result8 = Operation.PI * 30 * 30;
console.log(result8);
//# sourceMappingURL=class.js.map