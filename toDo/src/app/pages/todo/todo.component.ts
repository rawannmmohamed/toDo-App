import { Component, OnInit } from '@angular/core';
import { ITodoStatus, TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo.service';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { FormBuilder, FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { ITodo } from '../../core/models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent,SlidePanelComponent,ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  todoForm!:FormGroup;
  todos:ITodo[]=[];
  todoStatus=ITodoStatus;
  isSlidePanelOpen =false;
constructor(private todoService:TodoService, private fb: FormBuilder){
  this.todoForm = this.fb.group({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    status:new FormControl('OPEN',[Validators.required])
  })
}
ngOnInit(): void {
  this.getAllTodos();
}
getAllTodos(){
  this.todos = this.todoService.getTodos()
}
openSlidePanel(){
  this.isSlidePanelOpen=true;
}
onCloseSlidePanel(){
 this.isSlidePanelOpen =false;
}
onSumbit(){
  if(this.todoForm.valid){

  }else{
    this.todoForm.markAllAsTouched();
  }
}

}
