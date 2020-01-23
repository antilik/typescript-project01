let id : number | string;
id = "1345dgg5";
console.log('id',id);
id = 234;
console.log('id',id)
console.log('typeof(id)',typeof(id));

let sum: any;
sum = 1200;
if (typeof sum === 'number') {
  let result: number = sum / 12;
  console.log(result);
} else {
  console.log('invalid operation');
}

