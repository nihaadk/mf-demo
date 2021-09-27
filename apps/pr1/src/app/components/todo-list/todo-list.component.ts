import { Component } from '@angular/core';

export interface Todo {
  title: string;
}

@Component({
  selector: 'ng-mfe-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

}
