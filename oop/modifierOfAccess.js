class User3 {
}
class User4 {
    constructor(name, age) {
        this._name = name;
        this._year = this.setYear(age);
    }
    setYear(age) {
        return new Date().getFullYear() - age;
    }
    displayYear() {
        console.log("Год рождения: " + this._year);
    }
    displayName() {
        console.log("name: " + this._name);
    }
}
let tom3 = new User4("Tom", 24);
tom3.displayName();
tom3.displayYear();
class User5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log("name: " + this.name + "; age: " + this.age);
    }
}
class Employee extends User5 {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    showData() {
        console.log("Age: " + this.age);
        console.log(this.company);
    }
}
let employee1 = new Employee("Anton", 22, "Freelance");
employee1.showData();
employee1.displayInfo();
//# sourceMappingURL=modifierOfAccess.js.map