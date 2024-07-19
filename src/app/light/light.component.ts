import { Component } from '@angular/core';
import { SunPosition } from '../solar.service';

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [],
  templateUrl: './light.component.html',
  styleUrl: './light.component.css'
})
export class LightComponent {
  public sunset = new Date();
  sunPosition: SunPosition | undefined;
  private firstDayOfSeason = 21;
  private firstMonthOfSummer = Month.June;
  private lastMonthOfSummer = Month.September;

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

