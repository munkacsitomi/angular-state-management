import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-parent',
  template: `
    <h2 class="title">Parent Component</h2>
    <p class="has-text-primary">{{ message }}</p>
  `,
  styles: []
})
export class ParentComponent implements OnInit {
  message: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentMessage$.subscribe(message => (this.message = message));
  }
}
