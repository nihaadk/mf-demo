import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }

}
