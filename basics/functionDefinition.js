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
//# sourceMappingURL=functionDefinition.js.map