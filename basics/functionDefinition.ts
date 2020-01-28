function add1(a: number, b: number): number {
  return a + b;
}

let result1 = add1(1,2);
console.log("result1", result1);

//---------------------
let add2 = function(a: number, b: number): number {
  return a + b;
};

let result2 = add2(1,2);
console.log("result2",result2);

//--------------------
function add3(a: number, b: number) {
  let result3 = a + b;
  console.log("result3", result3);
};

add3(20, 30); //50
add3(10, 15); //25
// add3('1','2');// ошибка компилятора, поскольку нужен тип number
 
//------------------
let koef: number = 1.5;
function add4(a: number){
  let result  = a *koef;
  console.log("result",result);
};

add4(20); //30
add4(10); //15