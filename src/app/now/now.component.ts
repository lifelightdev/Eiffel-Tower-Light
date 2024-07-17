import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {SolarService, SunPosition } from '../solar.service';

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
  public sunset = new Date();
  sunPosition: SunPosition | undefined;

  constructor(private solarService: SolarService) {
    setInterval(() => this.refresh(), 1000);
    solarService.recherchePositionSoleil().subscribe(data => {
      console.log(("data = " + data.results?.sunset))
      this.sunPosition = data;
    });
  }

  private refresh() {
    this.clock = new Date();
    if (this.sunPosition?.results?.sunset) {
      this.sunset = this.sunPosition?.results?.sunset;
    }
  }

}
