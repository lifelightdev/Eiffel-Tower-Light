import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-now',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './now.component.html',
  styleUrl: './now.component.css'
})
export class NowComponent {
  public clock = new Date();

  constructor() {
    setInterval(() => this.refresh(), 1000)
  }

  private refresh() {
    this.clock = new Date();
  }

}
