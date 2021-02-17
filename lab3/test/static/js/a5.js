// Hoisting

console.log(a);
var a = 2;

console.log(sum(2, 4));

function sum(a, b){
    return a + b;
} //output is 6 even we print before function



// let i = 0;
// function show(){
//     console.log(i++);
// }
// setTimeout(show, 4000); 
//setInterval(show, 1000);

function f1(callback){
    setTimeout(function(){
        console.log('f1 function');
        callback();
    }, 2000);
}

function f2(){
    console.log('f2 function')
}

f1(f2);
// f2();

let a = {
    id: '123',
    num: [1, 2, 'hello'],
    b: true
}

let s = JSON.stringify(a);
let b = JSON.parse(s);

console.log(typeof(s)); 
console.log(b);

a = undefined;

let p = a && a['id'];
console.log(p); //undefined
console.log(a['id']); //123

function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
let user = new User("Jack");
  
alert(user.name); // Jack
alert(user.isAdmin); // false

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear


let arr = [1, 2];
// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let user = users.find(item => item.id == 1);
alert(user.name); // John