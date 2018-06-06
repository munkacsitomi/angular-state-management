import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p><i class="fa fa-code"></i> with <i class="fa fa-heart has-text-danger"></i> by Tamas Munkacsi © 2018</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
