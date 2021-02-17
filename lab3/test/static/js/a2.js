
var s_name = { //Global variable
    name: "Student1",
    age: 20,
    gpa: 3.2
}


function hi(){ //new block
    if(s_name["gpa"] >= 3.5){
        console.log("hello " + s_name["name"]);

    }
    else{
        console.log("Student gpa less than 3.5");
    }
}
hi();