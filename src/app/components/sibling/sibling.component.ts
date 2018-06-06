import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sibling',
  template: `
    <h2 class="title">Sibling Component</h2>
    <p class="has-text-primary">{{ message }}</p>
    <input class="input is-primary" type="text" name="message" (keyup)="newMessage($event)">
  `,
  styles: []
})
export class SiblingComponent implements OnInit {
  message: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentMessage$.subscribe(message => (this.message = message));
  }

  newMessage(newMessage) {
    this.sharedService.changeMessage(newMessage.target.value);
  }
}
