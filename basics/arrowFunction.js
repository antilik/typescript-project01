let sum3 = (x, y) => x + y;
let result3 = sum3(15, 35);
console.log("result3", result3);
let sum4 = (x, y) => x + y;
let result4 = sum4(15, 35);
console.log("result4", result4);
let square = x => x * x;
let helloWorld = () => "hello world!";
console.log("square: ", square(5));
console.log("helloWorld: ", helloWorld());
let sum5 = (x, y) => {
    x *= 2;
    return x + y;
};
let resultOfSum5 = sum5(15, 37);
console.log("resultOfSum5: ", resultOfSum5);
function mathOp2(x, y, operation) {
    let result6 = operation(x, y);
    return result6;
}
console.log("mathOp2 arrowSum: ", mathOp2(10, 20, (x, y) => x + y));
console.log("mathOp2 arrowMultiply: ", mathOp2(10, 20, (x, y) => x * y));
//# sourceMappingURL=arrowFunction.js.map