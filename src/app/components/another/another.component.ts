import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-another',
  template: `
    <h2 class="title">Another Component</h2>
    <p class="has-text-primary">{{ selectedValue }}</p>
    <div class="select is-primary">
      <select [ngModel]="selectedValue" (ngModelChange)="modelChanged($event)">
        <option>First option</option>
        <option>Second option</option>
      </select>
    </div>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {
  selectedValue: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentMessage$.subscribe(message => (this.selectedValue = message));
  }

  modelChanged(selectedOption) {
    this.sharedService.changeMessage(selectedOption);
  }
}
