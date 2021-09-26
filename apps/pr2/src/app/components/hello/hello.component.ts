import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-mfe-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('Project 2 ngOnInit');
  }

}
