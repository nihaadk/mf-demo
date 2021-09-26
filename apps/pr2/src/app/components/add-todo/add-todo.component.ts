import { TodoService } from './../../../../../../libs/shared/data/src/lib/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-mfe-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  form: FormGroup = {} as FormGroup;

  constructor(private todoService: TodoService) { }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  addNewTodo() {
    const title: string = this.form.value.title;
    console.log(title);
    this.todoService.addTodo(title)
  }

}
