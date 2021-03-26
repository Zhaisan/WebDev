let a = 1;
let b = '1';

console.log(a === b);

console.log(0 == '');
console.log(0 == []);
console.log(false == []);
console.log(false == '');

function sum(a, b){
  return a + b; // '2' + 4
}

console.log(sum('2', 4));

let num = 2;
num = 'hello';