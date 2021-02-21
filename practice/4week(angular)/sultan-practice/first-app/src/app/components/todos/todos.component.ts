import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  inputToDo!: string;
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'fist task',
        completed: false
      },
      {
        content: 'second task',
        completed: true
      }
    ]
  }
  toggleDone(id: number){
    //this.todos[id].completed = !this.todos[id].completed;
    this.todos.map((v, i) => {
      if(i === id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
     
  }

  addTodo(){
    if(this.inputToDo !== ''){
      this.todos.push(
        {
          content: this.inputToDo,
          completed: false
        }
      );
    }

    this.inputToDo = '';
  }
}
