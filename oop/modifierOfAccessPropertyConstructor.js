class User6 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    displayInfo() {
        console.log("name: " + this._name + "; age: " + this._age);
    }
}
class User7 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log("name: " + this.name + "; age: " + this.age);
    }
}
const user6Private = new User6("Bonny", 33);
user6Private.displayInfo();
const user7Private = new User7("Django", 22);
user7Private.displayInfo();
class User8 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//# sourceMappingURL=modifierOfAccessPropertyConstructor.js.map