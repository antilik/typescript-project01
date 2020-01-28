// Function return number
function add5(a: number, b: number): number {
  return a + b;
}

let result5 = add5(1,2);
console.log('result5',result5);

// Function return nothing
function add6(a: number, b: number): void {
  console.log("a + b", a + b);
}
add6(10, 20);

function add7(a: number, b: number) {
  return a + b;
};
let result7 = add7(10,29);
console.log("result7", result7);
