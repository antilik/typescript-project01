function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
  return x + y;
}

let resultReloadFunc1 = add(5, 4);
console.log("resultReloadFunc1", resultReloadFunc1);

let resultReloadFunc2 = add("5", "4");
console.log("resultReloadFunc2", resultReloadFunc2);
