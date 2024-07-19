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
  private firstMonthOfSummer = Month.June;
  private lastMonthOfSummer = Month.September;

  constructor(private solarService: SolarService) {
    setInterval(() => this.refresh(), 1000);
    solarService.findSunPositionAtEiffelTower().subscribe(data => {
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
    if (this.isCompleteSummerMonth(summer)) {
      return true;
    }
    if (summer.getMonth() == this.firstMonthOfSummer && summer.getDate() >= this.firstDayOfSeason) {
      return true;
    }
    if (summer.getMonth() == this.lastMonthOfSummer && summer.getDate() < this.firstDayOfSeason) {
      return true;
    }
    return false;
  }

  private isCompleteSummerMonth(summer: Date) {
    return summer.getMonth() > this.firstMonthOfSummer && summer.getMonth() < this.lastMonthOfSummer;
  }
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}
