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

  addTodo(title: string) {
    this.todos.push({
      title: `${title} ${Math.floor(Math.random() * 1000)}`,
    });
    console.log(this.todos);
    
  }

}
