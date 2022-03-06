import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // window.addEventListener(
    //   'MyEventType',
    //   function (event: CustomEvent) {
    //     alert(event.detail);
    //   },
    //   false
    // );
  }

  title = 'shell';
}
