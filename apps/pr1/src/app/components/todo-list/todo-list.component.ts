import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: any[] = [];

}
