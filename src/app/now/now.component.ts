import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {SolarService, SunPosition} from '../solar.service';

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
  private firstDayOfSeason = 21;
  private firstMonthOfSeason = 5; // June
  private lastMonthOfSeason = 8; // Seprember

  constructor(private solarService: SolarService) {
    setInterval(() => this.refresh(), 1000);
    solarService.recherchePositionSoleil().subscribe(data => {
      this.sunPosition = data;
    });
  }

  private refresh() {
    this.clock = new Date();
    if (this.sunPosition?.results?.sunset) {
      this.sunset = this.sunPosition?.results?.sunset;
    }
  }

  public isSummer(summer: Date): boolean {
    if (summer.getMonth() >= this.firstMonthOfSeason && summer.getMonth() <= this.lastMonthOfSeason) {
      if (summer.getMonth() == this.firstMonthOfSeason) {
        if (summer.getDate() >= this.firstDayOfSeason) {
          return true;
        } else {
          return false;
        }
      } else if (summer.getMonth() == this.lastMonthOfSeason) {
        if (summer.getDate() < this.firstDayOfSeason) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
    return true;
  }

}
