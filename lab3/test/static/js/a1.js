console.log("Hello from JS");


console.log(typeof(a));
console.log(typeof({'id': 2})); //object
console.log(typeof(undefined)); //undefined
console.log(typeof(Symbol('a'))); //symbol
console.log(typeof(function(){})); //function


var a;
console.log(a);
console.log(a == undefined); //true

let b = 3;
console.log(b);

const c = 4; //then we cannot change this variable
console.log(c);
