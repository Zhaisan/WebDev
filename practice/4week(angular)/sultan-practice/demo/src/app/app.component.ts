import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  message: string;
  num: number;
  numbers: number[] = [3, 4, 10, 2];
  flag: boolean;
  display: string;
  todoList: string[] = [];
  students: any [] = [
    {
      id: '19BD30552',
      full_name: 'Student 1',
    },
    {
      id: '19BD30553',
      full_name: 'Student 2',
    },
    {
      id: '19BD30554',
      full_name: 'Student 3',
    }

  ];

  

  constructor(){

    console.log("constructor running");
    this.message = "Message1";
    this.num = 10;
    this.flag = false;
    //we didnt initialized students and numbers 
    //because they are objects,not primitive data types
    this.display = '';
  }
  btnClicked(){
    this.flag = !this.flag;
  }
  addTodo(){
    if(this.display !== ''){
      this.todoList.push(this.display);
    }
    this.display = '';
  }
  removeTodo(index: number){
    this.todoList.splice(index, 1);
  }
}
