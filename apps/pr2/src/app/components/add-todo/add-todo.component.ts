import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-mfe-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit, OnDestroy {
  form: FormGroup = {} as FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  addNewTodo() {
    const title: string = this.form.value.title;
    this.subscription.add(
      this.http.post(environment.api + 'todos', {title }).subscribe((res) => {
        console.log(res);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
