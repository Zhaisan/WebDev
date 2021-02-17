function greeting(){ //function declaration
    console.log("hello");
}
greeting();

function square1(v){ 
    return v * v;
}
console.log(square1(3));

let greeting2 = function(){ //function expression
    console.log("hello2");
};
greeting2();

let square = (a) => a * a; //arrow function
console.log(square(4));


let sum = (a, b) => a + b;
console.log(sum(3, 4));

let mult = (a, b) => { //arrow with more lines
    let c = a * b;
    return c;
}
console.log(mult(3, 4));

let student = {   //object property
    id: '2020BD121212',
    s_name: 'Student 1',
    show: function(){
        console.log(this.id + " => " + this.s_name);
    }
}

student.show(); //2020BD121212 => Student 1
