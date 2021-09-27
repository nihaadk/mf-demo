import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Todo {
  title: string;
}

@Component({
  selector: 'ng-mfe-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription.add(
      this.http.get(environment.api + 'todos').subscribe((todos: Todo[]) => {
        console.log(todos);
        this.todos = todos
        
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
