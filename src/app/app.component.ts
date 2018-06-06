import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular State Management Service</h1>
    <p>This is a simple example how to share state between components with RxJS in an Angular service.</p>
    <app-parent></app-parent>
    <app-sibling></app-sibling>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
