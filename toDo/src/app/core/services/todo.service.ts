import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 todos:ITodo[]=[
    {
      id:1,
      title:"Buy groceries",
      description:"Milk, bread,Eggs",
      status:'OPEN'
    }
  ]
  constructor() {

   }
   getTodos(){
    return this.todos;
   }

}
