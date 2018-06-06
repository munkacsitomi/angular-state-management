import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sibling',
  template: `
    <h2>Sibling Component</h2>
    <label for="message">Type here: </label>
    <input type="text" name="message" (keyup)="newMessage($event)">
    <p>{{ message }}</p>
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
