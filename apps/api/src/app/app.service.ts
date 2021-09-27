import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class AppService {
  private todos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' },
    { title: 'Todo 3' },
    { title: 'Todo 4' },
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  setTodo(title: string): void {
    this.todos.push({
      title,
    });
  }
}
