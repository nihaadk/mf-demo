import { Todo } from './../../../../../../libs/shared/data/src/lib/interfaces/todo.interface';
import { TodoService } from './../../../../../../libs/shared/data/src/lib/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-mfe-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getData();
    console.log(this.todos);
    
  }

}
