console.log(2 == '2'); //true
console.log(2 === '2'); //false 

let arr = [12, 23, 31, 40];
arr.push(55); 
arr.pop();
console.log(arr.length);
console.log(arr.indexOf(31));

arr.find(function(v){
    if(v == 23)
    console.log('hi')
});  //hi

let b = arr.slice(2, 4); //just get interval
console.log(arr); //12 23 31 40 
console.log(b); //31 40

arr.splice(2, 1);
console.log(arr); //12 23 40 starting from 2nd index delete 1 element

let c = arr.map(function(v){
    return v + 5;
});
console.log(c); //17 28 45 adding 5 to each

let d = c.filter(function(v){
    return v > 20;
});
console.log(d); //28 45 filters array by v > 20

let s = c.reduce(function(sum, v){
    return sum + v;
}, 0);
console.log(s);


// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//OR:

// for(let v of arr){
//     console.log(v);
// }

//OR:

// arr.forEach(function(v){
//     console.log(v);
// });

//OR:

// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

for(let v of arr){
    console.log(v);
}