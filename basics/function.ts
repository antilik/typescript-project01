function sum1(x: number, y: number): number {
  return x + y;
}

function subtrack(a: number, b: number): number {
  return a - b;
}

let op: (x: number, y: number) => number;
op = sum1;
console.log("sum1", op(2, 4)); //6

op = subtrack;
console.log("subtrack", op(6, 4));
