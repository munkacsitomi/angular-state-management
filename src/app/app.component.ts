import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="site">
      <app-header></app-header>

      <section class="section site-content">
        <div class="container">
          <div class="columns">
            <div class="column">
              <app-parent></app-parent>
            </div>
            <div class="column">
              <app-sibling></app-sibling>
            </div>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
