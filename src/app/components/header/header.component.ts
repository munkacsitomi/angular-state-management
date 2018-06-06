import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Angular State Management Service
          </h1>
          <h2 class="subtitle">
            This is a simple example how to share state between components with RxJS in an Angular service.
          </h2>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
