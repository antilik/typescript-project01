let someVar = 'hello';
console.log('someVar', someVar);
someVar = 20;
console.log('someVar', someVar);
let someArray = [24, 'Tom', false];
console.log('someArray', someArray);
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
let list = [10, 20, 30];
let colors = ["red", "green", "orange", "blue"];
console.log(list[0]);
console.log(colors[1]);
let names = ["Tom", "Bob", "Alice"];
console.log(names[1]);
function getNameDefault1(firstName, lastName = 'Иванов') {
    return firstName + ' ' + lastName;
}
;
let nameDefault1 = getNameDefault1('Иван', 'Кузнецов');
console.log('nameDefault1', nameDefault1);
let nameDefault2 = getNameDefault1('Вася');
console.log('nameDefault2', nameDefault2);
function defaultSurname() {
    return 'Smith';
}
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
let current = Season.Summer;
console.log("current", current);
let currentValue = Season[2];
console.log("currentValue[]", currentValue);
current = Season.Autumn;
console.log("current", current);
currentValue = Season[3];
console.log("currentValue", currentValue);
function add1(a, b) {
    return a + b;
}
let result1 = add1(1, 2);
console.log("result1", result1);
let add2 = function (a, b) {
    return a + b;
};
let result2 = add2(1, 2);
console.log("result2", result2);
function add3(a, b) {
    let result3 = a + b;
    console.log("result3", result3);
}
;
add3(20, 30);
add3(10, 15);
let koef = 1.5;
function add4(a) {
    let result = a * koef;
    console.log("result", result);
}
;
add4(20);
add4(10);
function add5(a, b) {
    return a + b;
}
let result5 = add5(1, 2);
console.log('result5', result5);
function add6(a, b) {
    console.log("a + b", a + b);
}
add6(10, 20);
function add7(a, b) {
    return a + b;
}
;
let result7 = add7(10, 29);
console.log("result7", result7);
let person = {
    name: 'Tom',
    age: 23,
};
console.log('person', person);
person = { name: 'Alice', age: 22 };
console.log('person', person);
function getName1(firstName, lastName) {
    return firstName + " " + lastName;
}
let name1 = getName1("Иван", "Кузнецов");
function getName2(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
;
let nameGetName2_01 = getName2('Иван', 'Кузнецов');
console.log('nameGetName2_01', nameGetName2_01);
let nameGetName2_02 = getName2('Вася');
console.log("nameGetName2_02", nameGetName2_02);
let sum2 = 36.6;
if (typeof sum2 === 'number') {
    console.log('sum2 / 6', sum2 / 6);
}
;
let someAnyValue1 = 'hello world!';
let strLength1 = someAnyValue1.length;
console.log('strLength', strLength1);
let someUnionValue1 = 'hello work';
strLength1 = someUnionValue1.length;
console.log('strLength:', strLength1);
let someAnyValue2 = 'hello world!';
let strLength2 = someAnyValue2.length;
console.log('strLength2', strLength2);
let someUnionValue2 = 'hello work';
strLength2 = someUnionValue2.length;
console.log('strLength2', strLength2);
let userInfo;
userInfo = ["Tom", 28];
console.log("userInfo[1]", userInfo[1]);
userInfo[1] = 37;
let id;
id = "1345dgg5";
console.log('id', id);
id = 234;
console.log('id', id);
console.log('typeof(id)', typeof (id));
let sum;
sum = 1200;
if (typeof sum === 'number') {
    let result = sum / 12;
    console.log(result);
}
else {
    console.log('invalid operation');
}
//# sourceMappingURL=main.js.map