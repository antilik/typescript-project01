type stringOrNumberType = number | string;

let sum2: stringOrNumberType = 36.6;
if (typeof sum2 === 'number'){
  console.log('sum2 / 6',sum2 / 6);
};

// --------type Assertion--------
// первая форма
let someAnyValue1: any = 'hello world!';
let strLength1: number = (<string>someAnyValue1).length;
console.log('strLength', strLength1); // 12

let someUnionValue1: string | number = 'hello work';
strLength1 = (<string>someUnionValue1).length;
console.log('strLength:', strLength1); // 10

//вторая форма
let someAnyValue2: any = 'hello world!';
let strLength2: number = (someAnyValue2 as string).length;
console.log('strLength2',strLength2); //12

let someUnionValue2: string | number = 'hello work';
strLength2 = (someUnionValue2 as string).length;
console.log('strLength2',strLength2); // 10