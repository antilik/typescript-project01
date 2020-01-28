function mathOp(x, y, operation) {
    let result = operation(x, y);
    return result;
}
let operationFunc;
operationFunc = function (a, b) {
    return a + b;
};
console.log("mathOp sum", mathOp(10, 20, operationFunc));
operationFunc = function (a, b) {
    return a * b;
};
console.log("mathOp multiply", mathOp(10, 20, operationFunc));
//# sourceMappingURL=functionAsParameter.js.map